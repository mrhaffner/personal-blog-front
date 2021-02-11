import React from 'react'

const HomeCard = () => {
  
    return (
        <div className='mx-5 -mt-20 bg-white shadow-2xl rounded-2xl h-96 flex justify-center'>
            <div className='w-1/2 bg-w-img-card bg-center bg-cover h-72 text-white rounded-lg mt-20 flex justify-center items-center'>
                <div className='w-1/3 text-center'>
                    <h3 className='text-xl font-semibold mb-4'>Title of muh blog post</h3>
                    <p className='text-bluegray-300 mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
                    <button className='px-3 py-2 bg-green-500 rounded-xl tracking-wide'>READ POST</button>
                </div>
            </div>
        </div>

    );
}

export default HomeCard;