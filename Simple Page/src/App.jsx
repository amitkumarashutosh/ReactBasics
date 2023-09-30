import React from 'react'
import { useState } from 'react'
import Content from './Content'
import Header from './Header'

export default function App() {
  const [darkMode,setDarkMode]=useState(false)
  function darkModeColor(){
    setDarkMode(prevMode=>!prevMode)
  }
  return (
    <div style={{backgroundColor:'#1c1917',color:'white'}}>
      <Header mode={darkMode} toggle={darkModeColor}/>
      <Content />
    </div>
  )
}
