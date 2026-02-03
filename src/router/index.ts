import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  routes: [
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../pages/notFound.vue'),
    },
    { path: '/', component: () => import('../pages/index.vue') },
    { path: '/projects/:id', component: () => import('../pages/project.vue') },
  ],
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return savedPosition || { top: 0 }
  },
})

export default router
