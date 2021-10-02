import MainCard from './MainCard';
import NavHeader from '../../components/NavHeader';

const NewPost = ({ toast }) => {
  return (
    <div className="bg-lightblue-50 h-full pb-16">
      <NavHeader />
      <MainCard toast={toast} />
    </div>
  );
};

export default NewPost;
