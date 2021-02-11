import React from 'react'
import BlogPreview from './BlogPreview'
import HomeCard from './HomeCard'
import Header from './Header'
import blogs from '../blogs'

const Home = () => {
  
    return (
        <div className='bg-lightblue-50 h-full'>
            <Header />
            <HomeCard />
        </div>

    );
}

export default Home;