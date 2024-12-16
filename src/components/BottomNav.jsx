import React from 'react'
import { CiHome } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { TbMessage2 } from "react-icons/tb";
import { IoSunnyOutline } from "react-icons/io5";
import { FaRegMoon } from "react-icons/fa";

const BottomNav = ({ toggleDarkMode, darkMode }) => {
    return (
        <div className='fixed bottom-0 w-full p-2 list-none bg-white/60 dark:bg-black/60 dark:text-white backdrop-blur-md flex justify-around items-center lg:hidden'>
            <li className='rounded-full py-1 px-2 transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-900'>
                <a href="#" className='flex items-center justify-start gap-2  hover:text-blue-500 '><CiHome /> Home</a>
            </li>
            <li className='rounded-full py-1 px-2 transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-900'>
                <a href="#" className='flex items-center justify-start gap-2  hover:text-blue-500 '><CiSearch /> Explore</a>
            </li>
            <li className='rounded-full py-1 px-2 transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-900'>
                <a href="#" className='flex items-center justify-start gap-2  hover:text-blue-500 '><TbMessage2 /> Message</a>
            </li>
            <li  className='rounded-full py-1 px-2 transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-900'>
                <button onClick={toggleDarkMode} className='flex items-center justify-start gap-2 hover:text-blue-500'>
                    {darkMode ? <IoSunnyOutline /> : <FaRegMoon />}
                    {darkMode ? "LightMode" : "DarkMode"}
                </button>
            </li>
        </div>
    )
}

export default BottomNav