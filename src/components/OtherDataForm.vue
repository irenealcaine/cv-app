<template>
  <section class="p-6 border-b border-gray-200">
    <h2 class="text-2xl font-bold text-gray-800 mb-6 flex items-center">
      <span class="mr-2">📝</span> Otros Datos
    </h2>
    
    <!-- Lista de otros datos -->
    <div class="space-y-4">
      <div v-for="(item, index) in otrosDatos" :key="item.id" class="flex gap-4 items-start">
        <div class="flex-1 space-y-2">
          <label :for="`otros-${item.id}`" class="block text-sm font-semibold text-gray-700">
            Información adicional {{ index + 1 }}
          </label>
          <input 
            :id="`otros-${item.id}`"
            :value="item.texto"
            @input="updateOtherData(item.id, $event.target.value)"
            type="text" 
            placeholder="Ej: Carnet de conducir B, Disponibilidad para viajar, Idiomas..."
            class="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
          >
        </div>
        <button 
          v-if="otrosDatos.length > 1"
          @click="removeOtherData(item.id)"
          type="button"
          class="mt-7 bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg text-sm font-medium transition duration-200"
        >
          ✕
        </button>
      </div>
    </div>

    <!-- Botón para agregar más -->
    <div class="mt-4">
      <button 
        @click="addOtherData"
        type="button"
        class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition duration-200"
      >
        ➕ Agregar otro dato
      </button>
    </div>
  </section>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  otrosDatos: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['add-other-data', 'remove-other-data', 'update-other-data'])

const addOtherData = () => {
  emit('add-other-data')
}

const removeOtherData = (id) => {
  emit('remove-other-data', id)
}

const updateOtherData = (id, value) => {
  emit('update-other-data', { id, value })
}
</script>