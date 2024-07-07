import { Request, Response, NextFunction } from 'express';
import { validationResult, body } from 'express-validator';

export const validateCreateCategory = [
  body('name').notEmpty().withMessage('Name is required'),
  body('parentCategoryId').optional({ nullable: true }).isInt({ min: 1 }).withMessage('Parent Category ID must be a positive integer'),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

export const validateCreateProduct = [
  body('name').notEmpty().withMessage('Name is required'),
 //  body('description').notEmpty().withMessage('Description is required'),
  body('price').isFloat({ gt: 0 }).withMessage('Price must be a positive number'),
  body('image').notEmpty().withMessage('Image URL is required').isURL().withMessage('Image must be a valid URL'),
  body('categoryId').isInt({ min: 1 }).withMessage('Category ID must be a positive integer'),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];
