<template>
  <div class="auth_wrapper signup_container">
    <div class="auth_wrapper_inner">
      <div class="container">
        <form
          @submit.prevent="handleSignup"
          class="bg-white p-6 rounded-lg shadow w-80"
        >
          <h2 class="header">Sign Up</h2>
          <p>Create an account with us to enjoy our platform</p>
          <div class="form-group">
            <label for="fullname">Fullname</label>
            <input
              v-model="formData.name"
              type="text"
              placeholder="Fullname"
              :class="{ error: errors.name }"
              class="input"
            />
            <p v-if="errors.name" class="error">
              {{ errors.name }}
            </p>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input
              v-model="formData.email"
              type="email"
              placeholder="Email"
              :class="{ error: errors.email }"
              class="input"
            />
            <p v-if="errors.email" class="error">
              {{ errors.email }}
            </p>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              v-model="formData.password"
              type="password"
              placeholder="Password"
              :class="{ error: errors.password }"
              class="input"
            />
            <p v-if="errors.password" class="error">
              {{ errors.password }}
            </p>
          </div>
          <button class="w-full bg-green-600 text-white py-2 rounded">
            Create Account
          </button>
        </form>
        <p class="account_link">
          Already have an account?
          <router-link to="/auth/login"> sign in</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
// import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const formData = reactive({
  name: "",
  email: "",
  password: "",
});

const errors = reactive({
  name: "",
  email: "",
  password: "",
});

const handleSignup = () => {
  const { name, email, password } = formData;

  if (email.trim() === "") {
    errors.email = "Email field required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Please enter a vaild email (e.g name@example.com)";
  }

  if (password.trim() === "") {
    errors.password = "Password field required";
  }

  if (name.trim() === "") {
    errors.name = "Fullname field required";
  }

  const hasError = Object.values(errors).some((msg) => msg !== "");
  if (hasError) {
    return;
  }

  const users = JSON.parse(localStorage.getItem("ticket_users")) || [];
  users.push({ name, email, password });
  // save new user into localStorage
  localStorage.setItem("ticket_users", JSON.stringify(users));
  router.push("/auth/login");
};
</script>
