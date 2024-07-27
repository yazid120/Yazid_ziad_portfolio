import { useState,useEffect } from 'react'
import Navigationbar from './partials/Navbar'
import Footer from './partials/footer'
import Dark_Light_mode from './Components/Light_dark_mode'
import PresentationSection from './Components/presentation_part'
import Stars from './Components/Stars'
import Experience from './Components/Experience'
import Skills from './Components/Skills'
import Contact from './Components/Contact'

function App() {
  return (
  <>
  {/*** NavBar component ***/}
  <Navigationbar/>
   
  <PresentationSection />

  <Stars/>

  <Experience/>

  <Skills/>

  <Contact/>

  {/*** Footer component ***/}
  {/* <Footer /> */}
  </>
  )
}

export default App
