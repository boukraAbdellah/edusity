import logo from '../assets/logo.png';
import menu_icon from '../assets/menu-icon.png';
import {useState, useEffect} from 'react';

const Navbar = () => {
  const [sticky, setSticky] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setSticky(true)
      } else {
        setSticky(false)
      }
    })
  }
)


  const [mobileMenu, setMobileMenu] = useState(false)

  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }

  return (
    <>
      <nav
        className={` py-3 ${
          sticky ? "bg-[#212ea0] transition" : "bg-transparent"
        }  text-white flex font-outfit items-center justify-between container_2 z-10 fixed w-full`}
      >
        <img src={logo} alt="logo" className=" w-44" />
        <ul className="hidden md:flex gap-4 lg:gap-8 text-lg items-center">
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#programs">Programs</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#gallery">Campus</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li className=" cursor-pointer bg-white py-3 px-6 rounded-full text-black">
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
        {/* mobile view */}

        <img
          src={menu_icon}
          alt="menu icon"
          className="block md:hidden cursor-pointer w-6"
          onClick={toggleMenu}
        />
        <ul
          className={`${
            mobileMenu ? "flex" : "hidden"
          } bg-[#212ea0] text-white  -z-10 pt-20 pb-10 fixed px-10 flex-col top-0 right-0 bottom-0 gap-6  text-lg items-start`}
        >
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#programs">Programs</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#gallery">Campus</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li className=" cursor-pointer bg-white py-3 px-6 rounded-full text-black">
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar