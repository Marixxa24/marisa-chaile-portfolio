const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, default: 'https://via.placeholder.com/600x400' },
    technologies: [{ type: String }],
    githubUrl: { type: String },
    liveUrl: { type: String },
    category: { type: String, default: 'web' },
    featured: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Project', projectSchema);