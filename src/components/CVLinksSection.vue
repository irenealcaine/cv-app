<template>
  <section v-if="hasLinks" class="p-2 border-b border-gray-300">
    <h2 class="text-lg font-bold text-black mb-4 uppercase tracking-wide">
      Enlaces
    </h2>
    <div class="flex flex-col gap-1">
      <div v-if="personalData.linkedin" class="flex">
        <span class="">LinkedIn:</span>
        <a :href="personalData.linkedin" target="_blank"
          class="ml-2 underline text-black hover:no-underline font-medium">
          {{ personalData.linkedin }}
        </a>
      </div>
      <div v-if="personalData.github" class="flex">
        <span class="">GitHub:</span>
        <a :href="personalData.github" target="_blank"
          class="ml-2 underline text-black hover:no-underline font-medium">
          {{ personalData.github }}
        </a>
      </div>
      <div v-if="personalData.portfolio" class="flex">
        <span class="">Portfolio:</span>
        <a :href="personalData.portfolio" target="_blank"
          class="ml-2 underline text-black hover:no-underline font-medium">
          {{ personalData.portfolio }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  personalData: {
    type: Object,
    required: true
  }
})

const hasLinks = computed(() => {
  return props.personalData.linkedin || props.personalData.github || props.personalData.portfolio
})
</script>