import { useState } from 'react';
import { useLocation } from 'react-router';
import BlogSuggest from '../BlogSuggest';
import List from './List';
import PageTurn from './PageTurn';

const BlogList = ({ blogs, edit, textFilter }) => {
  const [page, setPage] = useState(1);
  // this needs to change to handle arrays shorter than 9 - might be easy to map if using flex grid instead of all the flex box divs
  // might need to set a fixed height for the card if less than 9 blogs are given
  let location = useLocation();

  const pageCount =
    blogs.length % 9 === 0
      ? blogs.length / 9
      : Math.floor(blogs.length / 9) + 1;

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
    //keep size of card consistent with less than 7 search results?

    return (
      <div className="w-278 mt-16 mb-16 grid grid-cols-3 gap-y-32 gap-x-8">
        <List blogs={filteredBlogs} edit={edit} page={page} />
        <PageTurn
          page={page}
          setPage={setPage}
          pageCount={blogs.length}
        />
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

  return (
    <div className="mb-20">
      <div className="w-278 mt-16 mb-16 grid grid-cols-3 gap-y-32 gap-x-8">
        <List blogs={blogs} edit={edit} page={page} />
      </div>
      <PageTurn page={page} setPage={setPage} pageCount={pageCount} />
    </div>
  );
};

export default BlogList;
