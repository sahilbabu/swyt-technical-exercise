import bodyParser from 'body-parser';
import { Application } from 'express';

export const setupBodyParser = (app: Application) => {
  /* Setup bodyParser middlewares
  * ------------------------- */
  app.use(bodyParser.json({ limit: '1mb' }))
  app.use(bodyParser.urlencoded({ limit: '1mb', extended: true }))
};
