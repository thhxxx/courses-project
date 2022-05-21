import React from 'react';

const Courses = () => {
  const stars = [...Array(5)]
  return (
    <div className="grid gap-[30px] mt-[50px] grid-cols-3">
      {/*courses items*/}
      <div className="hover:shadow-msd rounded-5">
        <div
          className="h-[218px] p-[15px] flex flex-col	rounded-t-5"
          style={{
            background: "url('https://htmlstream.com/preview/front-v4.2/html/assets/svg/components/card-12.svg') no-repeat",
          }}
        >
          <div>
                <span
                  className="bg-[#00C9A7] text-white inline-block text-xs px-2.5 py-[5px] rounded-full font-bold"
                >Bestseller</span>
          </div>
          <div className="mt-auto text-lg">
            {
              stars.map((_, index) => {
                return (
                  <i className="mr-[5px] text-yellow-400 fa-solid fa-star" key={index}/>
                )
              })
            }

            <span className="text-white">725 reviews</span>
          </div>
        </div>
        <div className="py-5 px-[15px] border rounded-b-5">
          <div className="text-xs">CODE</div>
          <h1 className="text-base mt-2 mb-5 font-bold">
            Complete Python Bootcamp: Go from zero to hero in Python
          </h1>
          <div className="flex items-center text-xs mb-10 gap-x-2">
            <img
              className="w-10	h-10 rounded-[50%]"
              src="https://htmlstream.com/preview/front-v4.2/html/assets/img/160x160/img3.jpg"
              alt=""/>
            <h3>Hugh Jackman</h3>
            <div className="grow text-right">
              <i className="fa-solid fa-book"/> 42 lessons
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs line-through	">$114.99</span>
              <h6 className="text-blue text-base font-bold">$114.99</h6>
            </div>
            <button className="button">Add to cart</button>
          </div>
        </div>
      </div>
      {/*courses items*/}
    </div>
  );
};

export default Courses;