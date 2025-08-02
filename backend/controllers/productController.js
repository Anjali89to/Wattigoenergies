import Project from '../models/projectModel.js';

// Add new project
export const addProject = async (req, res) => {
  try {
    const { title, description, price } = req.body;
    const image = req.file?.path;

    if (!title || !description || !price || !image) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    const newProject = new Project({ title, description, price, image });
    await newProject.save();
    res.status(201).json({ message: 'Project added successfully.', project: newProject });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// Get all projects
export const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching projects', error: error.message });
  }
};

// Delete a project
export const deleteProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.status(200).json({ message: 'Project deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting project', error: error.message });
  }
};
