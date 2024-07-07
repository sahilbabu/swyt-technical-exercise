import cors from 'cors';
import helmet from 'helmet';
import { Application } from 'express';

export const setupSecurity = (app: Application) => {
  /* Setup security middlewares
  * -------------------------- */
  app.use(cors({ origin: '*' }))
  app.use(helmet.hsts({ maxAge: 10886400000, includeSubDomains: true }))

};
