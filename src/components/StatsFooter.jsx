const StatsFooter = ({ completedCount, onReset }) => (
  <>
    <p className="mt-4 text-gray-700 dark:text-white font-medium">
      Total Task Completed: {completedCount}
    </p>
    <button onClick={onReset} className="border px-4 py-2 rounded">
      Reset Task
    </button>
  </>
);
export default StatsFooter;
