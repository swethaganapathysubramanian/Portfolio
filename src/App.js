/* eslint-disable linebreak-style */
import React from 'react'
import './App.css'
import './Queries.css'
import './css/gridsystem.css'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import About from './components/About'
import Projects from './components/Projects'
import Contact from  './components/Contact'

function App() {
    return (
        <div className="App">
            <NavBar />
            <Hero />
            <Projects />
            <Contact />
        </div>
    )
}

export default App
