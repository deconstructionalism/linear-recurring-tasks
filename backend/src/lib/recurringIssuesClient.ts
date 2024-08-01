import tokenCache from "./tokenCache";
import { LinearClient, LinearFetch, User } from "@linear/sdk";

class RecurringIssuesClient {
  client: LinearClient;

  constructor() {
    const accessToken = tokenCache.get()?.access_token;
    if (!accessToken) {
      throw new Error("No access token stored");
    }
    this.client = new LinearClient({ accessToken });
  }

  getCurrentUser = async (): LinearFetch<User> => {
    return this.client.viewer;
  };
}

export default RecurringIssuesClient;
