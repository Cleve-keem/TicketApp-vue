<template>
  <div class="landing-wrapper" style="display: flex; flex-direction: column">
    <section
      class="hero"
      aria-labelledby="hero-title"
      style="
        position: relative;
        overflow: hidden;
        padding: 1rem;
        width: 95%;
        max-width: 1400px;
        margin: 32px auto;
      "
    >
      <div
        style="
          position: relative;
          overflow: hidden;
          border-radius: 8px;
          background-color: transparent;
          z-index: 1;
        "
      >
        <div class="decorative-circle circle-1" aria-hidden="true"></div>
        <div class="decorative-circle circle-2" aria-hidden="true"></div>
        <div class="hero-inner container">
          <div class="hero-desc">
            <h1 id="hero-title" style="margin-bottom: 10px">TicketApp</h1>
            <p style="margin-bottom: 20px">
              Streamline your support with easy ticket creation, tracking, and
              resolution.
            </p>
            <div
              class="hero-cta"
              style="display: flex; gap: 12px; margin-bottom: 2rem"
            >
              <router-link to="/auth/login" class="btn primary"
                >Sign In</router-link
              >
              <router-link to="/auth/signup" class="btn ghost"
                >Get Started</router-link
              >
            </div>
          </div>
          <div class="card stats-preview">
            <h3>At a Glance</h3>
            <p class="helper">See your ticket stats on the dashboard.</p>
            <div class="card-grid">
              <div class="card">
                <div class="stat-title">Total Tickets</div>
                <div class="stat-value">—</div>
              </div>
              <div class="card">
                <div class="stat-title">Open</div>
                <div class="stat-value">—</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style="
          position: absolute;
          bottom: 0;
          /* z-index: -1; */
          left: 0;
          right: 0;
          display: block;
        "
      >
        <svg
          class="hero-wave"
          style="display: block; opacity: 0.5"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
        >
          <path
            d="M0 80L60 72C120 64 240 48 360 44C480 40 600 48 720 52C840 56 960 56 1080 48C1200 40 1320 24 1380 16L1440 8V80H0Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script setup>
import Footer from "../components/Footer.vue";
</script>

<style scoped>
.landing-wrapper {
  min-height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
}

.stats-preview {
  background: #fff;
  border: 1px solid rgba(15, 23, 36, 0.08);
}

@media (min-width: 850px) {
  .stats-preview {
    max-width: 400px;
  }
}

@media (min-width: 1009px) {
  .container {
    display: flex;
    justify-content: space-between;
  }

  .hero-desc {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .stats-preview {
    width: 600px;
  }
}
</style>
