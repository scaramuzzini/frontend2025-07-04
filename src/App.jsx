import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 10)}>
          contador é {count}
        </button>
      </div>
    </>
  )
}

export default App
