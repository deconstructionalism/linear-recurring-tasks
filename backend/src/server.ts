import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import authRouter from './routes/authRouter';
import recurringIssuesRouter from './routes/recurringIssuesRouter';
import { SERVER_BASE_URL, SERVER_PORT } from './config';

const app = express();

// Security middlewares
app.use(cors());
app.use(helmet());

app.get('/', async (_, res) => {
  res.send("Hello World");
});

app.use('/auth', authRouter);
app.use('/recurring-issues', recurringIssuesRouter);

const serverBaseURL = new URL(SERVER_BASE_URL);
serverBaseURL.port = `${SERVER_PORT}`;

app.listen(SERVER_PORT, () => {
  console.log(`Server is running on port ${serverBaseURL.toString()}`);
});


