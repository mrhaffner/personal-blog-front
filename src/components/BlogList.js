import React from 'react';
import BlogCard from './BlogCard';

const BlogList = ({ blogs, edit, textFilter }) => {
  // this needs to change to handle arrays shorter than 9 - might be easy to map if using flex grid instead of all the flex box divs
  // might need to set a fixed height for the card if less than 9 blogs are given

  // return (
  //   <div className="w-278">
  //     <div className="flex justify-between w-full mt-16">
  //       <BlogCard bg={1} blog={blogs[0]} edit={edit} />
  //       <BlogCard bg={2} blog={blogs[1]} edit={edit} />
  //       <BlogCard bg={3} blog={blogs[2]} edit={edit} />
  //     </div>
  //     <div className="flex justify-between w-full mt-32">
  //       <BlogCard bg={1} blog={blogs[3]} edit={edit} />
  //       <BlogCard bg={2} blog={blogs[4]} edit={edit} />
  //       <BlogCard bg={3} blog={blogs[5]} edit={edit} />
  //     </div>
  //     <div className="flex justify-between w-full my-32">
  //       <BlogCard bg={1} blog={blogs[6]} edit={edit} />
  //       <BlogCard bg={2} blog={blogs[7]} edit={edit} />
  //       <BlogCard bg={3} blog={blogs[8]} edit={edit} />
  //     </div>
  //   </div>
  // );

  if (textFilter !== '') {
    const filteredBlogs = blogs.filter((blog) =>
      blog.title.toLowerCase().includes(textFilter.toLowerCase()),
    );

    //add message that nothing was found?
    //keep size of card consistent with less than 7 search results?
    //PAGINATION

    return (
      <div className="w-278 mt-16 mb-32 grid grid-cols-3 gap-y-32 gap-x-8">
        {filteredBlogs.map((blog) => {
          return (
            <BlogCard bg={1} blog={blog} edit={edit} key={blog._id} />
          );
        })}
      </div>
    );
  }

  //keep size of card consistent with less than 7 search results?
  //PAGINATION
  return (
    <div className="w-278 mt-16 mb-32 grid grid-cols-3 gap-y-32 gap-x-8">
      {blogs.map((blog) => {
        return (
          <BlogCard bg={1} blog={blog} edit={edit} key={blog._id} />
        );
      })}
    </div>
  );
};

export default BlogList;
