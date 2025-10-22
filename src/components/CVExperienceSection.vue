<template>
  <section v-if="experience.length > 0" class="p-6">
    <h2 class="text-lg font-bold text-black mb-4 uppercase tracking-wide">
      Experiencia Laboral
    </h2>
    <div class="space-y-6">
      <div v-for="exp in experience" :key="exp.id">
        <div class="flex justify-between items-start mb-2">
          <h3 class="font-bold text-black">{{ exp.puesto }}</h3>
          <span v-if="exp.fechaInicio || exp.fechaFin || exp.actual" class="text-sm text-gray-600">
            {{ formatDate(exp.fechaInicio) }}{{ exp.actual ? ' - Presente' : (exp.fechaFin ? ' - ' + formatDate(exp.fechaFin) : '') }}
          </span>
        </div>
        <p class="font-medium text-sm mb-2">{{ exp.empresa }}</p>
        <p v-if="exp.descripcion" class="text-sm text-gray-700 leading-relaxed">
          {{ exp.descripcion }}
        </p>
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
    month: 'long'
  })
}
</script>