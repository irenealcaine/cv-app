import { ref } from 'vue'

// Estado global del CV
const cvData = ref({
  datosPersonales: {
    nombre: '',
    apellidos: '',
    fechaNacimiento: '',
    telefono: '',
    email: '',
    direccion: '',
    ciudad: '',
    codigoPostal: '',
    linkedin: '',
    github: ''
  },
  formacion: [],
  experiencia: []
})

export function useCVStore() {
  const setCVData = (data) => {
    cvData.value = { ...data }
  }

  const getCVData = () => {
    return cvData.value
  }

  const clearCVData = () => {
    cvData.value = {
      datosPersonales: {
        nombre: '',
        apellidos: '',
        fechaNacimiento: '',
        telefono: '',
        email: '',
        direccion: '',
        ciudad: '',
        codigoPostal: '',
        linkedin: '',
        github: ''
      },
      formacion: [],
      experiencia: []
    }
  }

  return {
    cvData,
    setCVData,
    getCVData,
    clearCVData
  }
}