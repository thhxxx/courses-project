import React from 'react';

const SearchElement = () => {
  return (
    <div className="relative grow">
      <input
        type="text"
        placeholder="What do you want to learn?"
        className="w-full rounded-5 border-[#E9E9E9] border px-[10px] h-10"
      />
      <button
        className="absolute h-10 w-10 text-blue top-0 right-0"
      >
        <i className="fa-solid fa-magnifying-glass"/>
      </button>
    </div>
  );
};

export default SearchElement;