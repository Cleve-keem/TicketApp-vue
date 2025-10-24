<template>
  <form @submit.prevent="submit" class="">
    <h3 class="">Create New Ticket</h3>
    <input v-model="title" placeholder="Title" class="" />
    <select v-model="status" class="">
      <option value="">Select status</option>
      <option value="open">Open</option>
      <option value="in_progress">In Progress</option>
      <option value="closed">Closed</option>
    </select>
    <textarea
      v-model="description"
      placeholder="Description"
      class=""
    ></textarea>
    <p v-if="error" class="">{{ error }}</p>
    <button class="">Add Ticket</button>
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
