import { useLocation } from 'react-router';
import BlogSuggest from '../BlogSuggest';
import List from './List';
import PageTurn from './PageTurn';

const BlogList = ({
  blogs,
  edit,
  textFilter,
  heightRef,
  page,
  setPage,
}) => {
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
    const filteredPageCount =
      filteredBlogs.length % 9 === 0
        ? filteredBlogs.length / 9
        : Math.floor(filteredBlogs.length / 9) + 1;
    return (
      <div className="mb-20">
        <div className="w-278 mt-16 mb-16 grid grid-cols-3 gap-y-32 gap-x-8">
          <List blogs={filteredBlogs} edit={edit} page={page} />
        </div>
        <PageTurn
          page={page}
          setPage={setPage}
          pageCount={filteredPageCount}
          yPos={heightRef.current?.offsetTop - 100}
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

  return (
    <div className="mb-20">
      <div className="w-278 mt-16 mb-16 grid grid-cols-3 gap-y-32 gap-x-8">
        <List blogs={blogs} edit={edit} page={page} />
      </div>
      <PageTurn
        page={page}
        setPage={setPage}
        pageCount={pageCount}
        yPos={heightRef.current?.offsetTop - 100}
      />
    </div>
  );
};

export default BlogList;
