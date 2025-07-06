# 🧠 Habit Tracker

A minimal Habit Tracking web app built with **React**, **Tailwind CSS**, and **localStorage**. Track your daily habits, mark them done, edit or delete them, and stay focused with an integrated timer and dark/light theme toggle.

## 🚀 Features

- ✅ Add / Edit / Delete habits
- 🌙 Light and Dark mode toggle
- ⏱ Built-in Timer with Start / Pause / Reset
- 💾 Data persists in `localStorage`
- 🎯 View completed habit stats
- 📱 Responsive and mobile-friendly UI

## 🛠 Tech Stack

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/) for fast development
- [Lucide Icons](https://lucide.dev/)
- [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

## 🧑‍💻 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/Habit-Tracker.git
   cd Habit-Tracker
   
2. **Install dependencies**
   ```bash
   npm install
   ```
  
3. **Start the development server**
   ```bash
   npm run dev
   ```

## 🌐 Deployment
This project is ready to be deployed on platforms like Vercel or Netlify.
To deploy on Vercel:

Connect your GitHub repo on vercel.com
Click Deploy

📁 Project Structure

src/
│
├── components/
│   ├── HabitInput.jsx
│   ├── HabitList.jsx
│   ├── HabitItem.jsx
│   ├── StatsFooter.jsx
│   └── TimeDropdown.jsx
│
├── context/
│   └── Theme.jsx
│
├── page/
│   └── HabitTracker.jsx
├── App.jsx
├── main.jsx
└── index.css

## ✨ Future Improvements

- Firebase backend for real user accounts
- Comments and shared habit pages
- Reminders and notifications
-Progress graphs

📄 License
This project is licensed under the MIT License.

Made by Divanshu Garg
