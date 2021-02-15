import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => (
    <nav className='flex justify-center'>
        <ul className='flex justify-between pt-10 w-278 font-bold text-l tracking-wide'>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/blog-post'>Matt's Page (temp BlogPost)</Link>
            </li>
        </ul>
    </nav>
);

export default Nav;