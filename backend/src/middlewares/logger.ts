import morgan from 'morgan';
import { Application } from 'express';

export const setupLogger = (app: Application) => {
  /*  Logging 
  * HTTP request logger middleware
  * -------------------------- */
  app.use(morgan('dev'));
};
