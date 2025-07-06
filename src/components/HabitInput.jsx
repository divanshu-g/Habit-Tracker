const HabitInput = ({ habit, onChange, onAdd }) => {
  return (
    <div className="flex gap-2 mb-4">
      <input
        className="border rounded px-4 py-2 flex-1
             bg-white text-black placeholder-gray-500
             dark:bg-gray-800 dark:text-white dark:placeholder-gray-300"
        type="text"
        value={habit}
        placeholder="Enter your habit..."
        onChange={onChange}
      />

      <button
        onClick={onAdd}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        Add Habit
      </button>
    </div>
  );
};

export default HabitInput;
