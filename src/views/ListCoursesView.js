import React from 'react';
import CoursesElement from "../components/elements/CoursesElement";
import FilterCourses from "../components/elements/course-detail/FilterCourses";
import SortCourses from "../components/elements/course-detail/SortCourses";

const ListCoursesView = () => {
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
      <div className="mt-[50px]">
        <FilterCourses/>
        <SortCourses/>
      </div>
      <CoursesElement/>
    </div>
  );
};

export default ListCoursesView;