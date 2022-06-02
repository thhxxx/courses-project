import React from 'react';
import CourseContentAccordion from "../components/elements/accordion/CourseContentAccordion";

const CourseDetailView = () => {
  const stars = [...Array(5)]

  return (
    <div className="container relative">
      <div className="
      py-10
      mx-[calc(0px-((100vw-100%)/2)+15px)]
      bg-[rgba(255,255,255,0.9)]
      bg-no-repeat
      bg-cover
      bg-blend-color
      bg-[url('https://htmlstream.com/preview/front-v4.2/html/assets/img/1920x800/img6.jpg')]">
        <div className="container">
          <div className="w-8/12 pr-14">
            <div>
                <span
                  className="bg-[#00C9A7] text-white inline-block text-xs px-2.5 py-[5px] rounded-full font-bold">
                  Bestseller
                </span>
            </div>
            <h1 className="my-3 font-bold text-black text-4xl">
              Complete Python Bootcamp: Go from zero to hero in Python 3
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur delectus facere nihil quidem
              voluptate voluptatem. Atque eaque eos maxime reprehenderit.
            </p>
            <div className="flex gap-x-2.5 items-center mt-3">
              <img className="w-10	h-10 rounded-[50%]"
                   src="https://htmlstream.com/preview/front-v4.2/html/assets/img/160x160/img3.jpg" alt=""/>
              <p>Create by <span className="font-bold text-blue">Hugh Jackman</span></p>
              <div>
                {
                  stars.map((_, index) => {
                    return (
                      <i className="mr-[5px] text-yellow-400 fa-solid fa-star" key={index}/>
                    )
                  })
                }

                <span>725 reviews</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-8/12 pr-14">
        <h2 className="mt-10 text-black font-bold mb-4 text-lg">What you'll learn:</h2>
        <ul className="grid gap-5 grid-cols-2">
          <li className="flex gap-x-2 items-baseline"><i className="fa-solid fa-check"/>
            Lorem ipsum dolor sit amet.
          </li>
          <li className="flex gap-x-2 items-baseline"><i className="fa-solid fa-check"/>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab!
          </li>
          <li className="flex gap-x-2 items-baseline"><i className="fa-solid fa-check"/>
            Lorem ipsum dolor sit amet, consectetur.
          </li>
          <li className="flex gap-x-2 items-baseline"><i className="fa-solid fa-check"/>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, possimus.
          </li>
          <li className="flex gap-x-2 items-baseline"><i className="fa-solid fa-check"/>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos!
          </li>
          <li className="flex gap-x-2 items-baseline"><i className="fa-solid fa-check"/>
            Lorem ipsum dolor sit amet, consectetur adipisicing.
          </li>
          <li className="flex gap-x-2 items-baseline"><i className="fa-solid fa-check"/>
            Lorem ipsum dolor sit amet, consectetur adipisicing.
          </li>
          <li className="flex gap-x-2 items-baseline"><i className="fa-solid fa-check"/>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </li>
        </ul>
        <h2 className="mt-10 text-black font-bold mb-4 text-lg">Course content:</h2>
        <CourseContentAccordion/>
      </div>

      <div className="absolute top-0 right-0 w-4/12 mt-10 shadow-msd bg-white rounded-5 p-4">
        <img src="https://htmlstream.com/preview/front-v4.2/html/assets/svg/components/card-12.svg"
             className="rounded-5" alt=""/>
        <div className="my-4">
          <span className="font-bold text-3xl text-black mr-2">$99.99</span>
          <s>$114.99</s>
        </div>
        <button className="button w-full">add to cart</button>
        <p className="text-xs text-center mt-2">30-day money-back guarantee</p>
        <p className="text-black font-bold mt-4 text-base">This course includes</p>
        <ul className="mt-3 pl-5 leading-10">
          <li><i className="fa-solid fa-video"/> 46.5 hours on-demand video</li>
          <li><i className="fa-solid fa-file-lines"/> 77 articles</li>
          <li><i className="fa-solid fa-file-arrow-down"/> 85 downloadable resources</li>
          <li><i className="fa-solid fa-clock"/> Full time access</li>
          <li><i className="fa-solid fa-mobile"/> Access on mobile and Tablet</li>
          <li><i className="fa-solid fa-certificate"/> Certificate of Completion</li>
        </ul>
      </div>
    </div>
  );
};

export default CourseDetailView;