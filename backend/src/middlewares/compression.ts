import compression from 'compression';
import { Application } from 'express';

export const setupCompression = (app: Application) => {
    /* compression
    * ------------------------- */
    app.use(compression());
};
