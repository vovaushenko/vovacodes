/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextApiRequest, NextApiResponse } from 'next';
import ErrorHandler from '../utils/errorHandler';

/**
 * Middleware catch-all error handler function, executed whenever a middleware throws an error.
 *@function
 *@param {Error, NextApiRequest, NextApiResponse} params - will be automatically inferred from the context of execution
 *@resorted to use any type for error since it intrinsically has any type
 */
export function onError(
  err: any,
  req: NextApiRequest,
  res: NextApiResponse
): void {
  err.statusCode = err.statusCode || 500;

  let error = { ...err };

  error.message = err.message;

  // Wrong Mongoose Object ID Error
  if (err.name === 'CastError') {
    const message = `Resource not found. Invalid: ${err.path}`;
    error = new ErrorHandler(message, 400);
  }

  // Handling Mongoose Validation Error
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map((err: any) => err.message)[0];
    error = new ErrorHandler(message, 400);
  }

  res.status(err.statusCode).json({
    success: false,
    error,
    message: error.message,
    stack: error.stack,
  });
}
