import express from "express";
import RecurringIssuesClient from "../lib/recurringIssuesClient";

const router = express.Router();

/**
 * Get the current Linear user.
 */
router.get("/users", async (_, res) => {
  const recurringIssuesClient = new RecurringIssuesClient();

  const users = await recurringIssuesClient.getUsers();

  res.send(users.nodes);
});

/**
 * Get all the Linear issues.
 */
router.get("/issues", async (_, res) => {
  const recurringIssuesClient = new RecurringIssuesClient();

  const issues = await recurringIssuesClient.getIssues();

  res.send(issues.nodes);
});

export default router;
