import express from 'express';
import { addInverter, getAllInverters, deleteInverter } from '../controllers/solarInverterController.js';
import upload from '../middleware/upload.js';

const router = express.Router();

router.post(
  '/add',
  upload.fields([
    { name: 'image1', maxCount: 1 },
    { name: 'image2', maxCount: 1 },
    { name: 'image3', maxCount: 1 },
  ]),
  addInverter
);

router.get('/', getAllInverters);
router.delete('/:id', deleteInverter);

export default router;
