/*  Load deps
 * ------------------------- */
import express from 'express';
import { PrismaClient } from '@prisma/client';
import apiRoutes from './api/v1/routes';
import config from './config/config';

/* Create Express instance
 * ----------------------- */
const app = express();
const prisma = new PrismaClient();



/* Routes
 * ------------------------- */
app.use('/api/v1', apiRoutes);

/* Start server
 * ------------------------- */
const PORT = config.port;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

