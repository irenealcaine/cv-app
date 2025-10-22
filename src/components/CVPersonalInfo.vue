<template>
  <section class="p-6 border-b border-gray-300">
    <h2 class="text-lg font-bold text-black mb-4 uppercase tracking-wide">
      Datos Personales
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div v-if="personalData.telefono" class="flex">
        <span class="font-medium">Teléfono:</span>
        <span class="ml-2">{{ personalData.telefono }}</span>
      </div>
      <div v-if="personalData.email" class="flex">
        <span class="font-medium">Email:</span>
        <a :href="`mailto:${personalData.email}`" class="ml-2 underline text-black hover:no-underline">
          {{ personalData.email }}
        </a>
      </div>
      <div v-if="personalData.ciudad" class="flex">
        <span class="font-medium">Ciudad:</span>
        <span class="ml-2">{{ personalData.ciudad }}</span>
      </div>
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