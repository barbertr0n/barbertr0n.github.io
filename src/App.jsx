import { useState } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Navbar from './components/Navbar.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
	<>
	  <Header />
	  <Navbar />
	<p>A site to display all of my my accolades and projects.</p>
	</>
  )
}

export default App
