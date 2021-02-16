import React from 'react'
import BlogCard from '../../components/BlogCard'
import Filter from './Filter'

const MainCard = () => {
    return (
        <div className='mx-8 mt-admin bg-white shadow-custom rounded-2xl flex flex-col items-center text-gray-700'>
            <div className='w-278 flex flex-col items-center mt-12'>
                <div className='w-full'>
                    <Filter />
                </div>
                <div className='flex justify-between w-full mt-16'>
                    <BlogCard bg={1} />
                    <BlogCard bg={2} />
                    <BlogCard bg={3} />
                </div>
                <div className='flex justify-between w-full mt-32'>
                    <BlogCard bg={1} />
                    <BlogCard bg={2} />
                    <BlogCard bg={3} />
                </div>
                <div className='flex justify-between w-full mt-32'>
                    <BlogCard bg={1} />
                    <BlogCard bg={2} />
                    <BlogCard bg={3} />
                </div>
            </div>
        </div>

    );
}

export default MainCard;