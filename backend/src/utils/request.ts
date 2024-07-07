
import { Request } from 'express';

/* Request Handler middleware
 * ------------------------- */
export const getQueryParams = (req: Request) => {
  const sortBy = req.query.sortBy as string;
  const order = req.query.order as string;
  const category = req.query.category ? parseInt(req.query.category as string) : undefined;
  const page = req.query.page ? parseInt(req.query.page as string) : 1;
  const limit = req.query.limit ? parseInt(req.query.limit as string) : 10;

  return { sortBy, order, category, page, limit };
};
