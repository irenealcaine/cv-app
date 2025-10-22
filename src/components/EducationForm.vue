<template>
  <section class="p-6 border-b border-gray-200">
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-2xl font-bold text-gray-800 flex items-center">
        <span class="mr-2">🎓</span> Formación Académica
      </h2>
      <button 
        type="button" 
        @click="$emit('add-education')" 
        class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold transition duration-200 flex items-center"
      >
        <span class="mr-1">+</span> Agregar Formación
      </button>
    </div>
    
    <div v-for="(edu, index) in educacion" :key="edu.id" class="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-4">
      <div class="flex justify-between items-center mb-4">
        <h3 class="text-lg font-semibold text-gray-700">Formación {{ index + 1 }}</h3>
        <button 
          type="button" 
          @click="$emit('remove-education', edu.id)" 
          class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm transition duration-200"
          v-if="educacion.length > 1"
        >
          🗑️ Eliminar
        </button>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="space-y-2">
          <label class="block text-sm font-semibold text-gray-700">Título *</label>
          <input 
            :value="edu.titulo"
            @input="updateEducation(edu.id, 'titulo', $event.target.value)"
            type="text" 
            required
            placeholder="Grado, Máster, Curso..."
            class="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
          >
        </div>
        
        <div class="space-y-2">
          <label class="block text-sm font-semibold text-gray-700">Institución *</label>
          <input 
            :value="edu.institucion"
            @input="updateEducation(edu.id, 'institucion', $event.target.value)"
            type="text" 
            required
            placeholder="Universidad, Centro de estudios..."
            class="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
          >
        </div>
        
        <div class="space-y-2">
          <label class="block text-sm font-semibold text-gray-700">Fecha Inicio</label>
          <input 
            :value="edu.fechaInicio"
            @input="updateEducation(edu.id, 'fechaInicio', $event.target.value)"
            type="date"
            class="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
          >
        </div>
        
        <div class="space-y-2">
          <label class="block text-sm font-semibold text-gray-700">Fecha Fin</label>
          <input 
            :value="edu.fechaFin"
            @input="updateEducation(edu.id, 'fechaFin', $event.target.value)"
            type="date"
            class="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
          >
        </div>
        
        <div class="md:col-span-2 space-y-2">
          <label class="block text-sm font-semibold text-gray-700">Descripción</label>
          <textarea 
            :value="edu.descripcion"
            @input="updateEducation(edu.id, 'descripcion', $event.target.value)"
            placeholder="Describe tu formación, especialización, calificaciones..."
            rows="3"
            class="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
          ></textarea>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  educacion: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['add-education', 'remove-education', 'update-education'])

const updateEducation = (id, field, value) => {
  emit('update-education', { id, field, value })
}
</script>