import React from 'react'
import Nav from '../../components/Nav'

const Header = () => {
    return (
        <div className='bg-fixed bg-hero-pattern h-hero text-white'>
            <Nav />
            <div className='flex justify-center pt-72'>
                <h1 className='font-bold text-4xl'>Welcome to The Blog</h1>
            </div>
            
        </div>
    );
}

export default Header;