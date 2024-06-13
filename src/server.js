import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import { env } from './utils/env.js';
import contactsRouter from './routers/contacts.js';
import { errorHandler, notFoundHandler } from './middlewares/errorHandler.js';

export const setupServer = () => {
  const app = express();
  const PORT = Number(env('PORT', '3000'));

  // Middleware
  app.use(express.json());
  app.use(cors());
  app.use(pino({ transport: { target: 'pino-pretty' } }));

  // Time logging middleware
  app.use((req, res, next) => {
    req.requestTime = new Date().toLocaleString();
    next();
  });

  // Routes
  app.get('/', (req, res) => {
    res.json({ message: 'Not found', requestTime: req.requestTime });
  });
  app.use(contactsRouter);
  app.use('*', notFoundHandler);

  // Error handling
  app.use(errorHandler);

  // Server
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
