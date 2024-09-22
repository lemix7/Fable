import { useRef } from 'react'
import TestiBg from '../assets/testi.jpg'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Testimonials = () => {
    const TestiRef = useRef(null)

    useGSAP(() => {
        gsap.fromTo(TestiRef.current.children, {
            opacity: 0, y: 100, stagger: 0.2, duration: 1
        },
         {
            scrollTrigger:{
                trigger: TestiRef.current,
                start: 'top center',
                end: 'bottom center',
            },
            opacity: 1, y: 0, duration: 1, ease: 'power2.out', stagger: 0.1
        })
    })


    const reviews = [{
        name: 'Noah',
        review: `The custom pottery planters I bought are gorgeous! They add such a rustic charm to my home, and the craftsmanship is outstanding. Worth every penny!`
    },
    {
        name: 'Emily',
        review: `The attention to detail in every piece is remarkable. I purchased a set of plates for my restaurant and they've elevated our presentation tremendously." `
    },
    {
        name: 'Sabrina',
        review : `I commissioned a custom vase for my wedding centerpieces and it exceeded all expectations. Truly a masterpiece that we'll cherish forever."`
    },
    {
        name: 'James',
        review: `Bought a set of custom pottery mugs from this shop, and they’re amazing. Each piece has a unique charm, and they make my morning coffee feel extra special.`
    },
    {
        name: 'Olivia',
        review: `The quality of the pottery here is unmatched. I got a handcrafted vase, and it’s now the centerpiece of my living room. Beautiful, durable, and expertly crafted!`
    },
    {
        name: 'Emily',
        review: `This pottery shop has the most unique designs. I purchased a beautiful handmade plate, and it's become my go-to for serving guests. Such an amazing find!`
    }
    
    
    
]
  return (
    <div className='w-full lg:h-[1000px] md:h-[1500px] h-[1700px] lg:overflow-hidden   flex flex-col py-6 lg:px-[100px] md:px-[50px] px-4' style={{ backgroundImage: `url(${TestiBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} ref={TestiRef}>
    
      <h2 className='grotesk text-offWhite text-2xl capitalize md:text-3xl mt-6 lg:mt-8'>What customers <br /> are saying</h2>

       <div className='flex  flex-col lg:flex-row justify-center items-center mt-[90px] flex-wrap gap-11 pb-11'>

        {reviews.map((review, index) => (
             <div key={index} className='w-full lg:w-[40%] lg:py-10 py-6  bg-white rounded-xl px-5 flex flex-col justify-center gap-8'>
             <p className='grotesk text-darkGrey'>{review.review}</p>
             <h4 className='grotesk text-darkGrey text-xl'>{review.name}</h4>
         </div>
        ))}

        

       </div>

    </div>
  )
}

export default Testimonials