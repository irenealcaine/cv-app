<template>
  <section class="p-6 border-b border-gray-200">
    <h2 class="text-2xl font-bold text-gray-800 mb-6 flex items-center">
      <span class="mr-2">📋</span> Datos Personales
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="space-y-2">
        <label for="nombre" class="block text-sm font-semibold text-gray-700">Nombre *</label>
        <input 
          id="nombre"
          :value="personalData.nombre"
          @input="updateField('nombre', $event.target.value)"
          type="text" 
          required
          placeholder="Tu nombre"
          class="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
        >
      </div>
      
      <div class="space-y-2">
        <label for="apellidos" class="block text-sm font-semibold text-gray-700">Apellidos *</label>
        <input 
          id="apellidos"
          :value="personalData.apellidos"
          @input="updateField('apellidos', $event.target.value)"
          type="text" 
          required
          placeholder="Tus apellidos"
          class="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
        >
      </div>
      
      <div class="space-y-2">
        <label for="telefono" class="block text-sm font-semibold text-gray-700">Teléfono *</label>
        <input 
          id="telefono"
          :value="personalData.telefono"
          @input="updateField('telefono', $event.target.value)"
          type="tel" 
          required
          placeholder="+34 123 456 789"
          class="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
        >
      </div>
      
      <div class="space-y-2">
        <label for="email" class="block text-sm font-semibold text-gray-700">Email *</label>
        <input 
          id="email"
          :value="personalData.email"
          @input="updateField('email', $event.target.value)"
          type="email" 
          required
          placeholder="tu@email.com"
          class="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
        >
      </div>
      
      <div class="space-y-2">
        <label for="ciudad" class="block text-sm font-semibold text-gray-700">Ciudad</label>
        <input 
          id="ciudad"
          :value="personalData.ciudad"
          @input="updateField('ciudad', $event.target.value)"
          type="text"
          placeholder="Ciudad"
          class="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
        >
      </div>
    </div>

    <!-- Campo de descripción en toda la anchura -->
    <div class="mt-4 space-y-2">
      <label for="descripcion" class="block text-sm font-semibold text-gray-700">Descripción Profesional</label>
      <textarea 
        id="descripcion"
        :value="personalData.descripcion"
        @input="updateField('descripcion', $event.target.value)"
        rows="3"
        placeholder="Breve descripción profesional o resumen de perfil..."
        class="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200 resize-y"
      ></textarea>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div class="space-y-2">
        <label for="linkedin" class="block text-sm font-semibold text-gray-700">LinkedIn</label>
        <input 
          id="linkedin"
          :value="personalData.linkedin"
          @input="updateField('linkedin', $event.target.value)"
          type="url"
          placeholder="https://linkedin.com/in/tuperfil"
          class="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
        >
      </div>
      
      <div class="space-y-2">
        <label for="github" class="block text-sm font-semibold text-gray-700">GitHub</label>
        <input 
          id="github"
          :value="personalData.github"
          @input="updateField('github', $event.target.value)"
          type="url"
          placeholder="https://github.com/tuusuario"
          class="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
        >
      </div>

      <div class="space-y-2">
        <label for="portfolio" class="block text-sm font-semibold text-gray-700">Portfolio</label>
        <input 
          id="portfolio"
          :value="personalData.portfolio"
          @input="updateField('portfolio', $event.target.value)"
          type="url"
          placeholder="https://tu-portfolio.com"
          class="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
        >
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  personalData: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['update-personal-data'])

const updateField = (field, value) => {
  emit('update-personal-data', { field, value })
}
</script>