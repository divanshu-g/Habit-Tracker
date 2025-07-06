import { Hourglass } from "lucide-react";

const TimeDropdown = ({
    seconds,
    isRunning, 
    showDropdown, 
    setShowDropdown, 
    onStart, 
    onPause, 
    onRest}) => {
    return (
  <div className='relative inline-block text-left'>
    <button onClick={() => setShowDropdown((prev) => !prev)}
        className='text-black text-xl border rounded text- bg-white px-1 py-1'>
            <Hourglass className="focus:ring-0 border-none focus:outline-none text-xl" />
    </button>
    <span className='ml-2'>
        {Math.floor(seconds/60)}m {seconds % 60}s
        <span className={isRunning ? "text-green-500" : "text-red-500"}>
            ({isRunning ? "Running" : "Paused"})
        </span>
    </span>

    {showDropdown && (
        <div className='absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 shadow-lg rounded z-10'>

            <button 
            onClick={onStart}
            className='block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700'>
                ▶ Start
            </button>

            <button 
            onClick={onPause}
            className='block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700'>
                ⏸ Pause
            </button>

            <button onClick={onRest}
            className='block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700'>
                🔁 Reset
            </button>

        </div>
    )}
  </div>
    )
}

export default TimeDropdown