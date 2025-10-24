<template>
  <div class="max-w-5xl mx-auto px-6 py-10">
    <Navbar />
    <h2 class="text-3xl font-bold mb-6">Dashboard</h2>
    <div class="grid md:grid-cols-3 gap-4">
      <div class="bg-green-100 p-4 rounded-lg shadow">
        <h3 class="text-lg font-semibold">Total Tickets</h3>
        <p class="text-2xl">{{ total }}</p>
      </div>
      <div class="bg-yellow-100 p-4 rounded-lg shadow">
        <h3 class="text-lg font-semibold">Open</h3>
        <p class="text-2xl">{{ open }}</p>
      </div>
      <div class="bg-gray-100 p-4 rounded-lg shadow">
        <h3 class="text-lg font-semibold">Closed</h3>
        <p class="text-2xl">{{ closed }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import { useTickets } from "../store/useTicket";

const ticketsStore = useTickets();
const total = ticketsStore.tickets.length;
const open = ticketsStore.tickets.filter((t) => t.status === "open").length;
const closed = ticketsStore.tickets.filter((t) => t.status === "closed").length;
</script>
