import 'reflect-metadata';
import 'express-async-errors';
import express from 'express';
import { handleErrors } from './middlewares/handleErrors.middleware';
import { router } from './routers';

const app = express();
app.use(express.json());

app.use('/', router);

app.use(handleErrors);

export default app;
