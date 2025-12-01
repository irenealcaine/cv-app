<template>
  <section class="p-6 border-b border-gray-200">
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-2xl font-bold text-gray-800 flex items-center">
        <span class="mr-2">💼</span> Experiencia Laboral
      </h2>
      <button 
        type="button" 
        @click="$emit('add-experience')" 
        class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold transition duration-200 flex items-center"
      >
        <span class="mr-1">+</span> Agregar Experiencia
      </button>
    </div>
    
    <div v-for="(exp, index) in experiencia" :key="exp.id" class="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-4">
      <div class="flex justify-between items-center mb-4">
        <h3 class="text-lg font-semibold text-gray-700">Experiencia {{ index + 1 }}</h3>
        <button 
          type="button" 
          @click="$emit('remove-experience', exp.id)" 
          class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm transition duration-200"
          v-if="experiencia.length > 1"
        >
          🗑️ Eliminar
        </button>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="space-y-2">
          <label class="block text-sm font-semibold text-gray-700">Puesto *</label>
          <input 
            :value="exp.puesto"
            @input="updateExperience(exp.id, 'puesto', $event.target.value)"
            type="text" 
            required
            placeholder="Desarrollador, Analista, Gerente..."
            class="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
          >
        </div>
        
        <div class="space-y-2">
          <label class="block text-sm font-semibold text-gray-700">Empresa *</label>
          <input 
            :value="exp.empresa"
            @input="updateExperience(exp.id, 'empresa', $event.target.value)"
            type="text" 
            required
            placeholder="Nombre de la empresa"
            class="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
          >
        </div>
        
        <div class="space-y-2">
          <label class="block text-sm font-semibold text-gray-700">Fecha Inicio</label>
          <input 
            :value="exp.fechaInicio"
            @input="updateExperience(exp.id, 'fechaInicio', $event.target.value)"
            type="date"
            class="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
          >
        </div>
        
        <div class="space-y-2">
          <label class="block text-sm font-semibold text-gray-700">Fecha Fin</label>
          <input 
            :value="exp.fechaFin"
            @input="updateExperience(exp.id, 'fechaFin', $event.target.value)"
            type="date"
            :disabled="exp.actual"
            class="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed"
          >
        </div>
        
        <div class="space-y-2">
          <label class="flex items-center text-sm font-semibold text-gray-700 cursor-pointer">
            <input 
              :checked="exp.actual"
              @change="handleCurrentJobChange(exp.id, $event.target.checked)"
              type="checkbox"
              class="mr-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
            >
            Trabajo actual
          </label>
        </div>
        
        <!-- Descripción como lista -->
        <div class="md:col-span-2 space-y-4">
          <div class="flex justify-between items-center">
            <label class="block text-sm font-semibold text-gray-700">Descripción del puesto (responsabilidades y logros)</label>
            <button 
              type="button"
              @click="addDescriptionPoint(exp.id)"
              class="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm"
            >
              + Agregar punto
            </button>
          </div>
          
          <div v-for="(punto, pIndex) in exp.descripcion" :key="`${exp.id}-desc-${pIndex}`" class="flex gap-2 items-start">
            <div class="flex-1">
              <input 
                :value="punto"
                @input="updateDescriptionPoint(exp.id, pIndex, $event.target.value)"
                type="text" 
                placeholder="Ej: Desarrollo de aplicaciones web con Vue.js, Liderazgo de equipo de 5 desarrolladores..."
                class="w-full px-3 py-2 border border-gray-300 rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-200 text-sm"
              >
            </div>
            <button 
              v-if="exp.descripcion.length > 1"
              @click="removeDescriptionPoint(exp.id, pIndex)"
              type="button"
              class="bg-red-500 hover:bg-red-600 text-white px-2 py-2 rounded text-xs"
            >
              ✕
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  experiencia: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['add-experience', 'remove-experience', 'update-experience', 'add-exp-description-point', 'remove-exp-description-point', 'update-exp-description-point'])

const updateExperience = (id, field, value) => {
  emit('update-experience', { id, field, value })
}

const handleCurrentJobChange = (id, isActual) => {
  emit('update-experience', { id, field: 'actual', value: isActual })
  if (isActual) {
    emit('update-experience', { id, field: 'fechaFin', value: '' })
  }
}

const addDescriptionPoint = (id) => {
  emit('add-exp-description-point', id)
}

const removeDescriptionPoint = (id, index) => {
  emit('remove-exp-description-point', { id, index })
}

const updateDescriptionPoint = (id, index, value) => {
  emit('update-exp-description-point', { id, index, value })
}
</script>