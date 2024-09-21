import { useGSAP } from "@gsap/react";
import NavBar from "./NavBar";
import gsap from "gsap";
import { useRef } from "react";
import Headroom from "react-headroom";

const Hero = () => {
  

  useGSAP(() => {
    gsap.fromTo(
      heroContentRef.current.children,
      {
        opacity: 0,
        y: 100,
        scale: 0.8,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scale: 1,
        ease: "power2.out",
        stagger: 0.2,
      }
    );

    gsap.fromTo(
      heroButtonRef.current,
      {
        opacity: 0,
        y: 100,
        scale: 0.8,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.3,
      }
    );
  });

  const heroContentRef = useRef(null);
  const heroButtonRef = useRef(null);
  return (
    <div className="hero">

      

        <NavBar />


      <div
        ref={heroContentRef}
        className="flex flex-col  items-center justify-center mt-20 md:mt-32"
      >
        <h1 className="hero-heading">
          Craft your story <br /> with us{" "}
        </h1>
        <p className="grotesk text-xl lg:text-2xl text-center mt-8 lg:mt-20">
          Made with Love, Shared with Passion
        </p>
      </div>

      <div ref={heroButtonRef} className="flex justify-center">
        <button className="hero-btn">shop now</button>
      </div>
    </div>
  );
};

export default Hero;
