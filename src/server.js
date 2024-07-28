import express from 'express';
import cors from 'cors';
import pino from 'pino-http';
import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundHandle } from './middlewares/notFoundHandler.js';
import { swaggerDocs } from './middlewares/swaggerDocs.js';
import cookieParser from 'cookie-parser';

import router from './routers/index.js';
import { UPLOAD_DIR } from './constants/index.js';

import { env } from './utils/env.js';
const PORT = Number(env('PORT', '3000'));

export const setupServer = () => {
  const app = express();

  // Middleware
  app.use(express.json());
  app.use(cors());
  app.use(pino({ transport: { target: 'pino-pretty' } }));
  app.use(cookieParser());

  // Static files
  app.use('/uploads', express.static(UPLOAD_DIR));

  // API documentation
  app.use('/api-docs', swaggerDocs);

  // Routes
  app.use(router);

  // Error handling
  app.use('*', notFoundHandle);
  app.use(errorHandler);

  // Start server
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

// Example usage of handlebars
import pkg from 'handlebars';
const { log } = pkg;

// Now you can use log from handlebars
log('Server setup complete');

