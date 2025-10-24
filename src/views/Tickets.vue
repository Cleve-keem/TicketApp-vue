<template>
  <div class="max-w-5xl mx-auto px-6 py-10">
    <Navbar />
    <h2 class="text-3xl font-bold mb-6">Ticket Management</h2>
    <TicketForm />
    <div class="grid gap-4 mt-6">
      <TicketCard v-for="t in ticketsStore.tickets" :key="t.id" :ticket="t" />
    </div>
  </div>
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import TicketForm from "../components/TicketForm.vue";
import TicketCard from "../components/TicketCard.vue";
import { useTickets } from "../store/useTicket";

const ticketsStore = useTickets();
</script>
