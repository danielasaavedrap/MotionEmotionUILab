# 💖 Emotional UI Lab — “Colors, Motion & Microinteractions”

Welcome to **Emotional UI Lab**! This project is an interactive, visual laboratory designed to explore how emotional microinteractions, organic motion, and dynamic color systems react to different human moods.

This is not a traditional UI kit or a passive gallery—it is a living experiment where users can feel the direct impact of color and animation on the digital experience.

---

## 🚀 Key Features

### A) Microinteractions Showcase

Fluid animations and organic visual responses based on state changes (`loading` → `success` → `error`):

- **Fluid Button:** Gooey transitions and high-fidelity click responses.
- **Smooth Toggle:** Natural, physics-based transitions when toggling states.
- **Smart Hover Cards:** Micro-responses based on mouse direction and depth.
- **Reactive Inputs:** Form fields that visually react to focus, validation, and errors.
- **Organic Loader:** Non-linear, fluid animations for loading states.

### B) Color Palette Intelligence

An intelligent engine that adapts the entire interface based on emotional input:

- **Emotion Input:** The user defines the current "mood" or emotional state.
- **Dynamic Palette Generation:** Real-time calculation of contrast and color harmonies.
- **Reactive UI:** The entire application shifts its theme instantly.
- **Component Preview:** Live view of how the custom palette impacts real UI elements.
- **Emotional Dark / Light:** Dark and light modes specifically tailored to the psychology of the selected emotion.

---

## 🛠️ Technical Stack

This lab is built using a modern frontend ecosystem focused on high performance, strong typing, and fluid animations:

- **Core:** [React](https://react.dev/) + [Vite](https://vitejs.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animation:** [Framer Motion](https://www.framer.com/motion/) & [Motion One](https://motion.dev/)
- **State Management:** [Zustand](https://zustand-demo.pmnd.rs/)
- **Color Manipulation:** [Color.js](https://colorjs.io/)
- **Deployment:** [Vercel](https://vercel.com/)

## The emotions

|      Emoción      |  Arousal / Valencia  |    Color base     |       Ritmo        |                    Easing                    | Expressiveness | Weight | Letter-spacing |
| :---------------: | :------------------: | :---------------: | :----------------: | :------------------------------------------: | :------------: | :----: | :------------: |
| Neutral (default) |   middle/ neutral    |       grey        | Middle (300–400ms) |                easeInOutQuad                 |       -        |  400   |      0em       |
|       Calm        |    Low / positive    |    blue green     |  Slow (600–800ms)  |                easeInOutSine                 |     Subtle     |  400   |    +0.02em     |
|       Focus       | Low-middle / neutral | gray-blue (slate) |  fast (200–300ms)  |                 easeOutQuad                  |     Subtle     |  500   |      0em       |
|      Energy       |   High / positive    |    orange-red     |  Fast (150–250ms)  |                 easeOutExpo                  |   Expressive   |  700   |      0em       |
|       Happy       |   High / positive    |    Yellow-pink    |  Fast (300–450ms)  |     easeOutBack (spring, con overshoot)      |   Expressive   |  700   |    +0.01em     |
|      Tension      |   High / Negative    |        red        |  Fast (100–200ms)  | steps() o easeInOutQuint — jittery sensation |   Expressive   |  600   |    −0.01em     |

---

## 📂 Architecture & Layout

### Routes

- `/` → **Emotional UI Lab** (Main interactive dashboard)

### Arquitecture

    src/
    ├── components/     # Structural components of the app that do not have their own emotional personality; they simply inherit the theme.
    │   ├── layout/
    │   │   ├── Header.tsx
    │   │   └── PageContainer.tsx
    │   └── controls/
    │       ├── EmotionSelector.tsx     # emotion input
    │       └── UiModeToggle.tsx        # dark/light
    │
    ├── interactions/                    # the microinteractions that ARE the product. Each one is a self-contained mini-module
    │   ├── FluidButton/
    │   │   ├── FluidButton.tsx
    │   │   ├── FluidButton.animations.ts
    │   │   ├── FluidButton.test.tsx
    │   │   └── index.ts
    │   ├── SmoothToggle/
    │   ├── SmartCard/
    │   ├── ReactiveInput/
    │   └── OrganicLoader/
    │
    ├── emotions/
    │   ├── emotionDefinitions.ts
    │   └── emotionRhythm.ts
    │
    ├── color/
    │   ├── generatePalette.ts           # emotion → palette
    │   ├── colorRoles.ts                # background/accent/text/border
    │   └── contrastCheck.ts
    │
    ├── store/
    │   └── useLabStore.ts
    │
    ├── hooks/
    │   ├── useEmotion.ts
    │   └── usePalette.ts
    │
    ├── styles/
    │   ├── globals.css
    │   └── tokens.css
    │
    ├── lib/
    │   ├── easing.ts
    │   └── constants.ts
    │
    └── types/
        └── domain.ts                    # EmotionId, Palette, UiMode, etc.

### Layout Structure

- **Minimal Header:** Clean navigation and lab branding.
- **Emotion Selector:** Text input or global emotional state selector.
- **Main Area:**
  - _Microinteractions Showcase_
  - _Color Playground_
  - _UI Preview Area_

---

## 💻 Getting Started

Follow these steps to set up the laboratory in your local environment:

1. **Clone the repository:**

   ```bash
   git clone [https://github.com/YOUR_USERNAME/emotional-ui-lab.git](https://github.com/YOUR_USERNAME/emotional-ui-lab.git)
   cd emotional-ui-lab

   ```

2. Install dependencies:

   ```
   npm install
   # or using pnpm / yarn:
   # pnpm install | yarn install

   ```

3. Start the development server:

   ```
   npm run dev

   ```

4. Open in your browser: Navigate to http://localhost:5173 to see the live project.

## Available Scripts

- npm run dev - Starts the Vite local development server.
- npm run build - Compiles TypeScript and builds the production-ready app in /dist.
- npm run lint - Runs ESLint to check for code quality and style.
- npm run preview - Locally previews the production build.
