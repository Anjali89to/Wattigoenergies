import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from '../config/cloudinary.js';

// Setup Cloudinary Storage
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'products',
    format: async (req, file) => 'png', // will convert to PNG regardless
    public_id: (req, file) => `${Date.now()}-${file.originalname}`,
  },
});

// File Filter to Allow Only JPG, JPEG, PNG
const fileFilter = (req, file, cb) => {
  const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true); // Accept file
  } else {
    cb(new Error('Only JPG, JPEG, and PNG files are allowed!'), false); // Reject file
  }
};

// Multer Middleware
const upload = multer({
  storage,
  fileFilter,
});

export default upload;
