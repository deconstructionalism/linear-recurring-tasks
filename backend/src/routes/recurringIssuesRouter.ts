import express from 'express';
import RecurringIssuesClient from '../lib/recurringIssuesClient';

const router = express.Router();


router.get('/', async (_, res) => {
  const recurringIssuesClient = new RecurringIssuesClient();

  const a = await recurringIssuesClient.getCurrentUser();

  res.send(a);
});

export default router;