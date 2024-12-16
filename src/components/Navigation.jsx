import React from 'react'
import { CiHome } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { CiSaveDown2 } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { IoSunnyOutline } from "react-icons/io5";
import { FaRegMoon } from "react-icons/fa";

const Navigation = ({ toggleDarkMode, darkMode }) => {
    return (
        <div className='sticky hidden lg:flex items-start justify-end flex-1 dark:bg-black dark:text-white'>
            <ul className='sticky top-10 flex flex-col w-5/6 border dark:bg-black bg-white p-5 rounded-2xl '>
                <li className='rounded-full p-3 transition-colors duration-200 hover:bg-gray-200 hover:dark:bg-gray-800'>
                    <a href="#" className='flex items-center justify-start gap-2 text-xl hover:text-blue-500 '><CiHome /> Home</a>
                </li>
                <li className='rounded-full p-3 transition-colors duration-200 hover:bg-gray-200 hover:dark:bg-gray-800'>
                    <a href="#" className='flex items-center justify-start gap-2 text-xl hover:text-blue-500 '><CiSearch /> Explore</a>
                </li>
                <li className='rounded-full p-3 transition-colors duration-200 hover:bg-gray-200 hover:dark:bg-gray-800'>
                    <a href="#" className='flex items-center justify-start gap-2 text-xl hover:text-blue-500 '><FaRegUserCircle /> Your Profile</a>
                </li>
                <li className='rounded-full p-3 transition-colors duration-200 hover:bg-gray-200 hover:dark:bg-gray-800'>
                    <a href="#" className='flex items-center justify-start gap-2 text-xl hover:text-blue-500 '><MdGroups /> Groups</a>
                </li>
                <li className='rounded-full p-3 transition-colors duration-200 hover:bg-gray-200 hover:dark:bg-gray-800'>
                    <a href="#" className='flex items-center justify-start gap-2 text-xl hover:text-blue-500 '><IoIosNotificationsOutline /> Notifications</a>
                </li>
                <li className='rounded-full p-3 transition-colors duration-200 hover:bg-gray-200 hover:dark:bg-gray-800'>
                    <a href="#" className='flex items-center justify-start gap-2 text-xl hover:text-blue-500 '><CiSaveDown2 /> Saved</a>
                </li>
                <li className='rounded-full p-3 transition-colors duration-200 hover:bg-gray-200 hover:dark:bg-gray-800'>
                    <a href="#" className='flex items-center justify-start gap-2 text-xl hover:text-blue-500 '><IoSettingsOutline /> Settings</a>
                </li>
                <li className='rounded-full p-3 transition-colors duration-200 hover:bg-gray-200 hover:dark:bg-gray-800'>
                    <button onClick={toggleDarkMode} className='flex items-center justify-start gap-2 text-xl hover:text-blue-500'>
                        {darkMode ? <IoSunnyOutline /> : <FaRegMoon />}
                        {darkMode ? "LightMode" : "DarkMode"}
                    </button>
                </li>

                <li className='rounded-full p-3 transition-colors duration-200 hover:bg-gray-200 hover:dark:bg-gray-800'>
                    <a href="#" className='flex items-center justify-start gap-2 text-xl hover:text-blue-500 '><CiLogout /> Logout</a>
                </li>
            </ul>
        </div>
    )
}

export default Navigation