import { createRouter, createWebHistory } from 'vue-router';

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
    }
    // 他のルートをここに追加
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;