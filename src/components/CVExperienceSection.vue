<template>
  <section v-if="experience.length > 0" class="p-2 border-b border-gray-300">
    <h2 class="text-lg font-bold text-black mb-2 uppercase tracking-wide">
      Experiencia Laboral
    </h2>
    <div class="space-y-4">
      <div v-for="exp in experience" :key="exp.id">
        <div class="flex justify-between items-start mb-2">
          <h3 class="font-bold text-black ml-2"> • {{ exp.puesto }} - <span class="font-medium text-sm mb-2">{{ exp.empresa }}</span></h3>
          <span v-if="exp.fechaInicio || exp.fechaFin || exp.actual" class="text-sm text-gray-600">
            {{ formatDate(exp.fechaInicio) }}{{ exp.actual ? ' - Presente' : (exp.fechaFin ? ' - ' + formatDate(exp.fechaFin) : '') }}
          </span>
        </div>
        <!-- Descripción como lista -->
        <div v-if="exp.descripcion && hasValidDescriptionPoints(exp.descripcion)" class="ml-4 mt-1">
          <ul class="text-sm text-gray-700 leading-relaxed space-y-1">
            <li v-for="(punto, index) in validDescriptionPoints(exp.descripcion)" :key="index" class="flex items-start">
              <span class="text-gray-500 mr-2 mt-0.5">•</span>
              <span>{{ punto }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  experience: {
    type: Array,
    required: true
  }
})

const formatDate = (dateString) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'short'
  })
}

// Funciones para validar y filtrar puntos de descripción
const hasValidDescriptionPoints = (descripcion) => {
  if (!Array.isArray(descripcion)) return false
  return descripcion.some(punto => punto && punto.trim().length > 0)
}

const validDescriptionPoints = (descripcion) => {
  if (!Array.isArray(descripcion)) return []
  return descripcion.filter(punto => punto && punto.trim().length > 0)
}
</script>