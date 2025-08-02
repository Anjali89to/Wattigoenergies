import express from 'express';
import upload from '../middleware/upload.js';
import {
  addCollectionProduct,
  getAllCollectionProducts,
  deleteCollectionProduct,
} from '../controllers/collectionController.js';

const router = express.Router();

router.post(
  '/add',
  upload.fields([
    { name: 'image1', maxCount: 1 },
    { name: 'image2', maxCount: 1 },
    { name: 'image3', maxCount: 1 },
    { name: 'image4', maxCount: 1 },
  ]),
  addCollectionProduct
);

router.get('/all', getAllCollectionProducts);
router.delete('/delete/:id', deleteCollectionProduct);

export default router;
