<template>
  <div class="landing_wrapper">
    <div class="landing_wrapper_inner">
      <div class="container">
        <section class="landing_content">
          <h1 class="text-4xl font-bold mb-4">🎟️ Ticket Management App</h1>
          <p class="text-lg mb-6">
            Manage tickets easily — track, update, and resolve all in one place.
          </p>
          <div class="flex justify-center gap-4">
            <router-link role="button" to="/auth/login" class="authbtn login">
              Login
            </router-link>
            <router-link role="button" to="/auth/signup" class="authbtn signup">
              Get Started
            </router-link>
          </div>
        </section>
      </div>

      <img src="/wave.svg" alt="wave" class="w-full" />
    </div>
  </div>
</template>

<script setup>
import Footer from "../components/Footer.vue";
</script>
