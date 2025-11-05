<template>
  <div class="min-h-screen py-8">
    <div class="max-w-4xl mx-auto">
      <!-- Botón volver -->
      <div class="mb-6 no-print">
        <button @click="volverAlFormulario"
          class="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 text-sm font-medium">
          ← Volver al formulario
        </button>
      </div>

      <!-- CV Container -->
      <div class="bg-white">
        <!-- Header con nombre y descripción -->
        <CVPersonalHeader :personal-data="cvData.datosPersonales" />

        <!-- Datos Personales -->
         <div class="flex flex-col sm:flex-row">

           <CVPersonalInfo :personal-data="cvData.datosPersonales" class="sm:w-1/2"/>
           <CVLinksSection :personal-data="cvData.datosPersonales" class="sm:w-1/2"/>
         </div>

        <!-- Enlaces -->

        <!-- Formación Académica -->
        <CVEducationSection :education="cvData.formacion" />

        <!-- Experiencia Laboral -->
        <CVExperienceSection :experience="cvData.experiencia" />

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
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useCVStore } from '../composables/useCVStore.js'
import CVPersonalHeader from '../components/CVPersonalHeader.vue'
import CVPersonalInfo from '../components/CVPersonalInfo.vue'
import CVLinksSection from '../components/CVLinksSection.vue'
import CVEducationSection from '../components/CVEducationSection.vue'
import CVExperienceSection from '../components/CVExperienceSection.vue'

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

// Funciones
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