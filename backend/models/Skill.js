const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
    name: { type: String, required: true },
    level: { type: Number, min: 0, max: 100, default: 80 },
    category: { type: String, enum: ['frontend', 'backend', 'database', 'tools'], default: 'frontend' },
    icon: { type: String, default: '💻' }
});

module.exports = mongoose.model('Skill', skillSchema);