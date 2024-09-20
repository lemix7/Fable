import ShoppingCart from '../assets/Shopping Cart Icon.svg'
import UserIcon from '../assets/Person Icon (1).svg'
import MenuIcon from '../assets/Menu Icon (1).svg'
import { useState , useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const NavBar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const navRef = useRef(null)

    useGSAP(() => {
        if (isMenuOpen) {
            gsap.to(navRef.current, {
                duration: 0.5,
                ease: "power2.out",
                x: 0,
            });
        } else {
            gsap.to(navRef.current, {
                duration: 0.5,
                ease: "power2.in",
                x: 500,
            });
        }
    }, [isMenuOpen]);

    

  return (
    <nav className='flex justify-between  items-center pt-4  '>

        <h3 className='playfair text-3xl md:text-4xl'>Fable</h3>

        <div className='nav-container'>
            <a className='nav-links' href="#">home</a>
            <a className='nav-links' href="#">shop</a>
            <a className='nav-links' href="#">about</a>
            <a className='nav-links' href="#">contact</a>
        </div>

        <div className=' gap-4 hidden lg:flex'>
            <img src={UserIcon} alt="user" className='cursor-pointer' />
            <img src={ShoppingCart} alt="person" className='cursor-pointer' />
        </div>

        <button className='lg:hidden cursor-pointer'><img src={MenuIcon} alt="menu" onClick={toggleMenu} /></button>

        

          <div className='absolute lg:hidden top-0 right-0 w-[60%] h-screen bg-darkGrey flex flex-col translate-x-[500px] md:translate-x-[900px]   pt-4 ' ref={navRef}>

            <button className='self-end  mr-[50px] mt-6 text-2xl md:text-3xl' onClick={toggleMenu}>X</button>

            <div className='grotesk text-3xl md:text-4xl capitalize flex flex-col text-offWhite gap-8 mt-12 ml-8 '>
                <a href="#">home</a>
                <a href="#">shop</a>
                <a href="#">about</a>
                <a href="#">contact</a>
            </div>

            <div className=' gap-6 flex ml-8  mt-12'>
            <img src={UserIcon} alt="user" className='cursor-pointer' />
            <img src={ShoppingCart} alt="person" className='cursor-pointer' />
        </div>

          </div>

          
        

    </nav>
  )
}

export default NavBar