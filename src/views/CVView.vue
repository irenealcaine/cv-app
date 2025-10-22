<template>
  <div class="min-h-screen bg-white py-8">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Botón para volver al formulario -->
      <div class="mb-6 no-print">
        <button @click="volverAlFormulario"
          class="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 text-sm font-medium">
          ← Volver al Formulario
        </button>
      </div>

      <!-- CV Display -->
      <div class="bg-white max-w-3xl mx-auto">

        <!-- Header del CV -->
        <div class="p-1 border-b border-gray-300 w-full">
          <div class="w-3/4">
            <h1 class="text-3xl font-bold text-black mb-4 uppercase tracking-wide">
              {{ cvData.datosPersonales.nombre }} {{ cvData.datosPersonales.apellidos }}
            </h1>
            <div v-if="cvData.datosPersonales.descripcion"
              class="mb-2 text-gray-700 mx-auto text-sm leading-relaxed">
              {{ cvData.datosPersonales.descripcion }}
            </div>
          </div>

        </div>

        <!-- Datos Personales -->
        <section class="p-1 border-b border-gray-300">
          <h2 class="text-lg font-bold text-black mb-4 uppercase tracking-wide">
            Datos Personales
          </h2>
          <div class="flex flex-col gap-1">
            <div v-if="cvData.datosPersonales.telefono" class="flex">
              <span class="w-1/6">Teléfono:</span>
              <span class="ml-2 font-medium">{{ cvData.datosPersonales.telefono }}</span>
            </div>
            <div v-if="cvData.datosPersonales.email" class="flex">
              <span class="w-1/6">Email:</span>
              <span class="ml-2 font-medium">{{ cvData.datosPersonales.email }}</span>
            </div>
            <div v-if="cvData.datosPersonales.ciudad" class="flex">
              <span class="w-1/6">Ciudad:</span>
              <span class="ml-2 font-medium">{{ cvData.datosPersonales.ciudad }}</span>
            </div>

          </div>
        </section>

        <!-- Enlaces -->
        <section v-if="hasLinks" class="p-1 border-b border-gray-300">
          <h2 class="text-lg font-bold text-black mb-4 uppercase tracking-wide">
            Enlaces
          </h2>
          <div class="flex flex-col gap-1">
            <div v-if="cvData.datosPersonales.linkedin" class="flex">
              <span class="w-1/6">LinkedIn:</span>
              <a :href="cvData.datosPersonales.linkedin" target="_blank"
                class="ml-2 underline text-black hover:no-underline font-medium">
                {{ cvData.datosPersonales.linkedin }}
              </a>
            </div>
            <div v-if="cvData.datosPersonales.github" class="flex">
              <span class="w-1/6">GitHub:</span>
              <a :href="cvData.datosPersonales.github" target="_blank"
                class="ml-2 underline text-black hover:no-underline font-medium">
                {{ cvData.datosPersonales.github }}
              </a>
            </div>
            <div v-if="cvData.datosPersonales.portfolio" class="flex">
              <span class="w-1/6">Portfolio:</span>
              <a :href="cvData.datosPersonales.portfolio" target="_blank"
                class="ml-2 underline text-black hover:no-underline font-medium">
                {{ cvData.datosPersonales.portfolio }}
              </a>
            </div>
          </div>
        </section>

        <!-- Formación Académica -->
        <section v-if="cvData.formacion.length > 0" class="p-1 border-b border-gray-300">
          <h2 class="text-lg font-bold text-black mb-4 uppercase tracking-wide">
            Formación Académica
          </h2>
          <div class="space-y-6">
            <div v-for="edu in cvData.formacion" :key="edu.id">
              <div class="flex justify-between items-start mb-2">
                <h3 class="font-bold text-black">{{ edu.titulo }}</h3>
                <span v-if="edu.fechaInicio || edu.fechaFin" class="text-sm text-gray-600">
                  {{ formatDate(edu.fechaInicio) }}{{ edu.fechaFin ? ' - ' + formatDate(edu.fechaFin) : ' - En curso' }}
                </span>
              </div>
              <p class="font-medium text-sm mb-2">{{ edu.institucion }}</p>
              <p v-if="edu.descripcion" class="text-sm text-gray-700 leading-relaxed">
                {{ edu.descripcion }}
              </p>
            </div>
          </div>
        </section>

        <!-- Experiencia Laboral -->
        <section v-if="cvData.experiencia.length > 0" class="p-1">
          <h2 class="text-lg font-bold text-black mb-4 uppercase tracking-wide">
            Experiencia Laboral
          </h2>
          <div class="space-y-6">
            <div v-for="exp in cvData.experiencia" :key="exp.id">
              <div class="flex justify-between items-start mb-2">
                <h3 class="font-bold text-black">{{ exp.puesto }}</h3>
                <span v-if="exp.fechaInicio || exp.fechaFin || exp.actual" class="text-sm text-gray-600">
                  {{ formatDate(exp.fechaInicio) }}{{ exp.actual ? ' - Presente' : (exp.fechaFin ? ' - ' +
                    formatDate(exp.fechaFin) : '') }}
                </span>
              </div>
              <p class="font-medium text-sm mb-2">{{ exp.empresa }}</p>
              <p v-if="exp.descripcion" class="text-sm text-gray-700 leading-relaxed">
                {{ exp.descripcion }}
              </p>
            </div>
          </div>
        </section>

        <!-- Acciones -->
        <div class="p-6 bg-gray-50 flex justify-center gap-4 no-print">
          <button @click="imprimirCV" class="bg-gray-800 hover:bg-gray-900 text-white px-6 py-2 text-sm font-medium">
            Imprimir CV
          </button>
          <button @click="editarCV"
            class="bg-white hover:bg-gray-50 text-gray-800 border border-gray-800 px-6 py-2 text-sm font-medium">
            Editar CV
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
}
</style>