<template>
  <div class="auth_wrapper login_container">
    <div class="auth_wrapper_inner">
      <div class="container">
        <form @submit.prevent="handleLogin">
          <h2 class="header">Sign In</h2>
          <p>Login to continue get your ticket today</p>
          <div class="form-group">
            <label for="email">Email</label>
            <input
              v-model="formData.email"
              type="email"
              placeholder="Email"
              id="email"
              class="input"
              :class="{ error: errors.name }"
            />
            <p v-if="errors.email" class="">{{ errors.email }}</p>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              v-model="formData.password"
              type="password"
              placeholder="Password"
              id="password"
              class="input"
              :class="{ error: errors.name }"
            />
            <p v-if="errors.password" class="text-red-500 text-sm mb-3">
              {{ errors.password }}
            </p>
          </div>
          <button>Login</button>
        </form>
        <p class="account_link">
          Don't have account ?
          <router-link to="/auth/signup">sign up</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const formData = reactive({
  email: "",
  password: "",
});

const errors = reactive({
  email: "",
  password: "",
});

const handleLogin = () => {
  const { email, password } = formData;
  // Reset errors
  errors.email = "";
  errors.password = "";

  const users = JSON.parse(localStorage.getItem("ticket_users")) || [];
  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    alert("Invalid credentials!");
  } else {
    localStorage.setItem("ticketapp_session", JSON.stringify(user));
    router.push("/dashboard");
  }
};
</script>

<style src="../style.css"></style>
