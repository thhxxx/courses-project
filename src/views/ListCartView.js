import React from 'react';

const ListCartView = () => {
  return (
    <div className="container mt-[50px] grid grid-cols-3 gap-x-[50px]">
      <div className="col-[1/3]">
        <div className="p-4 rounded-5 shadow-msd">
          <div className="text-black font-bold text-lg">My Cart</div>
          <div className="flex items-center gap-4 justify-between border-b py-5 ">
            <img className="w-24 rounded-5"
                 src="https://htmlstream.com/preview/front-v4.2/html/assets/svg/components/card-12.svg" alt=""/>
            <p className="font-bold grow">Complete Python Bootcamp: Go from zero to hero in Python 3</p>
            <p className="max-w-[105px] min-w-[105px]"><span className="font-bold">$99.99</span> <s
              className="text-xs">$114.99</s></p>
            <button className="h-8 max-w-[32px] min-w-[32px] rounded-5 bg-[#e40000] leading-8 text-white"><i
              className="fa-solid fa-xmark"/></button>
          </div>

          <div className="mt-4">
            <input type="text" placeholder="CODE COUPON" className="w-5/12 mr-3 px-3 border rounded-5 h-10"/><button className="button">Apply coupon</button>
          </div>
        </div>
      </div>
      <div>
        <div className="shadow-msd rounded-5 p-4">
          <div className="text-black font-bold text-lg">Cart Total</div>
        </div>
      </div>
    </div>
  );
};

export default ListCartView;