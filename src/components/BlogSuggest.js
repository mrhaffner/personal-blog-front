import PreviewCard from './PreviewCard';
import Skeleton from 'react-loading-skeleton';

const BlogSuggest = ({ blogs }) => {
  blogs.sort(() => Math.random() - 0.5);
  return (
    <div className="flex justify-between w-full">
      {blogs.length ? (
        <PreviewCard bg={1} blog={blogs[0]} />
      ) : (
        <Skeleton height="26rem" width="22rem" />
      )}
      {blogs.length ? (
        <PreviewCard bg={2} blog={blogs[1]} />
      ) : (
        <Skeleton height="26rem" width="22rem" />
      )}
      {blogs.length ? (
        <PreviewCard bg={3} blog={blogs[2]} />
      ) : (
        <Skeleton height="26rem" width="22rem" />
      )}
    </div>
  );
};

export default BlogSuggest;
