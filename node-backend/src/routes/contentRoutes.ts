import { Router } from 'express';
import { getContent } from '../controllers/contentController';

const router = Router();

router.get('/get-content', getContent);

export default router;
