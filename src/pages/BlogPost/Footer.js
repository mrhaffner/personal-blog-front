import React from 'react'
import BlogCard from './BlogCard'

const Footer = () => {
    return (
        <div className='mx-5 flex flex-col items-center text-gray-700'>
            <div className='w-278 flex flex-col items-center mt-24'>
                <h2 className='font-bold text-3xl mb-20'>For Your Consideration</h2>
                <div className='flex justify-between w-full'>
                    <BlogCard bg={1} />
                    <BlogCard bg={2} />
                    <BlogCard bg={3} />
                </div>
            </div>
        </div>

    );
}

export default Footer;