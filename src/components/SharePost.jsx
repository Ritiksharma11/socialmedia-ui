import React from 'react'
import { FaUsers } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { MdMood } from "react-icons/md";
import photo from '../../public/photo.jpg'

const SharePost = () => {
  return (
    <div className='sticky top-0 flex flex-col w-full gap-3 rounded-bl-2xl rounded-br-2xl bg-white/60 backdrop-blur-md border-b border-l border-r p-3 dark:bg-black dark:text-white'>
      <div className='flex gap-5'>
        <img src={photo} alt="photo" className='w-20 cursor-pointer rounded-full border-2 transition-all duration-200 hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl ' />
        <textarea placeholder='What is on your mind?'
          className='w-full rounded-2xl resize-none border p-3 shadow-md outline-none ring-transparent transition-all duration-200 dark:bg-black hover:bg-gray-50 focus:-translate-y-1 focus:bg-gray-100 focus:shadow-xl focus:ring-2 focus:ring-blue-500 '
        ></textarea>
      </div>

      <div className='flex flex-wrap items-center justify-between'>
        <div className='flex flex-wrap items-center justify-start gap-3'>
          <div className='flex items-center gap-2 cursor-pointer p-2 rounded-xl transition-all duration-200 hover:bg-blue-500 hover:text-white '>
            <FaUsers />
            People
          </div>

          <div className='flex items-center gap-1 cursor-pointer p-2 rounded-xl transition-all duration-200 hover:bg-blue-500 hover:text-white '>
            <CiLocationOn />
            Location
          </div>

          <div className='flex items-center gap-1 cursor-pointer p-2 rounded-xl transition-all duration-200 hover:bg-blue-500 hover:text-white '>
            <MdMood />
            Mood
          </div>

        </div>
        <button className='rounded-3xl bg-blue-500 px-5 py-2 text-white transition-all duration-200 hover:bg-blue-600 focus:bg-blue-400 '>Share</button>
      </div>
    </div>
  )
}

export default SharePost