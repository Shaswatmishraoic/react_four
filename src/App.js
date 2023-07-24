import React from 'react'
import RouterCompo from './Handsonfour/RouterCompo'
import {BrowserRouter} from 'react-router-dom'
import Linkcompo from './Handsonfour/Linkcompo'

function App() {
  return (
    <>
    
    <BrowserRouter>
      <Linkcompo/>
      <RouterCompo/>
    </BrowserRouter>
     
    </>
  )
}

export default App
