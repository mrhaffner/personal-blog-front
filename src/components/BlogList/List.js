import BlogCard from '../BlogCard';

const List = ({ blogs, edit }) => {
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

export default List;
