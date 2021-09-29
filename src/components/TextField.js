import React, { useState } from 'react';

const TextField = ({ placeholderText, btnText, submitFn }) => {
  const [inputText, setInputText] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    submitFn(inputText);
  };

  return (
    <div className="p-10 flex items-end">
      <form onSubmit={handleSubmit} className="space-x-9">
        <input
          type="text"
          onChange={(e) => setInputText(e.target.value)}
          placeholder={placeholderText}
          className="border-b-2 pr-12 focus:outline-none"
        />
        <button
          type="submit"
          className="px-5 py-1 border-2 border-gray-400 rounded-full text-gray-400 font-semibold text-l focus:outline-none"
        >
          {btnText}
        </button>
      </form>
    </div>
  );
};

export default TextField;
