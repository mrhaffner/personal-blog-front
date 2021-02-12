import React from 'react'
import WideCard from './WideCard'
import BlogCard from './BlogCard'
import PictureCard from './PictureCard'
import Author from './Author'

const MainCard = () => {
    return (
        <div className='mx-5 -mt-20 bg-white shadow-custom rounded-2xl flex flex-col items-center text-gray-700'>
            <div className='w-278 flex flex-col items-center mt-20'>
                <WideCard />
                <div className='flex justify-between w-full my-32'>
                    <BlogCard bg={1} />
                    <BlogCard bg={2} />
                    <BlogCard bg={3} />
                </div>
            </div>
            <div className='flex w-full mb-32'>
                <PictureCard bg={1} />
                <PictureCard bg={2} />
                <PictureCard bg={3} />
                <PictureCard bg={4} />
            </div>
            <div className='mb-32'>
                <Author />
            </div>
        </div>

    );
}

export default MainCard;