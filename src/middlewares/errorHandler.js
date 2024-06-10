import { HttpError } from 'http-errors';

export const errorHandler = (err, req, res, next) => {
  if (err instanceof HttpError) {
    res.status(err.status).json({
      status: err.status,
      message: err.message,
      data: err,
    });
  } else {
    res.status(500).json({
      status: 500,
      message: 'Something went wrong',
      data: err.message,
    });
  }
  next();
};

export const notFoundHandler = (req, res, next) => {
  const error = new HttpError(404, 'Route not found');
  next(error);
};
