import React from 'react'
import MainCard from './MainCard'
import Header from './Header'
import Footer from './Footer'
import markdown from '../../markdown'

const BlogPost = () => {
  
    return (
        <div className='bg-lightblue-50 h-full pb-16'>
            <Header title='Man This Is a Really Great Title' subTitle='Lorem ipsum something something in latin' />
            <MainCard article={markdown} />
            <Footer />
        </div>
    );
}

export default BlogPost;