<template>
  <nav class="flex justify-between items-center mb-8">
    <router-link to="/dashboard" class="text-2xl font-bold"
      >🎟️ TicketApp</router-link
    >
    <div class="flex gap-4">
      <router-link to="/tickets">Tickets</router-link>
      <button @click="logout" class="text-red-600 font-medium">Logout</button>
    </div>
  </nav>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

const logout = () => {
  localStorage.removeItem("ticketapp_session");
  router.push("/auth/login");
};
</script>
