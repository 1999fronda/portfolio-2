import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  routes: [
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("../pages/notFound.vue"),
    },
    { path: "/", component: () => import("../pages/index.vue") },
  ],
  history: createWebHistory(),
});

export default router;
