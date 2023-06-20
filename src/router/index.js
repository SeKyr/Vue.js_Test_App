import { createRouter, createWebHistory } from 'vue-router'
import UIView from '../views/UIView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'ui',
      component: UIView
    },
    {
      path: '/calculation',
      name: 'calculation',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CalculationView.vue')
    }
  ]
})

export default router
