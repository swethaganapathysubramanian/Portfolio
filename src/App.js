/* eslint-disable linebreak-style */
import React, { useEffect, useState } from 'react'

import './css/gridsystem.css'
import './App.css'
import './Queries.css'

import Hero from './components/Hero'
import NavBar from './components/NavBar'
import Projects from './components/Projects'
import Contact from  './components/Contact'


const App = () => {

    const [effect, setEffect] = useState('')

    useEffect(() => {
        console.log('1')
        const handleScroll = () => {
            if (window.pageYOffset > 2.5 * window.innerHeight) {
                setEffect('Contact')
            }
            else if (window.pageYOffset > window.innerHeight) {
                setEffect('Projects')
            } else {
                setEffect('')
            }
        }
        window.addEventListener('scroll', handleScroll)
    },)

    return (
        <div className="App">

            <NavBar effect={effect}/>
            <Hero />
            <Projects />
            <Contact />
        </div>
    )
}

export default App
