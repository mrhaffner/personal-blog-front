import React from 'react'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

const MainCard = ({ article }) => {
    return (
        <div className='mx-8 -mt-20 bg-white shadow-custom rounded-2xl text-gray-700 flex flex-col items-center'>
            <div className='w-184 flex flex-col mt-16'>
                <ReactMarkdown className='markdown' plugins={[[gfm, {singleTilde: false}]]}>{article}</ReactMarkdown>
                <div className='flex items-center space-x-6 border-t py-4 mt-12 mb-20'>
                    <div className='bg-author bg-center bg-cover w-24 h-24 rounded-full shadow-custom'></div>
                    <div>
                        <h3 className='text-l font-semibold'>Matt Haffner</h3>
                        <p className='text-bluegray-500 w-128'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default MainCard;