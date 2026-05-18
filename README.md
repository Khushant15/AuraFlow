<div align="center">
  <h1>🌌 Aura Flow Dashboard</h1>
  <p><strong>A premium, state-of-the-art productivity dashboard designed for deep work and flow states.</strong></p>
  
  [![React](https://img.shields.io/badge/React-19.0.0-blue.svg?style=flat&logo=react)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue.svg?style=flat&logo=typescript)](https://www.typescriptlang.org/)
  [![Vite](https://img.shields.io/badge/Vite-7.2.4-purple.svg?style=flat&logo=vite)](https://vitejs.dev/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC.svg?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
</div>

<br />

Built with React and TypeScript, **Aura Flow** features a stunning Aurora Glass aesthetic and a massive interactive SVG progress ring. It is designed to be the ultimate companion for focused work sessions, combining task management, ambient sound generation, and powerful productivity analytics into one seamless dashboard.

---

## ✨ Key Features

### 🧠 Deep Work & Flow
*   **Interactive SVG Progress Ring:** A massive, visually striking timer that serves as the centerpiece of your dashboard.
*   **Floating Glass Sidebar:** Sleek, space-saving vertical navigation using modern glassmorphism.
*   **Smart Time Snapping:** Timer easily adjusts in clean 5-minute intervals.
*   **Zen Focus Mode:** Press `F` to instantly hide all distractions and dive deep into your workflow.

### 📊 Productivity Tracking
*   **Streak Counter 🔥:** Maintain momentum by tracking your daily consistency.
*   **Weekly Charts:** Beautiful, interactive charts to visualize your last 7 days of deep work.
*   **Session Statistics:** Monitor your total focus time and completed tasks at a glance.
*   **Daily Goals:** Set, track, and crush your daily session targets.

### 📝 Task Management
*   **Integrated Task List:** Create, edit, and complete tasks seamlessly without leaving the timer.
*   **Color Coding:** Visually categorize tasks for better organization.
*   **Task Progress:** Track exactly how many sessions you've spent on each individual task.

---

## ⌨️ Keyboard Shortcuts

Power users can navigate the entire dashboard without touching a mouse:

| Key | Action |
| :--- | :--- |
| <kbd>Space</kbd> | Start/Pause timer |
| <kbd>R</kbd> | Reset timer to original duration |
| <kbd>F</kbd> | Toggle Zen Focus Mode |
| <kbd>←</kbd> / <kbd>→</kbd> | Cycle through timer modes (Focus, Break, Long Break) |
| <kbd>↑</kbd> / <kbd>↓</kbd> | Adjust timer duration (±5 min) |

---

## 🛠 Tech Stack & Architecture

*   **Frontend Framework:** React 19 (Hooks-based architecture)
*   **Language:** TypeScript for end-to-end type safety
*   **Build Tool:** Vite 7 for lightning-fast HMR
*   **Styling Engine:** Tailwind CSS v4 + Native CSS Variables (Aurora Glass Theme)
*   **Animations:** Framer Motion for buttery-smooth layout transitions
*   **Icons:** Lucide React
*   **State Management:** React Context API + Custom Hooks (`useTimer`, `useTasks`, `useStats`)
*   **Storage:** LocalStorage API for offline persistence

---

## 🚀 Getting Started

### Prerequisites
Make sure you have Node.js 18+ and `npm` or `yarn` installed.

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/aura-flow.git
   cd aura-flow
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see the dashboard in action!

---

## 📄 License
This project is licensed under the MIT License - feel free to use, modify, and distribute it for personal or commercial purposes.

---

Made with ❤️ by Khushant Sharma
