# SPLMNS Assessment

This project is an interactive web app built with Next.js, where users can submit short phrases or names and watch them float and bounce around a dynamic, animated background. The app demonstrates modern state management, smooth animations, and a clean, responsive UI.

**Live Demo:** [View here](https://splmns-frontend-assessment-pi.vercel.app/)

---

## Features

- **Quick Tag Entry:** Instantly add a phrase or name using a simple input form.
- **Recent Tags List:** See your last five submitted tags for easy reference.
- **Animated Visualization:** Experience your tags as animated, floating elements on a visually engaging video background.
- **State Management:** Tags are managed globally using Zustand for a seamless experience.
- **Responsive Design:** Looks great on any device with 16:9 aspect ratio.

---

## Getting Started

### Prerequisites

- Node.js (v18 or newer)
- pnpm (for dependency management)

### Setup

1. **Install dependencies:**

   ```bash
   pnpm install
   ```

2. **Start the development server:**

   ```bash
   pnpm dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## How It Works

### 1. Home Page

- Enter a phrase or name in the input field.
- Submit to add it to your tag list (up to 5 tags).
- If you reach the limit, you’ll be prompted to clear the list before adding more.

### 2. Floating Tags Page

- Your submitted tags appear as floating, animated elements.
- Each tag starts at a random position and bounces within the container.
- Navigation is available via the sidebar.

---

## Project Structure

- `app/` – Next.js app directory (routes, layouts, and pages)
  - `page.tsx` – Home page with tag input and list
  - `floating-tags/page.tsx` – Animated floating tags visualization
- `lib/domains/floating-tags/` – All tag-related logic
  - `components/` – Tag input form, tag list, floating tag, and background
  - `hooks/` – Animation logic for floating tags
  - `store/` – Zustand store for tag state
  - `typedefs/` – TypeScript types for tags and store
- `components/sidebar/` – Sidebar navigation
- `components/ui/` – Reusable UI primitives (button, input, etc.)
- `public/particles/` – Background video asset

---

## Tech Stack

- **Framework:** Next.js (React)
- **Styling:** Tailwind CSS v4
- **State:** Zustand
- **Type Checking:** TypeScript
- **Linting/Formatting:** ESLint, Prettier

---
