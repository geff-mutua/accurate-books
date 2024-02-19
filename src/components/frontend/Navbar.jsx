import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll';
import Button from './shared/Button';
import { LuSearch } from "react-icons/lu";
import { FaXmark } from "react-icons/fa6";
import { HiBars3 } from "react-icons/hi2";

const Navbar = () => {

    const menu = [
        { name: "Home", link: "home" },
        { name: "Plans", link: "plans" },
        { name: "About", link: "about" },
        { name: "Features", link: "features" },
        { name: "Support", link: "support" }
    ];

    const [isMenuOpen, setisMenuOpen] = useState(false);

    const toggleMenu = () => {
        setisMenuOpen((isMenuOpen) => !isMenuOpen);
    }


    return (
        <>

            <div className='bg-white border-b max-w-screen-2xl px-4 md:px-14 container mx-auto flex flex-row py-3 justify-between items-center fixed top-0 left-0 right-0 z-40'>

                <div className='w-1/5'>
                    <img src={logo} alt="" className='w-[100px]' />
                </div>

                <div className='flex justify-between w-4/5 items-center '>
                    <div>
                        {/* Render the menus here */}
                        <ul className='hidden md:flex space-x-12'>
                            {
                                menu.map((item, index) => <Link spy={true} smooth={true} offset={-100} className='text-lg text-[#475467] cursor-pointer hover:text-secondary' key={index} to={item.link}>{item.name}</Link>)
                            }
                        </ul>
                    </div>
                    <div className='hidden md:flex items-center gap-10'>
                        <LuSearch />
                        <Button text={'Login'} styles={`border hover:bg-secondary hover:text-white`} />
                        <Button text={'Register'} styles={`bg-primary text-white hover:bg-white hover:text-primary hover:border`} />
                    </div>
                </div>

                <div className='md:hidden'>
                    <button onClick={toggleMenu} className='text-white focus:outline-none focus:text-gray-300'>
                        {
                            isMenuOpen ? (<FaXmark className='w-6 h-6 text-primary' />) : (<HiBars3 className='w-6 h-6 text-primary' />)
                        }
                    </button>
                </div>

            </div>

            <div className={`md:hidden space-y-4 px-4 pt-24 pb-5 text-white bg-secondary ${isMenuOpen ? "block fixed top-0 left-0 right-0" : "hidden"}`}>
                {menu.map((nav) => <Link spy={true} smooth={true} offset={-100} key={nav.link} to={nav.link} className='block hover:text-gray-300 text-lg cursor-pointer'
                    onClick={() => toggleMenu()}
                >{nav.name}</Link>)}
            </div>
        </>
    )
}

export default Navbar