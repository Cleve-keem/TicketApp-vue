<template>
  <div class="ticket-card">
    <div class="ticket-header">
      <h4 class="ticket-title">{{ ticket.title }}</h4>
      <span :class="['tag', ticket.status]">{{
        formatStatus(ticket.status)
      }}</span>
    </div>

    <div
      style="display: flex; align-items: center; justify-content: space-between"
    >
      <p class="ticket-description">{{ ticket.description }}</p>
      <div class="ticket-footer" style="display: flex; gap: 10px">
        <button class="btn small" @click="$emit('edit', ticket)">Edit</button>
        <button class="btn danger" @click="$emit('delete', ticket)">
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  ticket: {
    type: Object,
    required: true,
  },
});

const formatStatus = (status) => {
  const map = { open: "Open", in_progress: "In Progress", closed: "Closed" };
  return map[status] || status;
};
</script>

<style scoped>
.ticket-card {
  background: #fff;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}
.ticket-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.ticket-title {
  font-weight: 600;
  font-size: 1rem;
  margin: 0;
}
.ticket-description {
  color: #555;
  font-size: 0.95rem;
  width: 80%;
}
.ticket-footer {
  display: flex;
  align-self: flex-end;
}
.tag {
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  font-size: 0.8rem;
  color: #fff;
  text-transform: capitalize;
  font-weight: 500;
}
.tag.open {
  background: #22c55e;
}
.tag.in_progress {
  background: #f59e0b;
  color: #111;
}
.tag.closed {
  background: #6b7280;
}
.btn.small {
  background: #3b82f6;
  border: none;
  color: #fff;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.85rem;
}
.btn.danger {
  border: none;
  color: #fff;
  padding: 0.2rem 0.8rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.8rem;
}
.btn.small:hover {
  background: #2563eb;
}
</style>
