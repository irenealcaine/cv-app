<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Botón para volver al formulario -->
      <div class="mb-6">
        <button 
          @click="volverAlFormulario"
          class="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg font-semibold transition duration-200 flex items-center"
        >
          ← Volver al Formulario
        </button>
      </div>

      <!-- CV Display -->
      <div class="bg-white rounded-lg shadow-xl overflow-hidden">
        
        <!-- Header del CV -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8">
          <div class="text-center">
            <h1 class="text-4xl font-bold mb-2">
              {{ cvData.datosPersonales.nombre }} {{ cvData.datosPersonales.apellidos }}
            </h1>
            <div class="flex flex-wrap justify-center gap-4 text-lg">
              <span v-if="cvData.datosPersonales.telefono">📞 {{ cvData.datosPersonales.telefono }}</span>
              <span v-if="cvData.datosPersonales.email">✉️ {{ cvData.datosPersonales.email }}</span>
              <span v-if="cvData.datosPersonales.ciudad">📍 {{ cvData.datosPersonales.ciudad }}</span>
            </div>
          </div>
        </div>

        <!-- Información Personal -->
        <section v-if="hasPersonalInfo" class="p-6 border-b border-gray-200">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="mr-2">👤</span> Información Personal
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div v-if="cvData.datosPersonales.fechaNacimiento" class="flex items-center">
              <span class="font-semibold text-gray-700 w-32">Fecha Nacimiento:</span>
              <span>{{ formatDate(cvData.datosPersonales.fechaNacimiento) }}</span>
            </div>
            <div v-if="cvData.datosPersonales.direccion" class="flex items-center">
              <span class="font-semibold text-gray-700 w-32">Dirección:</span>
              <span>{{ cvData.datosPersonales.direccion }}</span>
            </div>
            <div v-if="cvData.datosPersonales.codigoPostal" class="flex items-center">
              <span class="font-semibold text-gray-700 w-32">Código Postal:</span>
              <span>{{ cvData.datosPersonales.codigoPostal }}</span>
            </div>
          </div>
        </section>

        <!-- Enlaces -->
        <section v-if="hasLinks" class="p-6 border-b border-gray-200">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="mr-2">🔗</span> Enlaces
          </h2>
          <div class="flex flex-wrap gap-4">
            <a v-if="cvData.datosPersonales.linkedin" 
               :href="cvData.datosPersonales.linkedin" 
               target="_blank"
               class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition duration-200 flex items-center">
              <span class="mr-2">💼</span> LinkedIn
            </a>
            <a v-if="cvData.datosPersonales.github" 
               :href="cvData.datosPersonales.github" 
               target="_blank"
               class="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg transition duration-200 flex items-center">
              <span class="mr-2">🐙</span> GitHub
            </a>
          </div>
        </section>

        <!-- Formación Académica -->
        <section v-if="cvData.formacion.length > 0" class="p-6 border-b border-gray-200">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="mr-2">🎓</span> Formación Académica
          </h2>
          <div class="space-y-4">
            <div v-for="edu in cvData.formacion" :key="edu.id" class="bg-gray-50 rounded-lg p-4">
              <h3 class="text-lg font-semibold text-gray-800">{{ edu.titulo }}</h3>
              <p class="text-blue-600 font-medium">{{ edu.institucion }}</p>
              <div class="text-gray-600 text-sm mt-1">
                <span v-if="edu.fechaInicio || edu.fechaFin">
                  {{ formatDate(edu.fechaInicio) }} - {{ edu.fechaFin ? formatDate(edu.fechaFin) : 'En curso' }}
                </span>
              </div>
              <p v-if="edu.descripcion" class="text-gray-700 mt-2">{{ edu.descripcion }}</p>
            </div>
          </div>
        </section>

        <!-- Experiencia Laboral -->
        <section v-if="cvData.experiencia.length > 0" class="p-6">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="mr-2">💼</span> Experiencia Laboral
          </h2>
          <div class="space-y-4">
            <div v-for="exp in cvData.experiencia" :key="exp.id" class="bg-gray-50 rounded-lg p-4">
              <h3 class="text-lg font-semibold text-gray-800">{{ exp.puesto }}</h3>
              <p class="text-blue-600 font-medium">{{ exp.empresa }}</p>
              <div class="text-gray-600 text-sm mt-1">
                <span v-if="exp.fechaInicio || exp.fechaFin || exp.actual">
                  {{ formatDate(exp.fechaInicio) }} - {{ exp.actual ? 'Actual' : formatDate(exp.fechaFin) }}
                </span>
              </div>
              <p v-if="exp.descripcion" class="text-gray-700 mt-2">{{ exp.descripcion }}</p>
            </div>
          </div>
        </section>

        <!-- Acciones -->
        <div class="p-6 bg-gray-50 flex justify-center gap-4">
          <button 
            @click="imprimirCV"
            class="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition duration-200 flex items-center"
          >
            <span class="mr-2">🖨️</span> Imprimir CV
          </button>
          <button 
            @click="editarCV"
            class="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold transition duration-200 flex items-center"
          >
            <span class="mr-2">✏️</span> Editar CV
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useCVStore } from '../composables/useCVStore.js'

const router = useRouter()
const { cvData } = useCVStore()

// Verificar si hay datos del CV al montar el componente
onMounted(() => {
  // Si no hay nombre, redirigir al formulario
  if (!cvData.value.datosPersonales.nombre) {
    alert('No hay datos de CV para mostrar. Por favor, llena el formulario primero.')
    router.push('/')
  }
})

// Computed properties para verificar si hay datos
const hasPersonalInfo = computed(() => {
  const data = cvData.value.datosPersonales
  return data.fechaNacimiento || data.direccion || data.codigoPostal
})

const hasLinks = computed(() => {
  const data = cvData.value.datosPersonales
  return data.linkedin || data.github
})

// Funciones
const formatDate = (dateString) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long'
  })
}

const volverAlFormulario = () => {
  router.push('/')
}

const imprimirCV = () => {
  window.print()
}

const editarCV = () => {
  router.push('/')
}
</script>

<style scoped>
@media print {
  .no-print {
    display: none !important;
  }
  
  body {
    background: white !important;
  }
  
  .bg-gray-50 {
    background: white !important;
  }
}</style>