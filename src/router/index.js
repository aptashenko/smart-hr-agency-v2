import { createRouter, createWebHistory } from 'vue-router';
import MainView from '@/views/main/index.vue';
import { changePasswordToken } from '@/router/navigation-guards/index.js';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      meta: { reqAuth: true },
      component: MainView,
    },
    {
      path: '/registration',
      name: 'sign-up',
      meta: { copyright: true, auth: true },
      component: () => import('@/views/auth/sign-up-page.vue'),
    },
    {
      path: '/login',
      name: 'sign-in',
      meta: { copyright: true, auth: true },
      component: () => import('@/views/auth/sign-in-page.vue'),
    },
    {
      path: '/account-recovery',
      name: 'account-recovery',
      meta: { copyright: true, auth: true },
      component: () => import('@/views/auth/forgot-password-page.vue'),
    },
    {
      path: '/change-password',
      name: 'change-password',
      meta: { copyright: true },
      component: () => import('@/views/auth/reset-password-page.vue'),
      beforeEnter: changePasswordToken,
    },
    {
      path: '/subscription',
      name: 'subscription',
      meta: { reqAuth: true, copyright: true },
      component: () => import('@/views/subscription/index.vue'),
    },
    {
      path: '/support',
      name: 'support',
      meta: { copyright: true },
      component: () => import('@/views/support/index.vue'),
    },
    {
      path: '/terms',
      name: 'terms',
      component: () => import('@/views/legal/index.vue'),
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: () => import('@/views/legal/index.vue'),
    },
  ],
  scrollBehavior() {
    return new Promise((resolve) => {
      resolve({ left: 0, top: 0 });
    });
  },
});

router.beforeEach((to, from) => {
  const isAuth = !!localStorage.getItem('token');
  if (to.meta.auth) {
    return isAuth ? { name: 'main' } : true;
  } else {
    if (to.matched.some((record) => record.meta.reqAuth)) {
      if (!isAuth) {
        return { name: 'sign-in' };
      } else {
        return true;
      }
    }
  }

  return true;
});

export default router;
