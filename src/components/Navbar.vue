<template>
  <nav class="nav_wrapper">
    <div class="nav_container">
      <router-link to="/dashboard" class="nav_header">🎟️ TicketApp</router-link>
      <div class="nav_logout" v-if="show">
        <router-link to="/tickets">Tickets</router-link>
        <button @click="logout" class="">Logout</button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

const show = false;

const logout = () => {
  localStorage.removeItem("ticketapp_session");
  router.push("/auth/login");
};
</script>
