import React from 'react'
import WideCard from './WideCard'
import BlogCard from './BlogCard'

const MainCard = () => {
    return (
        <div className='mx-5 -mt-20 bg-white shadow-2xl rounded-2xl flex justify-center'>
            <div className='w-3/5 flex flex-col items-center'>
                <WideCard />
                <div className='flex justify-between w-full'>
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                </div>
            </div>
        </div>

    );
}

export default MainCard;