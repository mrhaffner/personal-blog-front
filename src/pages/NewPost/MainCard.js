import React from 'react';
import Form from './Form';

const MainCard = ({ toast }) => {
  return (
    <div className="mx-8 mt-admin bg-white shadow-custom rounded-2xl flex flex-col items-center text-gray-700">
      <div className="w-278 flex flex-col items-center mt-16">
        <h1 className="font-bold text-4xl">
          Create Some Awesome Content
        </h1>
        <div className="w-184">
          <Form toast={toast} />
        </div>
      </div>
    </div>
  );
};

export default MainCard;
