import { useEffect, useState } from "react";
import "../App.css";
import HabitInput from "../components/HabitInput";
import HabitList from "../components/HabitList";
import StatsFooter from "../components/StatsFooter";
import { useTheme } from "../context/Theme";
import TimeDropdown from "../components/TimeDropdown";

const HabitTracker = () => {
  const [habit, setHabit] = useState("");
  const [allHabits, setAllHabits] = useState([]);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedText, setEditedText] = useState("");
  const [seconds, setSeconds] = useState(0);
  const { darkMode, setDarkMode } = useTheme();
  const [isRunning, setIsRunning] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStart = () => setIsRunning(true)
  const handlePause = () => setIsRunning(false)
  const handleResetTimer = () => {
    setIsRunning(false)
    setSeconds(0);
  }

  // Making habit list
  const handleClick = () => {
    if (habit.trim() === "") return;

    setAllHabits((prev) => {
      return [...prev, { name: habit, done: false }];
    });
    setHabit("");
  };

  const handleChange = (e) => {
    setHabit(e.target.value);
  };

  //   Toggle Taks Done or not
  const handleToggle = (index) => {
    setAllHabits((prev) =>
      prev.map((habit, i) =>
        i === index ? { ...habit, done: !habit.done } : habit
      )
    );
  };

  //   Reseting the task list
  const handleReset = () => {
    setAllHabits([]);
  };

  //   setting habits in localStorage
  useEffect(() => {
    if (hasLoaded) {
      localStorage.setItem("habits", JSON.stringify(allHabits));
    }
  }, [allHabits, hasLoaded]);

  //   getting habits from localstorage
  useEffect(() => {
    const response = localStorage.getItem("habits");
    if (response) {
      const parsed = JSON.parse(response);
      setAllHabits(parsed);
    }
    setHasLoaded(true);
  }, []);

  // Edit the habit
  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditedText(allHabits[index].name);
  };

  //   Delete the task
  const handleDelete = (index) => {
    setAllHabits((prev) => prev.filter((_, i) => i !== index));
  };

  // Save edited habit
  const handleSave = (index) => {
    setAllHabits((prev) =>
      prev.map((habit, i) =>
        i === index ? { ...habit, name: editedText } : habit
      )
    );
    setEditingIndex(null);
    setEditedText("");
  };

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      } min-h-screen p-6 font-sans`}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">🧠 Habit Tracker</h2>
        <div className="space-x-4">
          <TimeDropdown
          seconds={seconds}
          isRunning={isRunning}
          showDropdown={showDropdown}
          setShowDropdown={setShowDropdown}
          onStart={handleStart}
          onPause={handlePause}
          onRest={handleResetTimer}
/>
          <button onClick={() => setDarkMode(!darkMode)} className=" text-sm">
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
      </div>

      <HabitInput habit={habit} onChange={handleChange} onAdd={handleClick} />

      <HabitList
        allHabits={allHabits}
        onToggle={handleToggle}
        onDelete={handleDelete}
        onEdit={handleEdit}
        onSave={handleSave}
        editingIndex={editingIndex}
        editedText={editedText}
        setEditedText={setEditedText}
      />

      <StatsFooter
        completedCount={allHabits.filter((habit) => habit.done).length}
        onReset={handleReset}
      />
    </div>
  );
};

export default HabitTracker;
