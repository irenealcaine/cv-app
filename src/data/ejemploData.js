// Datos de ejemplo para el formulario de CV
export const datosEjemplo = {
  // Datos personales de ejemplo
  datosPersonales: {
    nombre: 'Lucía',
    apellidos: 'Fernandez López',
    descripcion: 'Desarrolladora Full Stack apasionada por crear soluciones tecnológicas innovadoras. Con experiencia en desarrollo web moderno y metodologías ágiles.',
    fechaNacimiento: '1995-03-15',
    telefono: '+34 123 45 67 89',
    email: 'lucia.fernandez@email.com',
    direccion: 'Calle Falsa 123, 4º B',
    ciudad: 'Valencia',
    codigoPostal: '46001',
    linkedin: 'https://linkedin.com/in/lucia-fernandez',
    github: 'https://github.com/lucia-fernandez',
    portfolio: 'https://lucia-fernandez.dev',
    foto: 'https://ui-avatars.com/api/?name=Lucía+Fernandez&background=0D8ABC&color=fff&size=128'
  },

  // Educación de ejemplo
  educacion: [
    {
      id: 1001,
      titulo: 'Ingeniería Informática',
      institucion: 'Universidad Politécnica de Madrid',
      fechaInicio: '2013-09',
      fechaFin: '2017-06',
      descripcion: [
        'Especialización en Ingeniería del Software',
        'Proyecto final sobre aplicaciones web progresivas con React y Node.js',
        'Promedio de 8.5/10 - Matrícula de Honor en 3 asignaturas'
      ]
    },
    {
      id: 1002,
      titulo: 'Máster en Desarrollo Web Full Stack',
      institucion: 'TheBridge Academy',
      fechaInicio: '2017-09',
      fechaFin: '2018-03',
      descripcion: [
        'Máster intensivo de 800 horas en desarrollo web',
        'Tecnologías: Vue.js, React, Node.js, MongoDB, Express',
        'Metodologías ágiles: Scrum y Kanban',
        'Proyecto final: E-commerce completo con panel de administración'
      ]
    }
  ],

  // Experiencia de ejemplo
  experiencia: [
    {
      id: 2001,
      puesto: 'Desarrolladora Full Stack',
      empresa: 'TechSolutions S.L.',
      fechaInicio: '2021-06',
      fechaFin: '',
      descripcion: [
        'Desarrollo de aplicaciones web con Vue.js y Node.js',
        'Implementación de APIs RESTful y gestión de bases de datos MySQL/MongoDB',
        'Colaboración en equipos ágiles usando Scrum',
        'Líder técnico en proyecto de migración a microservicios',
        'Mejora del rendimiento de aplicaciones en un 40%'
      ],
      actual: true
    },
    {
      id: 2002,
      puesto: 'Desarrolladora Frontend',
      empresa: 'StartupInnovate',
      fechaInicio: '2019-03',
      fechaFin: '2021-05',
      descripcion: [
        'Desarrollo de interfaces de usuario responsivas con React y TypeScript',
        'Optimización de rendimiento y experiencia de usuario',
        'Integración con APIs REST y GraphQL',
        'Implementación de tests unitarios y de integración con Jest'
      ],
      actual: false
    },
    {
      id: 2003,
      puesto: 'Desarrolladora Junior',
      empresa: 'WebDev Agency',
      fechaInicio: '2018-04',
      fechaFin: '2019-02',
      descripcion: [
        'Desarrollo de sitios web corporativos con HTML5, CSS3 y JavaScript',
        'Maquetación responsive para múltiples dispositivos',
        'Optimización SEO y mejora de velocidad de carga',
        'Colaboración con diseñadores UX/UI'
      ],
      actual: false
    }
  ],

  // Otros datos de ejemplo
  otrosDatos: [
    {
      id: 3001,
      texto: 'Carnet de conducir B'
    },
    {
      id: 3002,
      texto: 'Disponibilidad para viajar'
    },
    {
      id: 3003,
      texto: 'Inglés nivel B2 - First Certificate'
    },
    {
      id: 3004,
      texto: 'Francés nivel básico A2'
    }
  ]
}