import React from 'react';
import TextField from '../../components/TextField';

const classActive = `px-5 py-1 bg-blue-500 rounded-full text-white font-bold text-l tracking-wide focus:outline-none`;
const classInactive = `px-5 py-1 font-bold text-l tracking-wide focus:outline-none`;

const Filter = ({ filter, setFilter, setTextFilter, setPage }) => {
  const handleClick = (e) => {
    setFilter(e.target.name);
    setTextFilter('');
    setPage(1);
  };

  const submitFn = (inputText) => {
    setTextFilter(inputText);
    inputText !== '' && setFilter('');
    setPage(1);
  };

  return (
    <div className="w-full">
      <nav className="flex justify-between">
        <div className="pt-10 font-bold text-l tracking-wide">
          <button
            className={filter === 'All' ? classActive : classInactive}
            onClick={(e) => handleClick(e)}
            name="All"
          >
            All
          </button>
          <button
            className={
              filter === 'Published' ? classActive : classInactive
            }
            onClick={(e) => handleClick(e)}
            name="Published"
          >
            Published
          </button>
          <button
            className={
              filter === 'Unpublished' ? classActive : classInactive
            }
            onClick={(e) => handleClick(e)}
            name="Unpublished"
          >
            Unpublished
          </button>
        </div>
        <div>
          <TextField
            placeholderText="Search Articles by Title..."
            btnText="Search"
            submitFn={submitFn}
          />
        </div>
      </nav>
    </div>
  );
};

export default Filter;
