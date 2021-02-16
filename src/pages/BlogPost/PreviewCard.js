import React from 'react'

const PreviewCard = ({bg}) => {
    const imgClass = `bg-blog-card${bg} h-72 rounded-t-lg bg-center bg-cover mb-9`
    return (
        <div className='w-88 bg-white rounded-lg shadow-custom'>  
            <div className={imgClass}></div>
            <h3 className='text-xl font-semibold mb-4 px-6'>Title of muh blog post</h3>
            <p className='text-bluegray-500 mb-10 px-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
        </div>
    );
}

export default PreviewCard;