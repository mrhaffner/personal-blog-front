import React, { useState } from 'react'
import MDEditor from '@uiw/react-md-editor';

const Form = () => {
    const [titleText, setTitleText] = useState('')
    const [subTitleText, setSubTitleText] = useState('')
    const [articleBody, setArticleBody] = useState('## Use Markdown here!')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(titleText)
        console.log(subTitleText)
        console.log(articleBody)

        setTitleText('')
        setSubTitleText('')
        setArticleBody('')

    }

    return (
        <form onSubmit={(e) => handleSubmit(e)} className='self-start w-full space-y-7 my-16'>
            <div className='space-y-1'>
                <label htmlFor="Title">Title</label>
                <input type='text' onChange={(e) => setTitleText(e.target.value)} placeholder='something amazing...' className='border-b-2 pr-12 block ' />
            </div>
            <div className='space-y-1'>
                <label htmlFor="Sub Title">Sub Title</label>
                <input type='text' onChange={(e) => setSubTitleText(e.target.value)} placeholder='not too long now...' className='border-b-2 pr-12 block' />
            </div>
            <div className='space-y-3'>
                <label htmlFor="Article Body">Article Body</label>
                <MDEditor
                    value={articleBody}
                    onChange={setArticleBody}

                />
            </div>
            <button type='submit' className='px-5 py-2 bg-blue-500 rounded-full tracking-wide uppercase text-white'>Save</button>
        </form>
    );
}

export default Form;