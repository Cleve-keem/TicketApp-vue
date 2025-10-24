<template>
  <div class="">
    <div>
      <h4 class="">{{ ticket.title }}</h4>
      <p class="">{{ ticket.description }}</p>
      <span :class="statusClass" class="">
        {{ ticket.status }}
      </span>
    </div>
    <button @click="remove" class="">Delete</button>
  </div>
</template>

<script setup>
import { useTickets } from "../store/useTicket";
const props = defineProps(["ticket"]);
const ticketsStore = useTickets();

const remove = () => {
  if (confirm("Delete this ticket?")) ticketsStore.delete(props.ticket.id);
};

const statusClass = computed(() => {
  switch (props.ticket.status) {
    case "open":
      return "bg-green-100 text-green-700";
    case "in_progress":
      return "bg-yellow-100 text-yellow-700";
    case "closed":
      return "bg-gray-200 text-gray-700";
  }
});
</script>
