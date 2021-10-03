import BlogCard from '../BlogCard';
import Skeleton from 'react-loading-skeleton';

const List = ({ blogs, edit, page }) => {
  if (!blogs.length) {
    return (
      <div className="w-278 mt-8 mb-32 grid grid-cols-3 gap-y-24 gap-x-8">
        {[...Array(9)].map((e, i) => (
          <Skeleton height="18rem" />
        ))}
      </div>
    );
  }

  const end = page * 9;
  const begin = end - 9;
  const currentBlogs = blogs.slice(begin, end);

  return (
    <div className="w-278 mt-8 mb-32 grid grid-cols-3 gap-y-24 gap-x-8">
      {currentBlogs.map((blog, index) => {
        return (
          <BlogCard
            bg={index + 1}
            blog={blog}
            edit={edit}
            key={blog._id}
          />
        );
      })}
    </div>
  );
};

export default List;
