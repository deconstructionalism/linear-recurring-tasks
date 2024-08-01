import axios from "axios";
import express from "express";
import querystring from "querystring";
import tokenCache, { ILinearToken } from "../lib/tokenCache";
import {
  LINEAR_APP_STATE,
  LINEAR_OAUTH2_CLIENT_ID,
  LINEAR_OAUTH2_CLIENT_SECRET,
  SERVER_BASE_URL,
  SERVER_PORT,
} from "../config";

const router = express.Router();

// create a URL object for the OAuth2 callback URL
const callbackURL = new URL(SERVER_BASE_URL);
callbackURL.port = `${SERVER_PORT}`;
callbackURL.pathname = "/auth/callback";

/**
 * Redirect the user to the Linear OAuth2 authorization endpoint.
 */
router.get("/login", (_, res) => {
  // generate the URL for the Linear OAuth2 authorization endpoint
  const params = {
    client_id: LINEAR_OAUTH2_CLIENT_ID,
    actor: "user",
    state: LINEAR_APP_STATE,
    scope: "issues:create",
    response_type: "code",
    redirect_uri: callbackURL.toString(),
  };
  const searchParams = querystring.stringify(params);
  const url = new URL("https://linear.app/oauth/authorize");
  url.search = searchParams;

  // redirect the user to the Linear OAuth2 authorization endpoint
  res.redirect(url.toString());
});

/**
 * Handle the OAuth2 callback from Linear.
 */
router.get("/callback", async (req, res) => {
  const { state, code } = req.query;

  // validate the client state
  if (state !== LINEAR_APP_STATE) {
    return res
      .status(400)
      .send("Invalid client state, you may be a victim of CSRF");
  }

  // exchange the code for a token
  try {
    const tokenRes = await axios.post<ILinearToken>(
      "https://api.linear.app/oauth/token",
      {
        code: code,
        redirect_uri: callbackURL.toString(),
        client_id: LINEAR_OAUTH2_CLIENT_ID,
        client_secret: LINEAR_OAUTH2_CLIENT_SECRET,
        grant_type: "authorization_code",
      },
      { headers: { "Content-Type": "application/x-www-form-urlencoded" } },
    );

    // store the token in the cache
    tokenCache.set(tokenRes.data);
    res.send("Successfully exchanged code for token");
  } catch (error) {
    console.error(error);
    return res.status(500).send("Failed to exchange code for token");
  }
});

/**
 * Check if a Linear token is stored in the cache.
 */
router.get("/check-token", (_, res) => {
  res.send(tokenCache.get());
});

export default router;
