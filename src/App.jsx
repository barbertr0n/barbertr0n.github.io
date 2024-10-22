import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
	<>
	<h1>My Portfolio</h1>
	<p>A site to display all of my my accolades and projects.</p>
	</>
  )
}

export default App
