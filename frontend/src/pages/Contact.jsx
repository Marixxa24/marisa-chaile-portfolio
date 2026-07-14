import React, { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';


const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      // ✅ Enviar con EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setStatus(prev => ({ ...prev, submitted: false }));
      }, 5000);

    } catch (error) {
      console.error('Error al enviar:', error);
      setStatus({ submitting: false, submitted: false, error: 'Error al enviar el mensaje. Intenta de nuevo.' });
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1 className="page-title">Contacto</h1>
        <p className="contact-subtitle">
          ¿Tienes un proyecto en mente? ¡Hablemos!
        </p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h2>Información de Contacto</h2>
          
          <div className="info-item">
            <FaEnvelope className="info-icon" />
            <div>
              <h3>Email</h3>
              <a href="mailto:marisasolchaile@gmail.com">marisasolchaile@gmail.com</a>
            </div>
          </div>

          <div className="info-item">
            <FaLinkedin className="info-icon" />
            <div>
              <h3>LinkedIn</h3>
              <a href="https://www.linkedin.com/in/marisa-chaile/" target="_blank" rel="noreferrer">
                marisasolchaile
              </a>
            </div>
          </div>

          <div className="info-item">
            <FaMapMarkerAlt className="info-icon" />
            <div>
              <h3>Ubicación</h3>
              <p>La Rioja, Argentina</p>
            </div>
          </div>

          <div className="social-contact">
            <h3>Redes Sociales</h3>
            <div className="social-icons">
              <a href="https://github.com/marisa-chaile" target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/marisa-chaile/" target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/marisasolchaile/" target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <h2>Envíame un Mensaje</h2>
          
          {status.submitted && (
            <div className="success-message">
              ✅ ¡Mensaje enviado con éxito! Te contactaré pronto.
            </div>
          )}

          {status.error && (
            <div className="error-message">
              ❌ {status.error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Tu nombre"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="tu@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="¿En qué puedo ayudarte?"
                rows="5"
              />
            </div>

            <button 
              type="submit" 
              className="submit-btn"
              disabled={status.submitting}
            >
              {status.submitting ? 'Enviando...' : 'Enviar Mensaje'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;