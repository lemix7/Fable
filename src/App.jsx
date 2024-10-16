'use client'
import Hero from './components/Hero'
import Features from './components/Features'
import { useEffect } from 'react'
import Lenis from 'lenis';
import Testimonials from './components/Testimonials';
import Cta from './components/Cta';
import Footer from './components/Footer';


function App() {

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on when refreshed
  }, []);

  useEffect(() => { // Initialize smooth scroll using Lenis
    const lenis = new Lenis({
      duration: 1.5, // Adjust scroll duration
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Ease function for smooth scroll
      smoothWheel: true, // Enable smooth scrolling with the wheel
      smoothTouch: false, // smooth scrolling in touch devices
    })

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Ensure clean-up to avoid memory leaks
    return () => {
      lenis.destroy();
    }
  }, []);

  return (
   <div className="w-full h-full mx-auto bg-darkGrey text-offWhite overflow-hidden"> 
      <Hero />
      <Features />
      <Testimonials />
      <Cta />
      <Footer />
   </div>
  )
}

export default App;
