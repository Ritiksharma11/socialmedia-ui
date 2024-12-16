import React from 'react'

const Friends = () => {
    return (
        <div className='sticky hidden lg:flex items-start justify-start flex-1 dark:bg-black dark:text-white'>
            <div className='sticky top-10 flex flex-col gap-5 p-5 rounded-3xl border text-center bg-white dark:bg-black w-full md:w-11/12'>
                <h3 className='text-3xl font-semibold'>Friends</h3>
                <ul className='flex flex-col gap-5 w-full'>
                    <div className='flex justify-between border p-2 rounded-xl bg-gray-50 dark:bg-black dark:text-white duration-200 hover:bg-gray-100 '>
                        <div className='flex gap-3 items-center text-lg font-semibold'>
                            <span className='h-10 w-10 rounded-[50%] bg-red-500'></span> John
                        </div>
                        <button className='py-1 px-2 bg-blue-600 hover:bg-blue-500 duration-200 text-white rounded-full '>Message</button>
                    </div>

                    <div className='flex justify-between border p-2 rounded-xl bg-gray-50 dark:bg-black dark:text-white duration-200 hover:bg-gray-100 '>
                        <div className='flex gap-3 items-center text-lg font-semibold'>
                            <span className='h-10 w-10 rounded-[50%] bg-orange-500'></span> Doe
                        </div>
                        <button className='py-1 px-2 bg-blue-600 hover:bg-blue-500 duration-200 text-white rounded-full '>Message</button>
                    </div>

                    <div className='flex justify-between border p-2 rounded-xl bg-gray-50 dark:bg-black dark:text-white duration-200 hover:bg-gray-100 '>
                        <div className='flex gap-3 items-center text-lg font-semibold'>
                            <span className='h-10 w-10 rounded-[50%] bg-sky-500'></span> Emily
                        </div>
                        <button className='py-1 px-2 bg-blue-600 hover:bg-blue-500 duration-200 text-white rounded-full '>Message</button>
                    </div>

                    <div className='flex justify-between border p-2 rounded-xl bg-gray-50 dark:bg-black dark:text-white duration-200 hover:bg-gray-100 '>
                        <div className='flex gap-3 items-center text-lg font-semibold'>
                            <span className='h-10 w-10 rounded-[50%] bg-green-500'></span> Rose
                        </div>
                        <button className='py-1 px-2 bg-blue-600 hover:bg-blue-500 duration-200 text-white rounded-full '>Message</button>
                    </div>

                    <div className='flex justify-between border p-2 rounded-xl bg-gray-50 dark:bg-black dark:text-white duration-200 hover:bg-gray-100 '>
                        <div className='flex gap-3 items-center text-lg font-semibold'>
                            <span className='h-10 w-10 rounded-[50%] bg-pink-500'></span> Jason
                        </div>
                        <button className='py-1 px-2 bg-blue-600 hover:bg-blue-500 duration-200 text-white rounded-full '>Message</button>
                    </div>

                </ul>
            </div>
        </div>
    )
}

export default Friends