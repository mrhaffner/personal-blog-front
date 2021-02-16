import React, { useState } from 'react'

const TextField = ({ placeholderText, btnText }) => {
    const [inputText, setInputText] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(inputText)
        setInputText('')
    }
    
    return (
        <div className='p-10 flex items-end'>
            <form onSubmit={(e) => handleSubmit(e)} className='space-x-9'>
                <input type='text' onChange={(e) => setInputText(e.target.value)} placeholder={placeholderText} className='border-b-2 pr-12' />
                <button type='submit' className='px-5 py-2 bg-blue-500 rounded-full tracking-wide uppercase text-white'>{btnText}</button>
            </form>
        </div>
    );
}

export default TextField;