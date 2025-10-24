import { defineStore } from "pinia";
import { v4 as uuidv4 } from "uuid";

export const useTickets = defineStore("tickets", {
  state: () => ({
    tickets: JSON.parse(localStorage.getItem("tickets")) || [],
  }),
  actions: {
    save() {
      localStorage.setItem("tickets", JSON.stringify(this.tickets));
    },
    create(ticket) {
      ticket.id = uuidv4();
      this.tickets.push(ticket);
      this.save();
    },
    update(id, updated) {
      const index = this.tickets.findIndex((t) => t.id === id);
      if (index !== -1) {
        this.tickets[index] = { ...this.tickets[index], ...updated };
        this.save();
      }
    },
    delete(id) {
      this.tickets = this.tickets.filter((t) => t.id !== id);
      this.save();
    },
  },
});
