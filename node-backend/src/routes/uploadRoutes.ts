import express, { Router } from 'express';
import multer from 'multer';
import { uploadController } from '../controllers/uploadController';
import { upload } from '../middleware/upload';

const router = Router();

// const upload = multer({ storage: multer.memoryStorage() });

router.post('/', upload.single('file'), uploadController);

export default router;
