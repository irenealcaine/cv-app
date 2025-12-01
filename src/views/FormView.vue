<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <CVHeader @llenar-datos-ejemplo="llenarDatosEjemplo" />

      <form @submit.prevent="enviarFormulario" class="bg-white rounded-lg shadow-xl overflow-hidden">
        
        <PersonalDataForm 
          :personalData="personalData"
          @update-personal-data="updatePersonalData"
        />

        <ExperienceForm 
          :experiencia="experiencia"
          @add-experience="agregarExperiencia"
          @remove-experience="eliminarExperiencia"
          @update-experience="updateExperience"
          @add-exp-description-point="addExperienceDescriptionPoint"
          @remove-exp-description-point="removeExperienceDescriptionPoint"
          @update-exp-description-point="updateExperienceDescriptionPoint"
        />

        <EducationForm 
          :educacion="educacion"
          @add-education="agregarEducacion"
          @remove-education="eliminarEducacion"
          @update-education="updateEducation"
          @add-description-point="addEducationDescriptionPoint"
          @remove-description-point="removeEducationDescriptionPoint"
          @update-description-point="updateEducationDescriptionPoint"
        />

        <OtherDataForm 
          :otrosDatos="otrosDatos"
          @add-other-data="agregarOtrosDatos"
          @remove-other-data="eliminarOtrosDatos"
          @update-other-data="updateOtherData"
        />

        <!-- Botón de envío -->
        <div class="p-6 bg-gray-50 text-center">
          <button 
            type="submit"
            class="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition duration-300 transform hover:scale-105 shadow-lg"
          >
            📄 Generar CV
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import CVHeader from '../components/CVHeader.vue'
import PersonalDataForm from '../components/PersonalDataForm.vue'
import EducationForm from '../components/EducationForm.vue'
import ExperienceForm from '../components/ExperienceForm.vue'
import OtherDataForm from '../components/OtherDataForm.vue'
import { useCVStore } from '../composables/useCVStore.js'

const router = useRouter()
const { setCVData, getCVData } = useCVStore()

// Estado reactivo
const personalData = ref({
  nombre: '',
  apellidos: '',
  descripcion: '',
  fechaNacimiento: '',
  telefono: '',
  email: '',
  direccion: '',
  ciudad: '',
  codigoPostal: '',
  linkedin: '',
  github: '',
  portfolio: '',
  foto: ''
})

const educacion = ref([])
const experiencia = ref([])
const otrosDatos = ref([])

// Cargar datos existentes del store al montar el componente
onMounted(() => {
  const existingData = getCVData()
  
  // Si hay datos existentes, cargarlos
  if (existingData.datosPersonales.nombre) {
    personalData.value = { ...existingData.datosPersonales }
    educacion.value = existingData.formacion.map(edu => ({ ...edu }))
    experiencia.value = existingData.experiencia.map(exp => ({ ...exp }))
    otrosDatos.value = existingData.otrosDatos ? existingData.otrosDatos.map(otros => ({ ...otros })) : []
  } else {
    // Si no hay datos, agregar elementos iniciales vacíos
    agregarEducacion()
    agregarExperiencia()
    agregarOtrosDatos()
  }
})

// Funciones para manejar datos personales
const updatePersonalData = ({ field, value }) => {
  personalData.value[field] = value
}

// Funciones para manejar formación
const agregarEducacion = () => {
  educacion.value.push({
    id: Date.now(),
    titulo: '',
    institucion: '',
    fechaInicio: '',
    fechaFin: '',
    descripcion: ['']
  })
}

const eliminarEducacion = (id) => {
  educacion.value = educacion.value.filter(edu => edu.id !== id)
}

const updateEducation = ({ id, field, value }) => {
  const education = educacion.value.find(edu => edu.id === id)
  if (education) {
    education[field] = value
  }
}

// Funciones para manejar puntos de descripción en educación
const addEducationDescriptionPoint = (id) => {
  const education = educacion.value.find(edu => edu.id === id)
  if (education) {
    education.descripcion.push('')
  }
}

const removeEducationDescriptionPoint = ({ id, index }) => {
  const education = educacion.value.find(edu => edu.id === id)
  if (education && education.descripcion.length > 1) {
    education.descripcion.splice(index, 1)
  }
}

const updateEducationDescriptionPoint = ({ id, index, value }) => {
  const education = educacion.value.find(edu => edu.id === id)
  if (education) {
    education.descripcion[index] = value
  }
}

// Funciones para manejar experiencia
const agregarExperiencia = () => {
  experiencia.value.push({
    id: Date.now(),
    puesto: '',
    empresa: '',
    fechaInicio: '',
    fechaFin: '',
    descripcion: [''],
    actual: false
  })
}

const eliminarExperiencia = (id) => {
  experiencia.value = experiencia.value.filter(exp => exp.id !== id)
}

const updateExperience = ({ id, field, value }) => {
  const experience = experiencia.value.find(exp => exp.id === id)
  if (experience) {
    experience[field] = value
  }
}

// Funciones para manejar puntos de descripción en experiencia
const addExperienceDescriptionPoint = (id) => {
  const experience = experiencia.value.find(exp => exp.id === id)
  if (experience) {
    experience.descripcion.push('')
  }
}

const removeExperienceDescriptionPoint = ({ id, index }) => {
  const experience = experiencia.value.find(exp => exp.id === id)
  if (experience && experience.descripcion.length > 1) {
    experience.descripcion.splice(index, 1)
  }
}

const updateExperienceDescriptionPoint = ({ id, index, value }) => {
  const experience = experiencia.value.find(exp => exp.id === id)
  if (experience) {
    experience.descripcion[index] = value
  }
}

// Funciones para manejar otros datos
const agregarOtrosDatos = () => {
  otrosDatos.value.push({
    id: Date.now(),
    texto: ''
  })
}

const eliminarOtrosDatos = (id) => {
  otrosDatos.value = otrosDatos.value.filter(otros => otros.id !== id)
}

const updateOtherData = ({ id, value }) => {
  const otherData = otrosDatos.value.find(otros => otros.id === id)
  if (otherData) {
    otherData.texto = value
  }
}

// Función para llenar con datos de ejemplo
const llenarDatosEjemplo = () => {
  // Datos personales de ejemplo
  personalData.value = {
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
  }

  // Educación de ejemplo
  educacion.value = [
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
  ]

  // Experiencia de ejemplo
  experiencia.value = [
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
  ]

  // Otros datos de ejemplo
  otrosDatos.value = [
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

// Función para enviar formulario
const enviarFormulario = () => {
  const cvData = {
    datosPersonales: personalData.value,
    formacion: educacion.value,
    experiencia: experiencia.value,
    otrosDatos: otrosDatos.value
  }
  
  // Validar que al menos el nombre esté lleno
  if (!cvData.datosPersonales.nombre.trim()) {
    alert('Por favor, ingresa al menos tu nombre antes de generar el CV.')
    return
  }
  
  // Guardar datos en el store
  setCVData(cvData)
  
  // Redirigir a la vista del CV
  router.push('/cv')
}
</script>