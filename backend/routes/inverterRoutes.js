import express from 'express';
import upload from '../middleware/upload.js'; // <-- this uses CloudinaryStorage
import {
  uploadInverter,
  getAllInverters,
  getInverterById,
  deleteInverter
} from '../controllers/inverterController.js';

const router = express.Router();

// ✅ This will auto-upload to Cloudinary folder
const multiUpload = upload.fields([
  { name: 'image1', maxCount: 1 },
  { name: 'image2', maxCount: 1 },
  { name: 'image3', maxCount: 1 },
  { name: 'image4', maxCount: 1 },
]);

// ✅ Routes
router.post('/upload', multiUpload, uploadInverter);
router.get('/', getAllInverters);
router.get('/:id', getInverterById);
router.delete('/:id', deleteInverter);

export default router;
