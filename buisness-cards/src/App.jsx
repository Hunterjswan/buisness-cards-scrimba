import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Photo from "../src/components/Photo"
import Body from "../src/components/Body"
import Footer from "../src/components/Footer"


function App() {


  return (
    <main className='buisness-card'>
      <div className='card-container'>
        <Photo />
        <Body />
        <Footer />
      </div>
    </main>
  )
}

export default App
