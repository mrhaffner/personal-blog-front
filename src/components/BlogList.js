import React from 'react';
import { useLocation } from 'react-router';
import BlogCard from './BlogCard';
import BlogSuggest from './BlogSuggest';

const BlogList = ({ blogs, edit, textFilter }) => {
  // this needs to change to handle arrays shorter than 9 - might be easy to map if using flex grid instead of all the flex box divs
  // might need to set a fixed height for the card if less than 9 blogs are given
  let location = useLocation();
  console.log(location);

  if (textFilter !== '') {
    const filteredBlogs = blogs.filter((blog) =>
      blog.title.toLowerCase().includes(textFilter.toLowerCase()),
    );

    if (!filteredBlogs.length) {
      return (
        <>
          <h3 className="text-bluegray-500 text-xl mt-36 mb-72">
            Sorry, no posts matched your search...
          </h3>
          {location.pathname !== '/admin' && (
            <div className="w-278 mb-20">
              <h5 className="text-xl font-semibold mb-20 text-center">
                You May Enjoy
              </h5>
              <BlogSuggest blogs={blogs} />
            </div>
          )}
        </>
      );
    }
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

  if (!blogs.length) {
    return (
      <>
        <h3 className="text-bluegray-500 text-xl mt-36 mb-72">
          Nothing to display...
        </h3>
      </>
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
