<script setup>
import { ref } from 'vue'

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
      <header class="text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8">
        <h1 class="text-4xl font-bold mb-2">Formulario de Currículum Vitae</h1>
        <p class="text-xl opacity-90">Completa todos los campos para generar tu CV</p>
      </header>

      <form @submit.prevent="enviarFormulario" class="bg-white rounded-lg shadow-xl overflow-hidden">
        <!-- Datos Personales -->
        <section class="p-6 border-b border-gray-200">
          <h2 class="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <span class="mr-2">📋</span> Datos Personales
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="space-y-2">
              <label for="nombre" class="block text-sm font-semibold text-gray-700">Nombre *</label>
              <input 
                id="nombre"
                v-model="personalData.nombre" 
                type="text" 
                required
                placeholder="Tu nombre"
                class="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
              >
            </div>
            
            <div class="space-y-2">
              <label for="apellidos" class="block text-sm font-semibold text-gray-700">Apellidos *</label>
              <input 
                id="apellidos"
                v-model="personalData.apellidos" 
                type="text" 
                required
                placeholder="Tus apellidos"
                class="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
              >
            </div>

            
            <div class="space-y-2">
              <label for="telefono" class="block text-sm font-semibold text-gray-700">Teléfono *</label>
              <input 
                id="telefono"
                v-model="personalData.telefono" 
                type="tel" 
                required
                placeholder="+34 123 456 789"
                class="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
              >
            </div>
            
            <div class="space-y-2">
              <label for="email" class="block text-sm font-semibold text-gray-700">Email *</label>
              <input 
                id="email"
                v-model="personalData.email" 
                type="email" 
                required
                placeholder="tu@email.com"
                class="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
              >
            </div>
            
            
            <div class="space-y-2">
              <label for="ciudad" class="block text-sm font-semibold text-gray-700">Ciudad</label>
              <input 
                id="ciudad"
                v-model="personalData.ciudad" 
                type="text"
                placeholder="Ciudad"
                class="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
              >
            </div>
            
            
            <div class="space-y-2">
              <label for="linkedin" class="block text-sm font-semibold text-gray-700">LinkedIn</label>
              <input 
                id="linkedin"
                v-model="personalData.linkedin" 
                type="url"
                placeholder="https://linkedin.com/in/tuperfil"
                class="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
              >
            </div>
            
            <div class="space-y-2">
              <label for="github" class="block text-sm font-semibold text-gray-700">GitHub</label>
              <input 
                id="github"
                v-model="personalData.github" 
                type="url"
                placeholder="https://github.com/tuusuario"
                class="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
              >
            </div>

            <div class="space-y-2">
              <label for="portfolio" class="block text-sm font-semibold text-gray-700">Portfolio</label>
              <input 
                id="portfolio"
                v-model="personalData.portfolio" 
                type="url"
                placeholder="https://tu-portfolio.com"
                class="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
              >
            </div>
          </div>

          
        </section>

        <!-- Formación -->
        <section class="p-6 border-b border-gray-200">
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-2xl font-bold text-gray-800 flex items-center">
              <span class="mr-2">🎓</span> Formación Académica
            </h2>
            <button 
              type="button" 
              @click="agregarEducacion" 
              class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold transition duration-200 flex items-center"
            >
              <span class="mr-1">+</span> Agregar Formación
            </button>
          </div>
          
          <div v-for="edu in educacion" :key="edu.id" class="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-4">
            <div class="flex justify-between items-center mb-4">
              <h3 class="text-lg font-semibold text-gray-700">Formación {{ educacion.indexOf(edu) + 1 }}</h3>
              <button 
                type="button" 
                @click="eliminarEducacion(edu.id)" 
                class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm transition duration-200"
                v-if="educacion.length > 1"
              >
                🗑️ Eliminar
              </button>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="space-y-2">
                <label class="block text-sm font-semibold text-gray-700">Título *</label>
                <input 
                  v-model="edu.titulo" 
                  type="text" 
                  required
                  placeholder="Grado, Máster, Curso..."
                  class="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
                >
              </div>
              
              <div class="space-y-2">
                <label class="block text-sm font-semibold text-gray-700">Institución *</label>
                <input 
                  v-model="edu.institucion" 
                  type="text" 
                  required
                  placeholder="Universidad, Centro de estudios..."
                  class="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
                >
              </div>
              
              <div class="space-y-2">
                <label class="block text-sm font-semibold text-gray-700">Fecha Inicio</label>
                <input 
                  v-model="edu.fechaInicio" 
                  type="date"
                  class="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
                >
              </div>
              
              <div class="space-y-2">
                <label class="block text-sm font-semibold text-gray-700">Fecha Fin</label>
                <input 
                  v-model="edu.fechaFin" 
                  type="date"
                  class="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
                >
              </div>
              
              <div class="md:col-span-2 space-y-2">
                <label class="block text-sm font-semibold text-gray-700">Descripción</label>
                <textarea 
                  v-model="edu.descripcion" 
                  placeholder="Describe tu formación, especialización, calificaciones..."
                  rows="3"
                  class="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
                ></textarea>
              </div>
            </div>
          </div>
        </section>

        <!-- Experiencia -->
        <section class="p-6 border-b border-gray-200">
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-2xl font-bold text-gray-800 flex items-center">
              <span class="mr-2">💼</span> Experiencia Laboral
            </h2>
            <button 
              type="button" 
              @click="agregarExperiencia" 
              class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold transition duration-200 flex items-center"
            >
              <span class="mr-1">+</span> Agregar Experiencia
            </button>
          </div>
          
          <div v-for="exp in experiencia" :key="exp.id" class="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-4">
            <div class="flex justify-between items-center mb-4">
              <h3 class="text-lg font-semibold text-gray-700">Experiencia {{ experiencia.indexOf(exp) + 1 }}</h3>
              <button 
                type="button" 
                @click="eliminarExperiencia(exp.id)" 
                class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm transition duration-200"
                v-if="experiencia.length > 1"
              >
                🗑️ Eliminar
              </button>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="space-y-2">
                <label class="block text-sm font-semibold text-gray-700">Puesto *</label>
                <input 
                  v-model="exp.puesto" 
                  type="text" 
                  required
                  placeholder="Desarrollador, Analista, Gerente..."
                  class="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
                >
              </div>
              
              <div class="space-y-2">
                <label class="block text-sm font-semibold text-gray-700">Empresa *</label>
                <input 
                  v-model="exp.empresa" 
                  type="text" 
                  required
                  placeholder="Nombre de la empresa"
                  class="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
                >
              </div>
              
              <div class="space-y-2">
                <label class="block text-sm font-semibold text-gray-700">Fecha Inicio</label>
                <input 
                  v-model="exp.fechaInicio" 
                  type="date"
                  class="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
                >
              </div>
              
              <div class="space-y-2">
                <label class="block text-sm font-semibold text-gray-700">Fecha Fin</label>
                <input 
                  v-model="exp.fechaFin" 
                  type="date"
                  :disabled="exp.actual"
                  class="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed"
                >
              </div>
              
              <div class="space-y-2">
                <label class="flex items-center text-sm font-semibold text-gray-700 cursor-pointer">
                  <input 
                    v-model="exp.actual" 
                    type="checkbox"
                    @change="exp.actual ? exp.fechaFin = '' : null"
                    class="mr-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  >
                  Trabajo actual
                </label>
              </div>
              
              <div class="md:col-span-2 space-y-2">
                <label class="block text-sm font-semibold text-gray-700">Descripción del puesto</label>
                <textarea 
                  v-model="exp.descripcion" 
                  placeholder="Describe tus responsabilidades, logros, tecnologías utilizadas..."
                  rows="3"
                  class="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
                ></textarea>
              </div>
            </div>
          </div>
        </section>

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
