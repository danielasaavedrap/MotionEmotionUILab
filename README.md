# 💖 Emotional UI Lab — “Colors, Motion & Microinteractions”

Welcome to **Emotional UI Lab**! This project is an interactive, visual laboratory designed to explore how emotional microinteractions, organic motion, and dynamic color systems react to different human moods.

This is not a traditional UI kit or a passive gallery—it is a living experiment where users can feel the direct impact of color and animation on the digital experience.

---

## 🚀 Key Features

### A) Microinteractions Showcase
Fluid animations and organic visual responses based on state changes (`loading` → `success` → `error`):
* **Fluid Button:** Gooey transitions and high-fidelity click responses.
* **Smooth Toggle:** Natural, physics-based transitions when toggling states.
* **Smart Hover Cards:** Micro-responses based on mouse direction and depth.
* **Reactive Inputs:** Form fields that visually react to focus, validation, and errors.
* **Organic Loader:** Non-linear, fluid animations for loading states.

### B) Color Palette Intelligence
An intelligent engine that adapts the entire interface based on emotional input:
* **Emotion Input:** The user defines the current "mood" or emotional state.
* **Dynamic Palette Generation:** Real-time calculation of contrast and color harmonies.
* **Reactive UI:** The entire application shifts its theme instantly.
* **Component Preview:** Live view of how the custom palette impacts real UI elements.
* **Emotional Dark / Light:** Dark and light modes specifically tailored to the psychology of the selected emotion.

---

## 🛠️ Technical Stack

This lab is built using a modern frontend ecosystem focused on high performance, strong typing, and fluid animations:

* **Core:** [React](https://react.dev/) + [Vite](https://vitejs.dev/) + [TypeScript](https://www.typescriptlang.org/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Animation:** [Framer Motion](https://www.framer.com/motion/) & [Motion One](https://motion.dev/)
* **State Management:** [Zustand](https://zustand-demo.pmnd.rs/)
* **Color Manipulation:** [Color.js](https://colorjs.io/)
* **Deployment:** [Vercel](https://vercel.com/)

---

## 📂 Architecture & Layout

### Routes
* `/` → **Emotional UI Lab** (Main interactive dashboard)

### Layout Structure
* **Minimal Header:** Clean navigation and lab branding.
* **Emotion Selector:** Text input or global emotional state selector.
* **Main Area:**
    * *Microinteractions Showcase*
    * *Color Playground*
    * *UI Preview Area*

---

## 💻 Getting Started

Follow these steps to set up the laboratory in your local environment:

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/YOUR_USERNAME/emotional-ui-lab.git](https://github.com/YOUR_USERNAME/emotional-ui-lab.git)
   cd emotional-ui-lab

2. Install dependencies:
    ```
    npm install
    # or using pnpm / yarn:
    # pnpm install | yarn install

3. Start the development server:
    ```
    npm run dev

4. Open in your browser: Navigate to http://localhost:5173 to see the live project.

## Available Scripts
* npm run dev - Starts the Vite local development server.
* npm run build - Compiles TypeScript and builds the production-ready app in /dist.
* npm run lint - Runs ESLint to check for code quality and style.
* npm run preview - Locally previews the production build.