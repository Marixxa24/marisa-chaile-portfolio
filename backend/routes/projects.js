const express = require('express');
const router = express.Router();
const projectsController = require('../controllers/projectsController');

// GET /api/projects
router.get('/', projectsController.getAllProjects);

// GET /api/projects/:id
router.get('/:id', projectsController.getProjectById);

// POST /api/projects
router.post('/', projectsController.createProject);

// PUT /api/projects/:id
router.put('/:id', projectsController.updateProject);

// DELETE /api/projects/:id
router.delete('/:id', projectsController.deleteProject);

module.exports = router;
