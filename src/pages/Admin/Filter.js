import React from 'react'
import TextField from '../../components/TextField'

const Filter = () => {
    const classActive = `px-5 py-1 bg-blue-500 rounded-full text-white font-bold text-l tracking-wide`
    const classInactive = `font-bold text-l tracking-wide`
    const handleClick = (e) => {
        if (e.target.className === classInactive) {
            e.target.className = classActive
        } else {
            e.target.className = classInactive
        }
        console.log(e.target.innerHTML)
    }
    return (
        <div className='w-full'>
            <nav className='flex justify-between'>
                <div className='pt-10 font-bold text-l tracking-wide space-x-2.5 '>
                    <button className={classActive} onClick={(e) => handleClick(e)}>All</button>
                    <button className={classInactive} onClick={(e) => handleClick(e)}>Published</button>
                    <button className={classInactive} onClick={(e) => handleClick(e)}>Unpublished</button>
                </div>
                <div>
                    <TextField placeholderText='Search Articles...' btnText='Search'/>
                </div>
            </nav>
        </div>
    );
}

export default Filter;