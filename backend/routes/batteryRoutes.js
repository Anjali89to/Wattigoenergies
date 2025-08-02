import express from 'express';
import upload from '../middleware/upload.js';
import {
  addBattery,
  getAllBatteries,
  deleteBattery,
} from '../controllers/batteryController.js';

const router = express.Router();

router.post('/add', upload.single('image'), addBattery);
router.get('/', getAllBatteries);
router.delete('/:id', deleteBattery);

export default router;
