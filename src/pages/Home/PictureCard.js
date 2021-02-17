import React from 'react';

const PictureCard = ({ bg }) => {
  const imgClass = `w-1/4 h-96 bg-picture-card${bg} bg-center bg-cover text-white flex items-end transform transition-transform ease-linear hover:scale-105 hover:z-10`;
  return (
    <div className={imgClass}>
      <div className="mb-4 mx-4">
        <h3 className="text-xl font-semibold">Blog Test Title</h3>
      </div>
    </div>
  );
};

export default PictureCard;
