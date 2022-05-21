import React from 'react';
import Courses from "../components/elements/Courses";
import FilterCourses from "../components/elements/FilterCourses";

const ListCourses = () => {
  return (
    <div className="container">
      <div
        className="px-[30px] py-[50px]
        rounded-5 bg-blue
        bg-[url('https://htmlstream.com/preview/front-v4.2/html/assets/svg/illustrations/master-adobe-ai-book.svg')]
        bg-no-repeat bg-right text-white">
        <h1 className="font-bold text-4xl">Course catalog</h1>
        <p className="mt-5 text-xl">Front Course includes over 20,000 courses.</p>
      </div>
      <FilterCourses/>
      <Courses/>
    </div>
  );
};

export default ListCourses;