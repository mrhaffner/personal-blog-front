import React, { useState } from 'react';

const MainCard = () => {
  const [inputText, setInputText] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="w-96 h-128 bg-white shadow-custom rounded-2xl text-gray-700 overflow-hidden">
      <div className="bg-green-700 pt-24 pb-10 flex justify-center text-white font-bold text-2xl">
        <h1>Admin Login</h1>
      </div>
      <div className="flex justify-center items-center">
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="space-y-10 my-16"
        >
          <div className="">
            <input
              type="text"
              // onChange={(e) => setTitle(e.target.value)}
              placeholder="Username"
              className="border-b-2 pr-24 block"
            />
          </div>
          <div className="">
            <input
              type="text"
              // onChange={(e) => setSubTitle(e.target.value)}
              placeholder="Password"
              className="border-b-2 pr-24 block"
            />
          </div>
          <div className="">
            <input
              type="text"
              // onChange={(e) => setSubTitle(e.target.value)}
              placeholder="Password Confirmation"
              className="border-b-2 pr-24 block"
            />
          </div>
          <button
            type="submit"
            className="px-5 py-2 bg-blue-500 rounded-full text-white font-bold text-l tracking-wide"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default MainCard;
