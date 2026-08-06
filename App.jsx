import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Content from './components/Content.jsx'
import Footer from './components/Footer.jsx'

function App() {
 
  return (
    <>
    <Header />
    <Content color="red" text="This is my first React Application!"/>
    <Content color="yellow" text="I am learning React!"/>
    <Content color="purple" text="React is pretty cool!"/>
    <Footer />
    </>
  )
}

export default App;
