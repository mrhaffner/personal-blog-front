import PreviewCard from './PreviewCard';

const BlogSuggest = ({ blogs }) => {
  blogs.sort(() => Math.random() - 0.5);
  return (
    //random blogs
    <div className="flex justify-between w-full">
      <PreviewCard bg={1} blog={blogs[0]} />
      <PreviewCard bg={2} blog={blogs[1]} />
      <PreviewCard bg={3} blog={blogs[2]} />
    </div>
  );
};

export default BlogSuggest;
