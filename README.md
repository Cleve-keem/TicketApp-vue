# Multi-Framework Ticket Web App — README

A ticket management app specification and example Vue implementation. This repository contains a full Vue.js implementation (TicketApp). The app supports auth (localStorage), protected routes, a dashboard, and full ticket CRUD with validation and user feedback.

## Quick links

- Vue implementation: ./ (current folder)

## Core rules

- Max content width: 1440px, centered on large screens.
- Hero: wavy SVG at bottom + decorative circle(s) overlapping hero.
- Cards: shadowed, rounded boxes for stats, tickets, and features.
- Auth: Simulated via localStorage key ticketapp_session. Dashboard and Tickets routes require session.
- Ticket status values: "open", "in_progress", "closed" with color mapping:
  - open → green
  - in_progress → amber
  - closed → gray
- Accessibility: semantic HTML, visible focus states, alt text where relevant, and sufficient contrast.
- Validation: title and status required. Status must be one of the three allowed values. Inline errors or toast feedback for failures.

## Frameworks & libraries

- Vue 3 (script setup)
- Vue Router
- Pinia (state)
- uuid (v4) for ticket IDs
- CSS files: index.css, style.css (project styling)
- Dev tooling: Vite / npm (typical with Vue 3 templates)

## Project structure (relevant files)

- src/
  - main.js — app bootstrap (Pinia + Router)
  - App.vue — global layout (Navbar + <router-view />)
  - router/index.js — routes and requireAuth navigation guard
  - store/useTicket.js — Pinia store (tickets persisted to localStorage)
  - views/
    - Landing.vue
    - Login.vue
    - Signup.vue
    - Dashboard.vue
    - Tickets.vue
  - components/
    - Navbar.vue
    - Footer.vue
    - TicketForm.vue
    - TicketCard.vue
    - EditModal.vue
    - ConfirmModal.vue

### State & auth details

- Session key: ticketapp_session (localStorage)
- Tickets persistence key: tickets (localStorage)
- useTicket store
  - state: tickets (array)
  - actions: create, update, delete, save
- Auth flow
  - Signup saves user to localStorage key ticket_users
  - Login sets ticketapp_session
  - Router guard redirects unauthorized users to /auth/login

## Validation & error handling

- Form-level inline validations for required fields (title, status) and basic email/password checks on signup/login.
- Ticket forms enforce allowed status values.
- UI provides inline error messages; confirm and toast-style modals prompt for destructive actions.
- Error messages examples:
  - “Your session has expired — please log in again.”
  - “Failed to load tickets. Please retry.”

## Setup (Vue)

1. Install
   - cd <repo-root>
   - npm install
2. Run (dev)
   - npm run dev
3. Build / serve
   - npm run build
   - preview: npm run preview (or serve the dist folder)

### Example test credentials

- Signup any user using the UI, or use:
  - Email: test@example.com
  - Password: Password123
- After signup, login will create localStorage key ticketapp_session and allow access to /dashboard and /tickets.

### Accessibility notes

- Use semantic landmarks (header, main, footer).
- Provide aria labels on modal dialogs and ensure focus trap where possible.
- Ensure color contrast for status tags and buttons; provide focus outlines for keyboard navigation.
- Form fields include labels and visible inline errors.

## Known issues / troubleshooting

- If protected routes redirect unexpectedly, check localStorage for ticketapp_session.
- If tickets disappear after refresh, ensure browser allows localStorage and no clearing extensions are active.
- Duplicate implementations must maintain identical design language (wave + circles + max-width).

## Contribution & further work

- Add unit/integration tests for form validation and protected routes.
- Add toast system for cross-framework parity (same UX).
- Replace localStorage with a mock API or backend for production-like behavior.

