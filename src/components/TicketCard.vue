<template>
  <div class="bg-white p-4 rounded-lg shadow flex justify-between items-start">
    <div>
      <h4 class="text-lg font-semibold">{{ ticket.title }}</h4>
      <p class="text-sm text-gray-600">{{ ticket.description }}</p>
      <span
        :class="statusClass"
        class="text-xs font-medium px-2 py-1 rounded mt-2 inline-block"
      >
        {{ ticket.status }}
      </span>
    </div>
    <button @click="remove" class="text-red-500 text-sm">Delete</button>
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
