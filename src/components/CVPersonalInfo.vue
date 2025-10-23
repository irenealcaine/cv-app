<template>
  <section class="p-1 border-b border-gray-300">
    <h2 class="text-lg font-bold text-black mb-4 uppercase tracking-wide">
      Datos Personales
    </h2>
    <div class="flex flex-col gap-1">
      <div v-if="personalData.telefono" class="flex">
        <span class="">Teléfono: </span>
        <span class="font-medium ml-2">{{ personalData.telefono }}</span>
      </div>
      <div v-if="personalData.email" class="flex">
        <span class="">Email: </span>
        <a :href="`mailto:${personalData.email}`" class="font-medium ml-2">
          {{ personalData.email }}
        </a>
      </div>
      <div v-if="personalData.ciudad" class="flex">
        <span class="">Ciudad: </span>
        <span class="font-medium ml-2">{{ personalData.ciudad }}</span>
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