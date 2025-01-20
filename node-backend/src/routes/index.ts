import { Router } from 'express';
import contentRoutes from './contentRoutes';
import uploadRoutes from './uploadRoutes';

const router = Router();

router.use('/content', contentRoutes);
router.use('/upload', uploadRoutes);

export default router;
