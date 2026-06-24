const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Configurar dotenv
dotenv.config();

// Verificar variables de entorno
console.log('🔍 Variables de entorno:');
console.log('PORT:', process.env.PORT);
console.log('MONGODB_URI:', process.env.MONGODB_URI ? '✓ DEFINIDA' : '✗ NO DEFINIDA');
console.log('JWT_SECRET:', process.env.JWT_SECRET ? '✓ DEFINIDA' : '✗ NO DEFINIDA');

if (!process.env.MONGODB_URI) {
    console.error('❌ ERROR CRÍTICO: MONGODB_URI no está definida');
    process.exit(1);
}

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas modularizadas (controladores usan los modelos)
const projectsRouter = require('./routes/projects');
const skillsRouter = require('./routes/skills');

// Conexión a MongoDB - VERSIÓN CORREGIDA (sin opciones obsoletas)
console.log('🔄 Intentando conectar a MongoDB...');
// console.log('📍 URI:', process.env.MONGODB_URI.substring(0, 50) + '...');

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('✅ Conectado a MongoDB exitosamente');
    })
    .catch(err => {
        console.error('❌ Error conectando a MongoDB:');
        console.error('   Nombre:', err.name);
        console.error('   Mensaje:', err.message);
        console.error('   Código:', err.code);
    });

// Rutas API
app.get('/', (req, res) => {
    res.json({ 
        message: '🚀 API del Portfolio funcionando',
        status: 'OK',
        mongodb: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected'
    });
});

app.use('/api/projects', projectsRouter);
app.use('/api/skills', skillsRouter);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});