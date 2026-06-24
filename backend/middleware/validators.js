// Validadores para Projects y Skills
// Uso: aplicar en rutas antes de los controladores

exports.validateProject = (req, res, next) => {
  const { title, description, technologies, category } = req.body;
  const errors = [];

  if (!title || typeof title !== 'string' || title.trim().length === 0) {
    errors.push('title es requerido y debe ser un string no vacío');
  }
  if (!description || typeof description !== 'string' || description.trim().length === 0) {
    errors.push('description es requerido y debe ser un string no vacío');
  }
  if (technologies && !Array.isArray(technologies)) {
    errors.push('technologies debe ser un array');
  }
  if (category && !['frontend', 'backend', 'fullstack', 'web', 'mobile'].includes(category)) {
    errors.push('category debe ser uno de: frontend, backend, fullstack, web, mobile');
  }

  if (errors.length > 0) {
    return res.status(400).json({
      message: 'Validación fallida',
      errors
    });
  }

  next();
};

exports.validateSkill = (req, res, next) => {
  const { name, level, category, icon } = req.body;
  const errors = [];

  if (!name || typeof name !== 'string' || name.trim().length === 0) {
    errors.push('name es requerido y debe ser un string no vacío');
  }
  if (level !== undefined) {
    if (typeof level !== 'number' || level < 0 || level > 100) {
      errors.push('level debe ser un número entre 0 y 100');
    }
  }
  if (category && !['frontend', 'backend', 'database', 'tools'].includes(category)) {
    errors.push('category debe ser uno de: frontend, backend, database, tools');
  }

  if (errors.length > 0) {
    return res.status(400).json({
      message: 'Validación fallida',
      errors
    });
  }

  next();
};
