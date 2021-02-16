import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => (
    <nav className='flex justify-center'>
        <div className='flex justify-between pt-10 w-278 font-bold text-l tracking-wide'>
            <Link to='/'>Home</Link>
            <div className='space-x-6'>
                <Link to='/blog-post'>Matt's Page (temp BlogPost)</Link>
                <Link to='/admin'>Admin (temp)</Link>
            </div>

        </div>
    </nav>
);

export default Nav;