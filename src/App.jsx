import { useState } from 'react'
import './App.css'
import {BrowserRouter} from "react-router-dom"
import Router from './router/router'
import Header from './components/featurs/header/header'
import Footer from './components/featurs/footer/footer'
import TeachersContext from "./context/teachersContext/teachersContext"

function App() {

  return (
    <div className="App">
      <BrowserRouter>
       <Header/>
       <Router/>
       <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
