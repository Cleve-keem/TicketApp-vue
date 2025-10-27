<template>
  <div style="padding: 2rem">
    <h2>Dashboard</h2>

    <!-- Stats -->
    <div class="card-grid">
      <div class="card">
        <h3 class="stat-title">Total Tickets</h3>
        <p class="stat-value">{{ total }}</p>
      </div>
      <div class="card">
        <h3 class="stat-title">Open</h3>
        <p class="stat-value">{{ open }}</p>
      </div>
      <div class="card">
        <h3 class="stat-title">Closed</h3>
        <p class="stat-value">{{ closed }}</p>
      </div>
    </div>

    <!-- Quick Actions -->
    <div class="card mt">
      <h3>Quick actions</h3>
      <div class="flex">
        <router-link to="/tickets" class="btn primary"
          >Manage tickets</router-link
        >
        <router-link to="/" class="btn ghost">Go Home</router-link>
      </div>
    </div>

    <!-- All Tickets -->
    <div class="card" style="margin-top: 4rem">
      <h3>All tickets</h3>
      <TicketCard
        v-for="t in ticketsStore.tickets"
        :key="t.id"
        :ticket="t"
        @edit="openEditModal"
        @delete="confirmDelete"
      />
    </div>

    <!-- Edit Modal -->
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
import { ref, computed } from "vue";
import TicketCard from "../components/TicketCard.vue";
import EditModal from "../components/EditModal.vue";
import ConfirmModal from "../components/ConfirmModal.vue";
import { useTickets } from "../store/useTicket";

const ticketsStore = useTickets();

// computed counts
const total = computed(() => ticketsStore.tickets.length);
const open = computed(
  () => ticketsStore.tickets.filter((t) => t.status === "open").length
);
const closed = computed(
  () => ticketsStore.tickets.filter((t) => t.status === "closed").length
);

// modal state
const showModal = ref(false);
const selectedTicket = ref(null);

// delete modal state
const showDeleteModal = ref(false);
const ticketToDelete = ref(null);

function openEditModal(ticket) {
  selectedTicket.value = ticket;
  showModal.value = true;
}

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

<style scoped>
.card.mt {
  margin-top: 20px;
}
.card > h3 {
  margin: 10px 0;
}
.flex {
  display: flex;
  margin-bottom: 1rem;
  gap: 1rem;
}
</style>
