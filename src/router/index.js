import { createRouter, createWebHistory } from "vue-router";
import Landing from "../views/Landing.vue";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";
import Dashboard from "../views/Dashboard.vue";
import Tickets from "../views/Tickets.vue";

const requireAuth = (to, from, next) => {
  const session = localStorage.getItem("ticketapp_session");
  if (!session) return next("/auth/login");
  next();
};

const routes = [
  { path: "/", component: Landing },
  { path: "/auth/login", component: Login },
  { path: "/auth/signup", component: Signup },
  { path: "/dashboard", component: Dashboard, beforeEnter: requireAuth },
  { path: "/tickets", component: Tickets, beforeEnter: requireAuth },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
