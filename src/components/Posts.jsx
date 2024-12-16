import React from 'react'
import photo from '../../public/photo.jpg'
import photo1 from '../../public/photo2.jpg'
import { AiOutlineLike } from "react-icons/ai";
import { FaRegCommentAlt } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import { BsThreeDots } from "react-icons/bs";

const Posts = () => {
  return (
    <div className='flex flex-col p-5 gap-4 bg-white border w-full rounded-2xl dark:bg-black dark:text-white '>
      <div className='flex gap-3 justify-between'>
        <div className='flex items-center gap-3'>
          <img src={photo} alt="photo" className='w-10 rounded-full ' />
          <div className='flex flex-col'>
            <h1 className='text-sm'>Ritik shared a photo.</h1>
            <p className='text-sm'>1 hour ago</p>
          </div>
        </div>
        <div>
          <BsThreeDots />
        </div>
      </div>

      <div className='flex flex-col gap-4 '>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia unde optio deserunt atque perferendis nihil excepturi voluptas suscipit, esse deleniti quam, consectetur quidem porro facere.</h1>
        <img src={photo1} alt="photo1" className='w-full cover rounded-xl' />
      </div>

      <div className='flex justify-center gap-8 bg-gray-100 dark:bg-gray-900 rounded-md py-1'>
        <span className='flex items-center gap-1'><AiOutlineLike />102</span>
        <span className='flex items-center gap-1'><FaRegCommentAlt />28</span>
        <span className='flex items-center gap-1'><CiShare2 />11</span>
      </div>
    </div>
  )
}

export default Posts