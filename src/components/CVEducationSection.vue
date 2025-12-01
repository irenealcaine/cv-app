<template>
  <section v-if="education.length > 0" class="p-2 border-b border-gray-300">
    <h2 class="text-lg font-bold text-black mb-1 uppercase tracking-wide">
      Formación Académica
    </h2>
    <div class="space-y-2">
      <div v-for="edu in education" :key="edu.id">
        <div class="flex justify-between items-start mb-1">
          <h3 class="font-bold text-black ml-2">{{ edu.titulo }} - <span class="font-medium text-sm mb-0">{{ edu.institucion }}</span></h3>
          <span v-if="edu.fechaInicio || edu.fechaFin" class="text-sm text-gray-600">
            {{ formatDate(edu.fechaInicio) }}{{ edu.fechaFin ? ' - ' + formatDate(edu.fechaFin) : ' - En curso' }}
          </span>
        </div>
        <!-- Descripción como lista -->
        <div v-if="edu.descripcion && hasValidDescriptionPoints(edu.descripcion)" class="ml-4 mt-1">
          <ul class="text-sm text-gray-700 ">
            <li v-for="(punto, index) in validDescriptionPoints(edu.descripcion)" :key="index" class="flex items-start">
              <span class="text-gray-500 mr-2 ">-</span>
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
  education: {
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