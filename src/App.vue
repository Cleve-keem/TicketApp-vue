<template>
  <div id="app" class="min-h-screen bg-gray-100 text-gray-900">
    <!-- <Navbar /> -->
    <main class="main_container">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
</script>

<!-- <style></style> -->
