/*  Load deps
 * ------------------------- */
import express from 'express';
import { PrismaClient } from '@prisma/client';
import apiRoutes from './api/v1/routes';
import config from './config/config';
import { setupLogger } from './middlewares/logger';
import { setupSecurity } from './middlewares/security';
import { setupBodyParser } from './middlewares/bodyParser';
import { setupCompression } from './middlewares/compression';

/* Create Express instance
 * ----------------------- */
const app = express();
const prisma = new PrismaClient();

/* Middlewares
 * ------------------------- */
setupLogger(app);
setupSecurity(app);
setupCompression(app);
setupBodyParser(app);


/* Routes
 * ------------------------- */
app.use('/api/v1', apiRoutes);

/* Export the app for testing
 * ------------------------- */
export default app; 