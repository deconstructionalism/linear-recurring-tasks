import tokenCache from "./tokenCache";
import { LinearClient, LinearFetch, User } from "@linear/sdk";

class RecurringIssuesClient {
  client: LinearClient;

  constructor() {
    this.client = new LinearClient({
      accessToken: tokenCache.get()?.access_token,
    });
  }

  getCurrentUser = async (): LinearFetch<User> => {
    return this.client.viewer;
  };
}

export default RecurringIssuesClient;
