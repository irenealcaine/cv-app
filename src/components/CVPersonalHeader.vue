<template>
  <section class="p-4 pt-0 border-b border-gray-300 flex">
    <div>
      <h1 class="text-4xl font-bold text-black mb-4">{{ personalData.nombre }} {{ personalData.apellidos }}</h1>
      <p v-if="personalData.descripcion" class="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
        {{ personalData.descripcion }}
      </p>
    </div>
    <!-- Foto de perfil (opcional) -->
    <div v-if="personalData.foto" class="ml-6 flex justify-center">
      <img :src="personalData.foto" :alt="`Foto de ${personalData.nombre} ${personalData.apellidos}`"
        class="w-32 h-auto rounded-md object-cover border border-gray-200">
    </div>
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