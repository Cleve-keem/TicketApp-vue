<template>
  <div v-if="modelValue" class="modal-backdrop" @click.self="emitClose">
    <div
      class="modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="edit-title"
    >
      <h3 id="edit-title">Edit Ticket</h3>
      <form @submit.prevent="onSave">
        <div class="form-group">
          <label for="title">Title</label>
          <input id="title" v-model="local.title" required />
        </div>

        <div class="form-group">
          <label for="description">Description</label>
          <textarea id="description" v-model="local.description"></textarea>
        </div>

        <div class="form-group">
          <label for="status">Status</label>
          <select id="status" v-model="local.status" required>
            <option value="open">Open</option>
            <option value="in_progress">In Progress</option>
            <option value="closed">Closed</option>
          </select>
        </div>

        <div class="modal-actions">
          <button type="submit" class="btn primary">Save</button>
          <button type="button" class="btn ghost" @click="emitClose">
            Cancel
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { watch, reactive, toRefs } from "vue";
import { defineEmits, defineProps } from "vue";

const props = defineProps({
  modelValue: { type: Boolean, required: true },
  ticket: { type: Object, required: false, default: () => ({}) },
});

const emits = defineEmits(["update:modelValue", "save"]);

// local reactive copy so editing doesn't mutate parent before save
const local = reactive({
  id: "",
  title: "",
  description: "",
  status: "open",
});

// when ticket prop changes, copy into local
watch(
  () => props.ticket,
  (t) => {
    if (t && Object.keys(t).length) {
      local.id = t.id || "";
      local.title = t.title || "";
      local.description = t.description || "";
      local.status = t.status || "open";
    } else {
      local.id = "";
      local.title = "";
      local.description = "";
      local.status = "open";
    }
  },
  { immediate: true }
);

function emitClose() {
  emits("update:modelValue", false);
}

// Save handler emits the updated payload to parent
function onSave() {
  emits("save", {
    id: local.id,
    title: local.title,
    description: local.description,
    status: local.status,
  });
  emits("update:modelValue", false);
}
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}
.modal {
  background: #fff;
  padding: 1.5rem;
  border-radius: 10px;
  width: 420px;
  max-width: 94%;
}
.form-group {
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
input,
textarea,
select {
  padding: 8px 10px;
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.12);
}
.modal-actions {
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  margin-top: 0.5rem;
}
.btn.primary {
  background: #000;
  color: #fff;
  padding: 8px 12px;
  border-radius: 8px;
  border: none;
}
.btn.ghost {
  background: transparent;
  border: 1px solid rgba(0, 0, 0, 0.12);
  padding: 8px 12px;
  border-radius: 8px;
}
</style>
