import express from 'express';
import upload from '../middleware/upload.js';
import {
  addCatinverter,
  getAllCatinverters,
  deleteCatinverter,
} from '../controllers/catinverterController.js';

const router = express.Router();

router.post('/add', upload.single('image'), addCatinverter);
router.get('/', getAllCatinverters);
router.delete('/:id', deleteCatinverter);

export default router;
