// Proyectos destacados (fuente única: los usan el inicio y, como respaldo, la página Proyectos)
export const PROJECTS = [
  {
    name: "Fut Rioja",
    category: "fullstack",
    badge: "MVP en producción",
    url: "https://fut-rioja.vercel.app/",
    description:
      "La plataforma que conecta a jugadores, dueños de canchas y organizadores en La Rioja. Reservá, competí y gestioná el fútbol amateur desde un solo lugar.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Socket.io",
      "Tailwind CSS",
      "Cloudinary",
      "Leaflet / OpenStreetMap",
    ],
    features: [
      "Autenticación JWT con 4 roles (Jugador, Dueño de Cancha, Organizador de Torneos y Administrador)",
      "Reservas de canchas en tiempo real con notificaciones dinámicas mediante Socket.io",
      "Generación automática de fixtures, partidos y tablas de posiciones para torneos",
      "Paneles de control (Dashboards) adaptados y diferenciados según el rol del usuario",
      "Subida y gestión multimedia (fotos de perfiles/equipos y videos de canchas) con Cloudinary",
      "Geolocalización e integración interactiva de mapas utilizando Leaflet y OpenStreetMap",
      "Sistema de invitaciones rápidas para unirse a equipos mediante enlaces compartibles",
    ],
    img: "/assets/homee.jpeg",
  },
  {
    name: "Portfolio Personal",
    category: "fullstack",
    url: "https://github.com/Marixxa24/marisa-chaile-portfolio",
    description:
      "Portfolio interactivo full stack con diseño pastel, tecnologías flotantes animadas y formulario de contacto.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    features: [
      "Tecnologías flotantes animadas",
      "Diseño responsive en tonos pastel",
      "Formulario de contacto funcional",
      "Cursor personalizado",
    ],
    img: "/assets/portfolio-2.jpeg",
  },
  {
  name: "LogistiTrack",
  category: "fullstack",
  badge: "Full Stack · MERN",
  url: "https://github.com/Marixxa24/LogistiTrack",
  description:
    "Aplicación web para gestión de órdenes logísticas conectada a una API REST propia. Permite crear, editar, eliminar y filtrar órdenes en tiempo real con cálculo automático de costos de envío.",
  tech: ["React", "Node.js", "Express", "MongoDB", "Material UI", "Axios", "Context API"],
  features: [
    "CRUD completo de órdenes conectado a API REST real (sin mocks)",
    "Cálculo automático de costo logístico según provincia y peso en tiempo real",
    "Filtrado dinámico por estado: Pendiente, En tránsito, Entregado",
    "Notificaciones visuales de éxito/error en cada acción",
    "Manejo global de estado con Context API y Custom Hooks",
    "Actualización automática de listados sin recargar la página",
  ],
  img: "https://github.com/user-attachments/assets/c0fb545a-78a9-41d7-847c-db00d9e71997",
},
{
  name: "Smart Agenda AI",
  category: "fullstack",
  badge: "MERN + Google Gemini",
  url: "https://github.com/Marixxa24/smart-agenda-ai", // cambiá por el link real
  description:
    "Agenda inteligente que clasifica tus tareas automáticamente con IA. Solo escribís la tarea y Gemini analiza el texto y la categoriza en estudio, trabajo, salud o personal — sin que tengas que elegir nada.",
  tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Google Gemini AI", "Axios"],
  features: [
    "Clasificación automática de tareas con Google Gemini 3 Flash Preview",
    "El backend procesa, clasifica y persiste la tarea estructurada en MongoDB",
    "Interfaz SPA simple: solo escribís y la IA hace el resto",
    "Servicio de IA encapsulado en el backend (el frontend no toca la API key)",
    "En desarrollo: autenticación con Google OAuth 2.0 para agenda privada por usuario",
  ],
  img: "https://github.com/user-attachments/assets/57170496-a355-4b11-acf8-0276b21a4f03",
},
{
  name: "NorAl",
  category: "fullstack",
  badge: "Full Stack · SaaS de gestión",
  url: null,
  description:
    "Sistema de gestión para comercios de servicios: agenda de turnos, clientes, profesionales, control de stock, gastos y reportes, con reservas online y chatbot para clientes.",
  tech: ["React", "TypeScript", "Node.js", "Express", "tRPC", "MySQL", "Drizzle ORM", "Tailwind CSS", "Docker", "Vitest"],
  features: [
    "Agenda de turnos con estados, horarios por profesional y recuperación de cancelaciones",
    "Reservas online con enlace público mobile-first y chatbot guiado para clientes",
    "Control de stock con ingresos, egresos e historial de movimientos",
    "Reportes de ingresos, gastos y ganancia operativa, con soporte de 20 monedas latinoamericanas",
    "Pruebas automatizadas de seguridad, autenticación y recuperación de contraseña",
  ],
},
{
  name: "Atelier Boutique",
  category: "fullstack",
  badge: "E-commerce · MERN",
  url: "https://github.com/Marixxa24/atelier-boutique-ecommerce",
  description:
    "E-commerce de indumentaria con estética editorial, carrito lateral interactivo y gestión de stock por talles y colores.",
  tech: ["React", "Node.js", "Express", "MongoDB"],
  features: [
    "Carrito lateral interactivo",
    "Gestión de stock por talles y colores",
    "Diseño con estética editorial",
  ],
},
{
  name: "Gestión de Inventario",
  category: "fullstack",
  badge: "Full Stack · MERN",
  url: "https://github.com/Marixxa24/inventario-frontend-MernStack",
  description:
    "Sistema para gestionar el inventario de productos: interfaz web en React conectada a una API REST propia.",
  tech: ["React", "Node.js", "Express", "MongoDB"],
  features: [
    "API REST con CRUD completo de productos",
    "Endpoints de negocio para control de stock",
    "Frontend y backend en repositorios separados",
  ],
},
{
  name: "Automatización QA",
  category: "qa",
  badge: "QA Testing",
  url: "https://github.com/Marixxa24/pre-entrega-automatizacion-qa",
  description:
    "Pruebas automatizadas sobre SauceDemo con Python, Selenium y Pytest.",
  tech: ["Python", "Selenium", "Pytest"],
  features: [
    "Automatización de flujos web sobre SauceDemo",
    "Suite de tests organizada con Pytest",
  ],
},
{
  name: "Ámbar Estética",
  category: "frontend",
  badge: "Trabajo grupal · 19 commits",
  url: "https://github.com/FLUIDOROSA-GIT/Ambar",
  description:
    "Sitio web de un centro de estética que muestra tratamientos y servicios. Proyecto en equipo con diseño responsive y minimalista.",
  tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Git / GitHub"],
  features: [
    "Secciones de tratamientos, nosotros y contacto",
    "Diseño responsive y minimalista",
    "Trabajo colaborativo con ramas y control de versiones",
  ],
},
];
