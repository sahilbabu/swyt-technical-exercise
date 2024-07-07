import { Router } from 'express';
import { createCategory, getCategories } from '../controllers/categoryController';
import { validateCreateCategory } from '../../../middlewares/validationMiddleware';

const router = Router();

router.post('/categories', validateCreateCategory, createCategory);
router.get('/categories', getCategories);

export default router;

// import { Router } from 'express';
// import { createCategory, getCategories } from '../controllers/categoryController';

// const router = Router();

// router.post('/categories', createCategory);
// router.get('/categories', getCategories);

// export default router;

