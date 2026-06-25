const express = require('express');
const router = express.Router();
const skillsController = require('../controllers/skillsController');

// GET /api/skills
router.get('/', skillsController.getAllSkills);

// GET /api/skills/:id
router.get('/:id', skillsController.getSkillById);

// POST /api/skills
router.post('/', skillsController.createSkill);

// PUT /api/skills/:id
router.put('/:id', skillsController.updateSkill);

// DELETE /api/skills/:id
router.delete('/:id', skillsController.deleteSkill);

module.exports = router;
