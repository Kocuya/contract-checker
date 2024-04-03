import { createRouter, createWebHistory } from 'vue-router';
import store from '../store';

const routes = [
    {
        path: "/",
        name: "HomePage",
        component: () => import("@/views/HomePage.vue"),
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("@/views/LoginPage.vue"),
    },
    {
      path: "/upload",
      name: "Upload",
      beforeEnter: (to, from, next) => {
        store.commit('setShowUploadPage', true);
        next();
      },
      component: () => import("@/views/HomePage.vue"),
    }
    // 他のルートをここに追加
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;