import express from 'express';
import {
  getAllVendors,
  approveVendor
} from '../controllers/adminController.js';

const router = express.Router();

// ✅ Token middleware hata diya — now public
router.get('/vendors', getAllVendors);
router.put('/approve/:id', approveVendor);

export default router;
