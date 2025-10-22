import { createRouter, createWebHistory } from 'vue-router'
import FormView from '../views/FormView.vue'
import CVView from '../views/CVView.vue'

const routes = [
  {
    path: '/',
    name: 'Form',
    component: FormView
  },
  {
    path: '/cv',
    name: 'CV',
    component: CVView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router