import React from 'react';

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
          <div className="w-[calc(100%-385px)]">
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

      <div className="w-[calc(100%-385px)]">
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
      </div>
    </div>
  );
};

export default CourseDetailView;