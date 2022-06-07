import React from 'react';

const ListCartView = () => {
  return (
    <div className="container">
      <div
        className="px-[30px] py-[50px]
        rounded-5 bg-blue
        bg-[url('https://htmlstream.com/preview/front-v4.2/html/assets/svg/illustrations/master-adobe-ai-book.svg')]
        bg-no-repeat bg-right text-white">
        <h1 className="font-bold text-4xl">List Cart</h1>
      </div>
      <div className="mt-5">
        <div className="p-4 shadow-msd">
          <div className="rounded-5 border">
            <table className="border-collapse table-auto w-full" cellPadding="10" cellSpacing="0">
              <thead className="border-b text-blue">
              <tr>
                <th className="p-4">ID</th>
                <th className="p-4">Image</th>
                <th className="p-4 text-left">Title</th>
                <th className="p-4 text-left">Price</th>
                <th className="p-4"/>
              </tr>
              </thead>
              <tbody>
              <tr className="border-b">
                <td className="p-4 text-center">1</td>
                <td className="w-40 p-4">
                  <img className="rounded-5"
                       src="https://htmlstream.com/preview/front-v4.2/html/assets/svg/components/card-12.svg"
                       alt=""/>
                </td>
                <td className="font-bold p-4">
                  Complete Python Bootcamp: Go from zero to hero in Python 3
                </td>
                <td className="p-4">
                  <span className="font-bold">$99.99</span> <s className="text-xs">$114.99</s>
                </td>
                <td className="p-4">
                  <button className="h-8 max-w-[32px] min-w-[32px] rounded-5 bg-[#e40000] leading-8 text-white">
                    <i className="fa-solid fa-xmark"/>
                  </button>
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-4 text-center">1</td>
                <td className="w-40 p-4">
                  <img className="rounded-5"
                       src="https://htmlstream.com/preview/front-v4.2/html/assets/svg/components/card-12.svg"
                       alt=""/>
                </td>
                <td className="font-bold p-4">
                  Complete Python Bootcamp: Go from zero to hero in Python 3
                </td>
                <td className="p-4">
                  <span className="font-bold">$99.99</span> <s className="text-xs">$114.99</s>
                </td>
                <td className="p-4">
                  <button className="h-8 max-w-[32px] min-w-[32px] rounded-5 bg-[#e40000] leading-8 text-white">
                    <i className="fa-solid fa-xmark"/>
                  </button>
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-4 text-center">1</td>
                <td className="w-40 p-4">
                  <img className="rounded-5"
                       src="https://htmlstream.com/preview/front-v4.2/html/assets/svg/components/card-12.svg"
                       alt=""/>
                </td>
                <td className="font-bold p-4">
                  Complete Python Bootcamp: Go from zero to hero in Python 3
                </td>
                <td className="p-4">
                  <span className="font-bold">$99.99</span> <s className="text-xs">$114.99</s>
                </td>
                <td className="p-4">
                  <button className="h-8 max-w-[32px] min-w-[32px] rounded-5 bg-[#e40000] leading-8 text-white">
                    <i className="fa-solid fa-xmark"/>
                  </button>
                </td>
              </tr>
              </tbody>
              <tfoot>
              <tr>
                <td className="p-4" colSpan={3}>
                  <input type="text" placeholder="CODE COUPON" className="w-5/12 mr-3 px-3 border rounded-5 h-10"/>
                  <button className="button">Apply coupon</button>
                </td>
                <td className="p-4">
                  <span className="font-bold">Total:</span>
                </td>
              </tr>
              </tfoot>
            </table>
          </div>
          <div className="mt-4">

          </div>
        </div>
      </div>
    </div>
  );
};

export default ListCartView;