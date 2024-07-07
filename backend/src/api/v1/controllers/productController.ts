  /* Category Controller
  * ------------------------- */
import { Request, Response } from 'express';
import { createProductService, getProductsService } from '../services/productService';
import { getQueryParams } from '../../../utils/request';
import { getPagination, getPagingData } from '../../../utils/pagination';
import { getSorting } from '../../../utils/sorting';
import { sendCreated, sendBadRequest } from '../../../utils/response';
import { handleFileUpload } from '../../../utils/fileUpload';
import { isValidUrl } from '../../../utils/url';

export const createProduct = async (req: Request, res: Response) => {
  const { name, description, price, categoryId } = req.body;
  let image = req.body.image;

  if (!image || !isValidUrl(image)) {
    try {
      image = await handleFileUpload(req, res);
    } catch (err) {
      console.error('Error uploading file:', err);
      return sendBadRequest(res, 'Failed to upload image');
    }
  }

  console.log('Creating product with data:', { name, description, price, image, categoryId });

  try {
    const product = await createProductService({ name, description, price, image, categoryId });
    console.log('Product created:', product);
    sendCreated(res, { data: product, message: 'Product created successfully' });
  } catch (error) {
    console.error('Error creating product:', error);
    sendBadRequest(res, 'Failed to create product');
  }
};

export const getProducts = async (req: Request, res: Response) => {
  const {
    sortBy = 'price',
    order = 'asc',
    category = '',
    page = '1',
    limit = '6'
  } = req.query;

  const { sort, sortOrder } = getSorting(sortBy as string, order as string);
  const { limit: pageSize, page: currentPage } = getPagination(Number(page), Number(limit));

  const categoryId = category ? Number(category) : undefined;

  // console.log("<<<|getProducts|>>>", sort, sortOrder, categoryId, currentPage, pageSize);

  try {
    const data = await getProductsService(sort, sortOrder, categoryId, currentPage, pageSize);
    const response = getPagingData(data, currentPage, pageSize);
    res.status(200).json(response);
  } catch (error) {
    sendBadRequest(res, 'Failed to fetch products');
  }
};