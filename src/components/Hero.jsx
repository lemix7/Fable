import NavBar from './NavBar'

const Hero = () => {
  return (
    <div className='hero'>

        <NavBar/>

        <div className='flex flex-col  items-center justify-center mt-32'>
            <h1 className='playfair text-8xl md:text-9xl lg:text-[150px] text-center '>Craft your story <br /> with us </h1>
            <p className='grotesk text-xl lg:text-2xl text-center mt-8 lg:mt-20'>Made with Love, Shared with Passion</p>
        </div>

        <div className="flex justify-center">
            <button className='grotesk text-xl md:text-2xl capitalize text-offWhite bg-darkGrey px-8 py-4 rounded-full mt-12 hover:bg-offWhite hover:text-darkGrey transition-all ease-in-out duration-500'>shop now</button>
        </div>

    </div>
  )
}

export default Hero