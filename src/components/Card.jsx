
import React from 'react';

const Card = ({ key,image,title}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 ">
      <img src={image} alt={title} className="w-full h-60 object-cover" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
      </div>
      <div className="px-6 py-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          View
        </button>
      </div>
    </div>
  );
};

export default Card;
