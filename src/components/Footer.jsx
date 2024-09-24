import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const Footer = () => {
    const fableRef = useRef(null)
    useGSAP(() => {
       gsap.fromTo(fableRef.current,
        {
          opacity: 0,
          y: 100
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: fableRef.current,
            start: "top bottom",
            end: "bottom center",
            scrub: false,
            toggleActions: "play none none none"
          }
        }
       )
    })
  return (
    <div className="footer">

        <div className="flex flex-col gap-3 md:gap-6 ">
            <h2 className="playfair text-3xl md:text-4xl lg:text-5xl">Fable</h2>
            <h3 className="text-sm md:text-base lg:text-xl">copyright 2024 fable.inc.</h3>
            <p className="text-[10px] md:text-xs lg:text-base">legal stuff | privacy policy | security | website accessibility | manage cookies</p>
        </div>

        <div className="flex px-4 w-full grotesk justify-center gap-[150px] md:justify-evenly  ">

            <div className="flex flex-col gap-2 items-center">
                <h3 className="text-xl font-semibold ">company</h3>
                <ul className="flex flex-col gap-2 items-start">
                    <li className="footer-links">about</li>
                    <li className="footer-links">careers</li>
                    <li className="footer-links">blog</li>
                    <li className="footer-links">press</li>
                </ul>
            </div>
           

            <div className="flex flex-col gap-2 ">
                <h3 className="text-xl font-semibold ">product</h3>
                <ul className="flex flex-col gap-2 items-start">
                    <li className="footer-links">features</li>
                    <li className="footer-links">solutions</li>
                    <li className="footer-links">integrations</li>
                    <li className="footer-links">pricing</li>
                </ul>
            </div>

        </div>

        <h1 className="fable-footer opacity-1" ref={fableRef}>Fable</h1>
        
    </div>
  )
}

export default Footer