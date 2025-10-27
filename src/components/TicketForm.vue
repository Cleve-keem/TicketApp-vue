<template>
  <form @submit.prevent="submit" class="" style="margin: auto; padding: 1rem">
    <h3 class="" style="margin-bottom: 1rem">Create New Ticket</h3>
    <input
      v-model="title"
      placeholder="Title"
      class="input"
      :class="{ error: error }"
      style="margin-bottom: 1rem"
    />
    <textarea
      v-model="description"
      placeholder="Description"
      class=""
      style="
        width: 100%;
        height: 200px;
        padding: 1rem;
        border-radius: 8px;
        border: 1px solid lightgrey;
        font-size: 1rem;
      "
    ></textarea>
    <select
      v-model="status"
      :class="{ error: error }"
      style="
        width: 200px;
        padding: 0.5rem;
        border-radius: 5px;
        display: block;
        margin: 1rem 0;
      "
    >
      <option value="">Select status</option>
      <option value="open">Open</option>
      <option value="in_progress">In Progress</option>
      <option value="closed">Closed</option>
    </select>
    <p
      v-if="error"
      class=""
      style="
        color: red;
        font-weight: 400;
        font-size: 14px;
        margin-bottom: 0.5rem;
      "
    >
      {{ error }}
    </p>
    <button class="btn primary">Add Ticket</button>
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
