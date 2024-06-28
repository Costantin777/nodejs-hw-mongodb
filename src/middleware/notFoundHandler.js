import { json } from 'express';
import { HttpError } from 'http-errors';

export const notFoundHandler = (err, req, res, next) => {
  if (err instanceof HttpError) {
    res.status(err.status).json({
      status: err.status,
      message: err.name,
      data: err,
    });
    return;
  }
  // Змінюємо статус на 400, якщо ідентифікатор невалідний
  res.status(400).json({
    message: 'Id is not valid',
  });
};
