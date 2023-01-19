import "./styles/global.css";

import { Habit } from "./components/Habit";

function App() {

  return (
    <div>
      <Habit completed={0} />
      <Habit completed={12} />
      <Habit completed={23} />
    </div>
  )
}

export default App
