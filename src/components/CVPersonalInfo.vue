<template>
  <section class="p-2 border-b border-gray-300">
    <h2 class="text-lg font-bold text-black mb-1 uppercase tracking-wide">
      Datos Personales
    </h2>
    <div class="flex flex-col gap-1">
      <div v-if="personalData.telefono" class="flex">
        <span class="">{{ personalData.telefono }}</span>
      </div>
      <div v-if="personalData.email" class="flex">
        <a :href="`mailto:${personalData.email}`" class="">
          {{ personalData.email }}
        </a>
      </div>
      <div v-if="personalData.ciudad" class="flex">
        <span class="">{{ personalData.ciudad }}</span>
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