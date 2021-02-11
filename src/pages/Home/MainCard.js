import React from 'react'
import WideCard from './WideCard'
import BlogCard from './BlogCard'
import PictureCard from './PictureCard'

const MainCard = () => {
    return (
        <div className='mx-5 -mt-20 bg-white shadow-2xl rounded-2xl flex flex-col items-center'>
            <div className='w-3/5 flex flex-col items-center mt-20'>
                <WideCard />
                <div className='flex justify-between w-full my-20'>
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                </div>
            </div>
            <div className='flex w-full mb-20'>
                <PictureCard />
                <PictureCard />
                <PictureCard />
                <PictureCard />
            </div>
        </div>

    );
}

export default MainCard;