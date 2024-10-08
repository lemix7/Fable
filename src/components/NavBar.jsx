import ShoppingCart from "../assets/Shopping Cart Icon.svg";
import UserIcon from "../assets/Person Icon (1).svg";
import MenuIcon from "../assets/Menu Icon (1).svg";
import { useState, useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Headroom from "react-headroom";
const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navColor, setNavColor] = useState("transparent");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const changeNavColor = () => {
    if (window.scrollY > 0) {
      setNavColor("#282828");
    } else {
      setNavColor("transparent");
    }
  };

  window.addEventListener("scroll", changeNavColor);

  const navRef = useRef(null);

  useGSAP(() => {
    if (isMenuOpen) {
      gsap.to(navRef.current, {
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
        x: 0,
      });
    } else {
      gsap.to(navRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
        x: 500,
      });
    }
  }, [isMenuOpen]);

  return (
    <Headroom
      className=" transition-all duration-500 ease-in-out "
      style={{ padding: "0 30px" ,paddingBottom : "15px" , backgroundColor: navColor }}
    >
      <nav
        className={`   flex justify-between  items-center pt-4  transition-colors duration-500 ease-in-out  `}
        style={{  backgroundColor: navColor }}
      >
        <h3 className="playfair text-3xl md:text-4xl">Fable</h3>

        <div className="nav-container">
          <a className="nav-links" href="#">
            home
          </a>
          <a className="nav-links" href="#">
            shop
          </a>
          <a className="nav-links" href="#">
            about
          </a>
          <a className="nav-links" href="#">
            contact
          </a>
        </div>

        <div className=" gap-4 hidden lg:flex">
          <img src={UserIcon} alt="user" className="cursor-pointer" />
          <img src={ShoppingCart} alt="person" className="cursor-pointer" />
        </div>

        <button className="lg:hidden cursor-pointer">
          <img src={MenuIcon} alt="menu" onClick={toggleMenu} />
        </button>

        <div
          className="absolute lg:hidden top-0 right-0 w-[60%] h-screen bg-darkGrey flex flex-col translate-x-[500px] md:translate-x-[900px] z-20  pt-4 opacity-0 "
          ref={navRef}
        >
          <button
            className="self-end  mr-[50px] mt-6 text-2xl md:text-3xl"
            onClick={toggleMenu}
          >
            X
          </button>

          <div className="grotesk text-3xl md:text-4xl capitalize flex flex-col text-offWhite gap-8 mt-12 ml-8 ">
            <a href="#">home</a>
            <a href="#">shop</a>
            <a href="#">about</a>
            <a href="#">contact</a>
          </div>

          <div className=" gap-6 flex ml-8  mt-12">
            <img src={UserIcon} alt="user" className="cursor-pointer" />
            <img src={ShoppingCart} alt="person" className="cursor-pointer" />
          </div>
        </div>
      </nav>
    </Headroom>
  );
};

export default NavBar;
