import React from 'react';

const FilterCoursesElement = () => {
  return (
    <div className="mt-[50px]">
      <select className="border rounded-5 h-10 px-3">
        <option value="">-- Filter by Category --</option>
      </select>
      <select className="border rounded-5 h-10 px-3 ml-3">
        <option value="">-- Sorted by --</option>
      </select>
    </div>
  );
};

export default FilterCoursesElement;