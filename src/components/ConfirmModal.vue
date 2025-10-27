<template>
  <div v-if="modelValue" class="modal-overlay">
    <div class="modal">
      <h3>{{ title }}</h3>
      <p>{{ message }}</p>
      <div class="modal-actions">
        <button class="btn danger" @click="$emit('confirm')">Yes</button>
        <button class="btn ghost" @click="$emit('cancel')">No</button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  modelValue: Boolean,
  title: { type: String, default: "Confirm Action" },
  message: { type: String, default: "Are you sure?" },
});
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}
.modal {
  background: #fff;
  border-radius: 8px;
  padding: 1.5rem;
  width: 320px;
  max-width: 90%;
  text-align: center;
}
.modal-actions {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 1rem;
}
.btn.danger {
  background: #dc2626;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
}
.btn.ghost {
  background: transparent;
  border: 1px solid #ccc;
  color: #333;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
}
</style>
