import { useState } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Navbar from './components/Navbar.jsx';

function App() {
  return (
	<>
		<Header />
		<Navbar />
		<hr/>
		<hr/>
		<p>A site to display all of my my accolades and projects.</p>
	</>
	)
};

export default App;
