import FeatureCard from './FeatureCard'
import FeatureImg1 from '../assets/White ceramic vase lot photo.jpg'
import FeatureImg2 from '../assets/white ceramic.jpg'
import FeatureImg3 from '../assets/White ceramic vase photo.jpg'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
    const featureRef = useRef(null);

    useEffect(() => {
        
        gsap.fromTo(featureRef.current.children, {
            opacity: 0,
            y: 100,
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            stagger: 0.5,
            scrollTrigger: {
                trigger: featureRef.current.children,
                start: "top bottom",
                end: "bottom top",
                toggleActions: "play none none reverse"
            }
        });
    }, []);

  return (
    <div ref={featureRef} className='w-full  flex flex-col gap-11 pb-11 lg:py-[100px] lg:px-[100px] md:px-[50px]  bg-darkGrey '>
        <h2 className='grotesk text-3xl  my-[50px] ml-4 md:ml-0  md:text-4xl  '>Features</h2>
        <FeatureCard Img={FeatureImg1} order1={1} order2={2} />
        <FeatureCard Img={FeatureImg2} order1={2} order2={1} />
        <FeatureCard Img={FeatureImg3} order1={1} order2={2} />
    </div>
  )
}

export default Features