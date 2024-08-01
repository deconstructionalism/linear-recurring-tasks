import env from "env-var";

// load environment variables
const SERVER_BASE_URL = env.get("SERVER_BASE_URL").required().asUrlString();
const SERVER_PORT = env.get("SERVER_PORT").required().asPortNumber();
const LINEAR_OATH2_BASE_URL = env
  .get("LINEAR_OATH2_BASE_URL")
  .required()
  .asUrlString();
const LINEAR_OAUTH2_CLIENT_ID = env
  .get("LINEAR_OAUTH2_CLIENT_ID")
  .required()
  .asString();
const LINEAR_OAUTH2_CLIENT_SECRET = env
  .get("LINEAR_OAUTH2_CLIENT_SECRET")
  .required()
  .asString();
const LINEAR_APP_STATE = env.get("LINEAR_APP_STATE").required().asString();

export {
  SERVER_BASE_URL,
  SERVER_PORT,
  LINEAR_OATH2_BASE_URL,
  LINEAR_OAUTH2_CLIENT_ID,
  LINEAR_OAUTH2_CLIENT_SECRET,
  LINEAR_APP_STATE,
};
