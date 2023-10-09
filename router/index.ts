import { createWebHistory, createRouter } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../components/Login.vue'),
  },
  {
    path: '/services',
    name: 'Services',
    component: () => import('../components/Services.vue'),
  },
  {
    path: '/services/create',
    name: 'ServicesCreate',
    component: () => import('../components/ServicesCreate.vue'),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
