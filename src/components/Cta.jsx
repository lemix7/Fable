import { useGSAP } from '@gsap/react';
import CtaImg from '../assets/CtaImg.webp'
import { useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Cta = () => {
  const ctaRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(ctaRef.current.children, {
      opacity: 0,
      y:20
  }, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power2.out",
      scrollTrigger: {
          trigger: ctaRef.current.children,
          start: "top bottom",
          end: "bottom top",
          toggleActions: "play none none reverse"
      }
  });
  },[])

  return (
    <div className='cta' style={{backgroundImage: `url(${CtaImg})`, backgroundSize: 'cover', backgroundPosition: 'center'}} ref={ctaRef}>

        <h1 className='cta-heading'>Ready to craft</h1>
        <button className='cta-btn'>Get Started</button>

    </div>
  )
}

export default Cta