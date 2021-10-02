import React from 'react';

const Author = () => (
  <div className="flex shadow-custom rounded-lg w-192 bg-white h-72 overflow-hidden">
    <div className="bg-author w-64 bg-center bg-cover flex-none"></div>
    <div className="flex flex-col items-center justify-center px-20">
      <h3 className="text-xl font-semibold pb-1">Stevesie Ryan</h3>
      <p className="uppercase tracking-wide text-sm font-semibold pb-5 text-lightblue-400">
        Job Title
      </p>
      <p className="text-bluegray-500">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna
        aliqua...
      </p>
    </div>
  </div>
);

export default Author;
