<template>
  <div class="">
    <h2 class="">Dashboard</h2>
    <div class="">
      <div class="">
        <h3 class="">Total Tickets</h3>
        <p class="">{{ total }}</p>
      </div>
      <div class="">
        <h3 class="">Open</h3>
        <p class="">{{ open }}</p>
      </div>
      <div class="">
        <h3 class="">Closed</h3>
        <p class="">{{ closed }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useTickets } from "../store/useTicket";

const ticketsStore = useTickets();
const total = ticketsStore.tickets.length;
const open = ticketsStore.tickets.filter((t) => t.status === "open").length;
const closed = ticketsStore.tickets.filter((t) => t.status === "closed").length;
</script>
