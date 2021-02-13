import React from 'react'
import WideCard from './WideCard'
import BlogCard from './BlogCard'
import PictureCard from './PictureCard'
import Author from './Author'
import TextField from '../../components/TextField'

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
            <div className='flex w-full'>
                <PictureCard bg={1} />
                <PictureCard bg={2} />
                <PictureCard bg={3} />
                <PictureCard bg={4} />
            </div>
            <div className='w-full bg-blue-500 flex flex-col items-center mb-32 pb-32'>
                <h2 className='font-bold text-2xl text-white my-24'>About Your Author</h2>
                <Author />
            </div>
            <div className='flex w-278'>
                <div>
                    <h2 className='text-2xl font-bold'>Stay Tuned to The Latest Articles</h2>
                    <p className='text-bluegray-500 text-sm'>Subscribe to our newsletter to hear when the latest articles are posted and stay up to date.</p>
                </div>
                <div className='flex items-start'>
                    <TextField placeholderText='Email Address' btnText='Subscribe' />
                </div>
            </div>
        </div>

    );
}

export default MainCard;