<template>
  <div
    class="min-h-screen flex flex-col items-center justify-between text-center"
  >
    <section class="max-w-5xl mx-auto px-6 py-20">
      <h1 class="text-4xl font-bold mb-4">🎟️ Ticket Manager</h1>
      <p class="text-lg mb-6">
        Manage tickets easily — track, update, and resolve all in one place.
      </p>
      <div class="flex justify-center gap-4">
        <router-link
          to="/auth/login"
          class="px-6 py-2 bg-blue-600 text-white rounded-lg shadow"
        >
          Login
        </router-link>
        <router-link
          to="/auth/signup"
          class="px-6 py-2 bg-gray-200 rounded-lg shadow"
        >
          Get Started
        </router-link>
      </div>
    </section>

    <img src="/wave.svg" alt="wave" class="w-full" />

    <Footer />
  </div>
</template>

<script setup>
import Footer from "../components/Footer.vue";
</script>
