<template>
  <form @submit.prevent="submit" class="bg-white p-4 rounded-lg shadow">
    <h3 class="text-xl font-semibold mb-4">Create New Ticket</h3>
    <input
      v-model="title"
      placeholder="Title"
      class="border p-2 mb-3 w-full rounded"
    />
    <select v-model="status" class="border p-2 mb-3 w-full rounded">
      <option value="">Select status</option>
      <option value="open">Open</option>
      <option value="in_progress">In Progress</option>
      <option value="closed">Closed</option>
    </select>
    <textarea
      v-model="description"
      placeholder="Description"
      class="border p-2 mb-3 w-full rounded"
    ></textarea>
    <p v-if="error" class="text-red-500 text-sm mb-3">{{ error }}</p>
    <button class="bg-blue-600 text-white px-4 py-2 rounded">Add Ticket</button>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useTickets } from "../store/useTicket";

const ticketsStore = useTickets();
const title = ref("");
const description = ref("");
const status = ref("");
const error = ref("");

const submit = () => {
  if (!title.value || !status.value) {
    error.value = "Title and status are required.";
    return;
  }
  ticketsStore.create({
    title: title.value,
    description: description.value,
    status: status.value,
  });
  title.value = description.value = status.value = "";
  error.value = "";
};
</script>
