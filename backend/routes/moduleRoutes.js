import express from 'express';
import {
  addModuleProduct,
  getAllModuleProducts,
  deleteModuleProduct,
} from '../controllers/moduleController.js';
import upload from '../middleware/upload.js';

const router = express.Router();

// POST - add module product (with one image)
router.post('/add', upload.single('image'), addModuleProduct);

// GET - fetch all module products
router.get('/all', getAllModuleProducts);

// DELETE - delete module product by ID
router.delete('/:id', deleteModuleProduct);

export default router;
