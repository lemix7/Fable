'use client'
import Hero from './components/Hero'
import Features from './components/Features'
import { useEffect } from 'react'
import Lenis from 'lenis';
import Testimonials from './components/Testimonials';
import Cta from './components/Cta';
function App() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => { // smooth scroll
    const lenis = new Lenis()
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
   <div className=" w-full h-screen mx-auto bg-darkGrey text-offWhite ">

    <Hero/>
    
    <Features/> 
    <Testimonials/> 
    <Cta/> 
    Footer 


   </div>
  )
}

export default App
