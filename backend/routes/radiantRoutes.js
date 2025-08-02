import express from 'express';
import multer from 'multer';
import {
  createRadiant,
  updateRadiant,
  getAllRadiants,
  getRadiantById,
  deleteRadiant,
} from '../controllers/radiantController.js';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/', upload.array('images', 5), createRadiant);
router.put('/:id', upload.array('images', 5), updateRadiant);
router.get('/', getAllRadiants);
router.get('/:id', getRadiantById);
router.delete('/:id', deleteRadiant);

export default router;
