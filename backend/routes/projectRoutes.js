import express from 'express';
import upload from '../middleware/upload.js';
import { addProject, getAllProjects, deleteProject } from '../controllers/projectController.js';

const router = express.Router();

router.post('/add', upload.single('image'), addProject);
router.get('/', getAllProjects);
router.delete('/:id', deleteProject);

export default router;
