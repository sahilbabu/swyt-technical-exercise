import { Response } from 'express';

/* Response Handler middleware 
 * ------------------------- */

export const sendCreated = (res: Response, body: any) => {
  // return res.status(201).send(body);
  return res.status(201).send({
    data:body.data,
    success: true,
    message: body.message
  });
};

export const sendBadRequest = (res: Response, message: string) => {
  return res.status(400).send({
    success: false,
    message: message
  });
};

export const sendUnauthorized = (res: Response, message: string) => {
  return res.status(401).send({
    success: false,
    message: message
  });
};

export const sendForbidden = (res: Response) => {
  return res.status(403).send({
    success: false,
    message: 'You do not have rights to access this resource.'
  });
};

export const sendNotFound = (res: Response) => {
  return res.status(404).send({
    success: false,
    message: 'Resource not found.'
  });
};

export const setHeadersForCORS = (req: any, res: Response, next: any) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, X-Access-Token, Content-Type, Accept');
  next();
};
