<template>
  <div class="" style="padding: 2rem">
    <h2 class="" style="text-align: center">Ticket Management</h2>
    <TicketForm />
    <div class="card" style="margin-top: 12">
      <h3>All tickets</h3>
      <TicketCard
        v-for="t in ticketsStore.tickets"
        :key="t.id"
        :ticket="t"
        @edit="openEditModal"
        @delete="confirmDelete"
      />
    </div>

    <EditModal
      v-model="showModal"
      :ticket="selectedTicket"
      @save="handleModalSave"
    />

    <!-- Confirm Delete Modal -->
    <ConfirmModal
      v-model="showDeleteModal"
      title="Delete Ticket"
      message="Are you sure you want to delete this ticket?"
      @confirm="handleDeleteConfirm"
      @cancel="cancelDelete"
    />
  </div>
</template>

<script setup>
import TicketForm from "../components/TicketForm.vue";
import TicketCard from "../components/TicketCard.vue";
import { useTickets } from "../store/useTicket";
import EditModal from "../components/EditModal.vue";
import { ref } from "vue";
import ConfirmModal from "../components/ConfirmModal.vue";

const ticketsStore = useTickets();

const showModal = ref(false);
const selectedTicket = ref(null);

// delete modal state
const showDeleteModal = ref(false);
const ticketToDelete = ref(null);

function openEditModal(ticket) {
  selectedTicket.value = ticket;
  showModal.value = true;
}

// handle save from modal -> update store
function handleModalSave(payload) {
  if (!payload || !payload.id) return;
  ticketsStore.update(payload.id, {
    title: payload.title,
    description: payload.description,
    status: payload.status,
  });
  selectedTicket.value = null;
}

// delete logic
function confirmDelete(ticket) {
  ticketToDelete.value = ticket;
  showDeleteModal.value = true;
}

function handleDeleteConfirm() {
  if (ticketToDelete.value) {
    ticketsStore.delete(ticketToDelete.value.id);
    ticketToDelete.value = null;
  }
  showDeleteModal.value = false;
}

function cancelDelete() {
  showDeleteModal.value = false;
  ticketToDelete.value = null;
}
</script>
