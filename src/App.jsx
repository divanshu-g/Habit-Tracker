import './App.css'
import { ThemeProvider } from './context/Theme'
import HabitTracker from './page/HabitTracker'

function App() {

  return (
  <ThemeProvider >

    <HabitTracker/>
  </ThemeProvider>
  )
}

export default App
