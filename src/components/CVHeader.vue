<template>
  <header class="text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8">
    <h1 class="text-4xl font-bold mb-2">Crea tu Currículum Vitae</h1>
    <p class="text-xl opacity-90">
      {{ showNewCVButton ? 'Editando CV existente - Modifica los datos necesarios' : 'Completa todos los campos para generar tu CV. O tambien puedes poner datos de ejemplo en el botón de abajo' }}
    </p>
    
    <!-- Botón para nuevo CV si hay datos existentes -->
    <div v-if="showNewCVButton" class="mt-4">
      <button 
        @click="nuevoCV"
        class="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg font-semibold transition duration-200 text-sm"
      >
        🆕 Nuevo CV (Limpiar formulario)
      </button>
    </div>
  </header>
</template>

<script setup>
import { computed } from 'vue'
import { useCVStore } from '../composables/useCVStore.js'

const { cvData, clearCVData } = useCVStore()

// Mostrar botón de nuevo CV solo si hay datos existentes
const showNewCVButton = computed(() => {
  return cvData.value.datosPersonales.nombre && cvData.value.datosPersonales.nombre.trim() !== ''
})

const nuevoCV = () => {
  if (confirm('¿Estás seguro de que quieres limpiar todos los datos y empezar un nuevo CV?')) {
    clearCVData()
    // Forzar recarga de la página para reinicializar el formulario
    window.location.reload()
  }
}
</script>