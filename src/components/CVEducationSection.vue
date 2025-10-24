<template>
  <section v-if="education.length > 0" class="p-2 border-b border-gray-300">
    <h2 class="text-lg font-bold text-black mb-4 uppercase tracking-wide">
      Formación Académica
    </h2>
    <div class="space-y-6">
      <div v-for="edu in education" :key="edu.id">
        <div class="flex justify-between items-start mb-2">
          <p class="font-bold text-black">{{ edu.titulo }} - <span class="font-medium text-sm mb-2">{{ edu.institucion }}</span></p>
          
          <span v-if="edu.fechaInicio || edu.fechaFin" class="text-sm text-gray-600">
            {{ formatDate(edu.fechaInicio) }}{{ edu.fechaFin ? ' - ' + formatDate(edu.fechaFin) : ' - En curso' }}
          </span>
        </div>
        <p v-if="edu.descripcion" class="text-sm text-gray-700 leading-relaxed">
          {{ edu.descripcion }}
        </p>
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
    month: 'numeric'
  })
}
</script>