import React from 'react'
import Form from './Form'

const MainCard = () => {

    return (
        <div className='mx-8 mt-admin bg-white shadow-custom rounded-2xl flex flex-col items-center text-gray-700'>
            <div className='w-278 flex flex-col items-center mt-16'>
                <h1 className='font-bold text-4xl'>Update Your Post</h1>
                <div className='w-184'>
                    <Form />
                </div>
            </div>
        </div>

    );
}

export default MainCard;