const HabitItem = ({
  habit,
  index,
  editingIndex,
  editedText,
  onToggle,
  onDelete,
  onEdit,
  onSave,
  setEditedText,
}) => (
  <div className="flex items-center gap-3 bg-white dark:bg-gray-800 p-2 rounded shadow text-black dark:text-white">
    {editingIndex === index ? (
      <input
        type="text"
        value={editedText}
        onChange={(e) => setEditedText(e.target.value)}
        className="border rounded px-2 py-1 text-black dark:text-white bg-white dark:bg-gray-800"
      />
    ) : (
      <span className={`${habit.done ? "line-through opacity-70" : ""}`}>
        {habit.name}
      </span>
    )}

    <input
      type="checkbox"
      checked={habit.done}
      onChange={() => onToggle(index)}
      className="ml-2"
    />

    <button
      onClick={() => onDelete(index)}
      className="border border-red-600 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
    >
      Delete
    </button>

    {editingIndex === index ? (
      <button
        onClick={() => onSave(index)}
        className="border border-green-600 bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
      >
        Save
      </button>
    ) : (
      <button
        onClick={() => onEdit(index)}
        className="border border-yellow-500 bg-yellow-400 text-black px-3 py-1 rounded hover:bg-yellow-500"
      >
        Edit
      </button>
    )}
  </div>
);

export default HabitItem;
