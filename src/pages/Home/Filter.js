import React from 'react';
import TextField from '../../components/TextField';

const Filter = ({ filter, setFilter, setTextFilter }) => {
  const classActive = `px-5 py-1 bg-blue-500 rounded-full text-white font-bold text-l tracking-wide`;
  const classInactive = `px-5 py-1 font-bold text-l tracking-wide`;
  //dropdown for tags?

  return (
    <div className="w-full">
      <nav className="flex justify-between">
        <div className="pt-10 font-bold text-l tracking-wide">
          <button
            className={
              filter === 'Latest' ? classActive : classInactive
            }
            onClick={(e) => setFilter(e.target.name)}
            name="Latest"
          >
            Latest
          </button>
          <button
            className={filter === 'All' ? classActive : classInactive}
            onClick={(e) => setFilter(e.target.name)}
            name="All"
          >
            All
          </button>
          {/* <button
            className={classInactive}
            onClick={(e) => handleClick(e)}
          >
            WebDev
          </button> */}
        </div>
        <div>
          <TextField
            placeholderText="Search Articles..."
            btnText="Search"
            setTextFilter={setTextFilter}
            setFilter={setFilter}
          />
        </div>
      </nav>
    </div>
  );
};

export default Filter;
