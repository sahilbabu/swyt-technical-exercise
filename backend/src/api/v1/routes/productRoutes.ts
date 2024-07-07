import { Router } from 'express';
import { createProduct, getProducts } from '../controllers/productController';
import { validateCreateProduct } from '../../../middlewares/validationMiddleware';

const router = Router();

router.post('/products', validateCreateProduct, createProduct);
router.get('/products', getProducts);

export default router;
