import React from 'react'

const Header = () => {
    return (
        <div className='bg-fixed bg-hero-pattern h-hero text-white'>
            <nav className='flex justify-center'>
                <ul className='flex justify-between pt-10 w-278 font-bold text-l tracking-wide'>
                    <li>Home</li>
                    <li>Search</li>
                </ul>
            </nav>
            <div className='flex justify-center pt-72'>
                <h1 className='font-bold text-4xl'>Welcome to The Blog</h1>
            </div>
            
        </div>
    );
}

export default Header;