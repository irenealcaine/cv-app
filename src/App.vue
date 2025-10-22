<script setup>
import { ref } from 'vue'
import CVHeader from './components/CVHeader.vue'
import PersonalDataForm from './components/PersonalDataForm.vue'
import EducationForm from './components/EducationForm.vue'
import ExperienceForm from './components/ExperienceForm.vue'

// Estado reactivo
const personalData = ref({
  nombre: '',
  apellidos: '',
  fechaNacimiento: '',
  telefono: '',
  email: '',
  direccion: '',
  ciudad: '',
  codigoPostal: '',
  linkedin: '',
  github: ''
})

const educacion = ref([])
const experiencia = ref([])

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
    descripcion: ''
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

// Funciones para manejar experiencia
const agregarExperiencia = () => {
  experiencia.value.push({
    id: Date.now(),
    puesto: '',
    empresa: '',
    fechaInicio: '',
    fechaFin: '',
    descripcion: '',
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

// Función para enviar formulario
const enviarFormulario = () => {
  const cvData = {
    datosPersonales: personalData.value,
    formacion: educacion.value,
    experiencia: experiencia.value
  }
  
  console.log('Datos del CV:', cvData)
  alert('¡Formulario enviado! Revisa la consola para ver los datos.')
}

// Agregar elementos iniciales
agregarEducacion()
agregarExperiencia()
</script>

<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <CVHeader />

      <form @submit.prevent="enviarFormulario" class="bg-white rounded-lg shadow-xl overflow-hidden">
        
        <PersonalDataForm 
          :personalData="personalData"
          @update-personal-data="updatePersonalData"
        />

        <EducationForm 
          :educacion="educacion"
          @add-education="agregarEducacion"
          @remove-education="eliminarEducacion"
          @update-education="updateEducation"
        />

        <ExperienceForm 
          :experiencia="experiencia"
          @add-experience="agregarExperiencia"
          @remove-experience="eliminarExperiencia"
          @update-experience="updateExperience"
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

<style scoped>
/* Estilos adicionales si son necesarios */
</style>
