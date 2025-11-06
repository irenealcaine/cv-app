<template>
  <section class="text-center p-4 pt-0 border-b border-gray-300">
    <h1 class="text-4xl font-bold text-black mb-4">{{ personalData.nombre }} {{ personalData.apellidos }}</h1>
    <p v-if="personalData.descripcion" class="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
      {{ personalData.descripcion }}
    </p>
  </section>
</template>

<script setup>
defineProps({
  personalData: {
    type: Object,
    required: true
  }
})
</script>