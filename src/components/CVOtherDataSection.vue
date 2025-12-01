<template>
  <section v-if="otrosDatos.length > 0 && hasValidData" class="p-2">
    <h2 class="text-lg font-bold text-black mb-1 uppercase tracking-wide">
      Información Adicional
    </h2>
    <ul class="">
      <li v-for="item in validData" :key="item.id" class="flex items-start">
        <span class="text-gray-700 mr-2">-</span>
        <span class="text-sm text-gray-700 ">{{ item.texto }}</span>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  otrosDatos: {
    type: Array,
    required: true
  }
})

// Solo mostrar elementos con texto válido
const validData = computed(() => {
  return props.otrosDatos.filter(item => item.texto && item.texto.trim().length > 0)
})

const hasValidData = computed(() => {
  return validData.value.length > 0
})
</script>