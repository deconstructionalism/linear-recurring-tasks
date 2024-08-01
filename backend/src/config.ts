import env from "env-var"

// load environment variables
const LINEAR_APP_STATE = env.get("LINEAR_APP_STATE").required().asString();
const LINEAR_OAUTH2_CLIENT_ID = env
  .get("LINEAR_OAUTH2_CLIENT_ID")
  .required()
  .asString();
const LINEAR_OAUTH2_CLIENT_SECRET = env
  .get("LINEAR_OAUTH2_CLIENT_SECRET")
  .required()
  .asString();
const SERVER_BASE_URL = env.get("SERVER_BASE_URL").required().asUrlString();
const SERVER_PORT = env.get("SERVER_PORT").required().asPortNumber();

export {
  LINEAR_APP_STATE,
  LINEAR_OAUTH2_CLIENT_ID,
  LINEAR_OAUTH2_CLIENT_SECRET,
  SERVER_BASE_URL,
  SERVER_PORT,
};