import React, { useState } from 'react';

const TextField = ({
  placeholderText,
  btnText,
  setFilter,
  setTextFilter,
}) => {
  const [inputText, setInputText] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    setTextFilter(inputText);
    // setInputText('');
    inputText !== '' && setFilter('');
  };

  return (
    <div className="p-10 flex items-end">
      <form onSubmit={(e) => handleSubmit(e)} className="space-x-9">
        <input
          type="text"
          onChange={(e) => setInputText(e.target.value)}
          placeholder={placeholderText}
          className="border-b-2 pr-12"
        />
        <button
          type="submit"
          className="px-5 py-1 border-2 border-gray-400 rounded-full text-gray-400 font-semibold text-l"
        >
          {btnText}
        </button>
      </form>
    </div>
  );
};

export default TextField;
