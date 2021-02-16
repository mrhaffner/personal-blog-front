import React from 'react'
import { Link } from 'react-router-dom'

const NavHeader = () => (
    <div className='bg-fixed bg-green-700 h-screen text-white'>
        <nav className='flex justify-center'>
            <div className='flex justify-between pt-10 w-278 font-bold text-l tracking-wide'>
                <Link to='/'>+ New Post (Add Link and Icon)</Link>
                <div className='space-x-6'>
                    <Link to='/'>Home</Link>
                    <Link to='/'>Log Out (add link)</Link>
                </div>
            </div>
        </nav>
    </div>

);

export default NavHeader;