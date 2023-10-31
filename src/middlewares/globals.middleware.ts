import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { ZodTypeAny } from 'zod';
import { AppError } from '../errors/AppError.error';

export const validateBodyMiddleware = (schema: ZodTypeAny) => (req: Request, res: Response, next: NextFunction): void => {
  req.body = schema.parse(req.body);

  next();
}

export const verifyToken = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.headers.authorization?.split(' ')[1];

  if(!token) {
    throw new AppError('Missing bearer token', 401);
  }

  const decoded = verify(token, process.env.SECRET_KEY!);

  res.locals = { ...res.locals, decoded };
  
  return next();
}

export const validatePermissions = (req: Request, res: Response, next: NextFunction): void => {
  const { decoded } = res.locals;

  if(decoded.admin || (decoded.sub === req.params.id && req.params.id)) {
    return next();
  }

  throw new AppError('Insufficient permission', 403);
}

export const verifyAdmin = (req: Request, res: Response, next: NextFunction): void => {
  const { decoded } = res.locals;

  if(!decoded.admin) {
    throw new AppError('Insufficient permission', 403);
  }

  return next();
}