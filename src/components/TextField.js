import React, { useState } from 'react';
import FormButton from './FormButton';

const TextField = ({
  placeholderText,
  btnText,
  submitFn,
  pattern,
  type,
}) => {
  const [inputText, setInputText] = useState('');
  const handleSubmit = () => {
    submitFn(inputText);
  };

  return (
    <div className="p-10 flex items-end">
      <form className="space-x-9">
        <input
          type="text"
          onChange={(e) => setInputText(e.target.value)}
          placeholder={placeholderText}
          className="border-b-2 focus:border-gray-400 pr-12 focus:outline-none"
          pattern={pattern}
          type={type}
        />
        <FormButton
          text={btnText}
          clickFn={handleSubmit}
          outline={true}
        />
      </form>
    </div>
  );
};

export default TextField;
