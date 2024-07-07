import { Router } from 'express';
import productRoutes from './productRoutes';
import categoryRoutes from './categoryRoutes';

const router = Router();

// test rout to check is it working
router.get('/', (req, res)=>{
    res.status(200).json({message:"working!"});
});

router.use('/', productRoutes);
router.use('/', categoryRoutes);

export default router;
