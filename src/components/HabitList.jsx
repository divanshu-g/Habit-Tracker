import HabitItem from './HabitItem'

const HabitList = (props) => {
  return (
    <div className='space-y-2.5'>
        {props.allHabits.map((habit, index) => (
            <HabitItem 
            key ={index}
            habit = {habit}
            index = {index}
            {...props}
            />
        ))}
    </div>
  )
}

export default HabitList