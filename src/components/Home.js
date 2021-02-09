import React from 'react'
import BlogPreview from './BlogPreview'
import blogs from '../blogs'

const Home = () => {
    const colors = ['bg-green-700', 'bg-green-400', 'bg-pink-700', 'bg-pink-400', 'bg-blue-700', 'bg-blue-400']
    // let i = 0
    return (
        <div className='h-full w-full'>
            {  
                blogs.map((blog, i) => {
                    // if (i >= colors.length) i = 0
                    // i++
                    let classes = `${colors[i % colors.length]} h-52`
                    return (
                        <div className={classes}  key={blog.title}>
                            <BlogPreview blog={blog}/>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Home;