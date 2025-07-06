const Navbar = ({ darkMode, toggleDarkMode, seconds, isRunning, setShowDropdown, showDropdown,handleStart,handlePause,handleReset }) => (
  <nav className="bg-white dark:bg-gray-800 shadow mb-6 p-4 rounded">
    <div className="flex justify-between items-center">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">My Today's Task</h2>
      <div>
        <div className="relative inline-block text-left">
  <button
    onClick={() => setShowDropdown((prev) => !prev)}
    className="text-xl"
  >
    ⏱️
  </button>
  <span className="ml-2">
    {Math.floor(seconds / 60)}m {seconds % 60}s{" "}
    <span className={`${isRunning ? "text-green-500" : "text-red-500"}`}>
      ({isRunning ? "Running" : "Paused"})
    </span>
  </span>

  {showDropdown && (
    <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 shadow-lg rounded z-10">
      <button
        onClick={handleStart}
        className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        ▶️ Start
      </button>
      <button
        onClick={handlePause}
        className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        ⏸ Pause
      </button>
      <button
        onClick={handleReset}
        className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        🔄 Reset
      </button>
    </div>
  )}
</div>

        <button onClick={toggleDarkMode} className="ml-4 text-sm border rounded  px-2 py-1 dark:text-white dark:border-white">
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </div>
  </nav>
);
export default Navbar;
