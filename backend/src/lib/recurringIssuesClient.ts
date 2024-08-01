import tokenCache from "./tokenCache";
import {
  IssueConnection,
  IssueLabelConnection,
  LinearClient,
  LinearFetch,
  ProjectConnection,
  TeamConnection,
  User,
  UserConnection,
} from "@linear/sdk";

class RecurringIssuesClient {
  client: LinearClient;

  /**
   * Create a new client to interact with the Linear API as pertains
   * to recurring issues.
   */
  constructor() {
    const accessToken = tokenCache.get()?.access_token;
    if (!accessToken) {
      throw new Error("No access token stored");
    }
    this.client = new LinearClient({ accessToken });
  }

  /**
   * Get the current Linear user.
   * @returns The current Linear user.
   */
  getCurrentUser = async (): LinearFetch<User> => {
    return this.client.viewer;
  };

  /**
   * Get all the Linear users.
   * @returns All the Linear users.
   */
  getUsers = async (): LinearFetch<UserConnection> => {
    return this.client.users();
  };

  /**
   * Get all the Linear issue labels.
   * @returns All the Linear issue labels.
   */
  getLabels = async (): LinearFetch<IssueLabelConnection> => {
    return this.client.issueLabels();
  };

  /**
   * Get all the Linear issues.
   * @returns All the Linear issues.
   */
  getIssues = async (): LinearFetch<IssueConnection> => {
    return this.client.issues();
  };

  /**
   * Get all the Linear projects.
   * @returns All the Linear projects.
   */
  getProjects = async (): LinearFetch<ProjectConnection> => {
    return this.client.projects();
  };

  /**
   * Get all the Linear teams.
   * @returns All the Linear teams.
   */
  getTeams = async (): LinearFetch<TeamConnection> => {
    return this.client.teams();
  };
}

export default RecurringIssuesClient;
