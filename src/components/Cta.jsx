import CtaImg from '../assets/cta.png'

const Cta = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center md:h-screen  gap-6 py-11 md:gap-[100px] ' style={{backgroundImage: `url(${CtaImg})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <h1 className='playfair text-[60px] md:text-[100px] lg:text-[170px] text-center'>Ready to craft</h1>
        <button className='grotesk   bg-darkGrey rounded-full py-2 px-4 hover:bg-offWhite hover:text-darkGrey transition-all ease-in-out duration-500 md:text-2xl md:py-4 md:px-8 lg'>Get Started</button>
    </div>
  )
}

export default Cta