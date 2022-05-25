import React from 'react';
import {Link} from "react-router-dom";

const LoginView = () => {
  return (
    <div className="grid grid-cols-3">
      <div
        className="text-white bg-[#21325B] bg-[url('https://htmlstream.com/preview/front-v4.2/html/assets/svg/components/wave-pattern-light.svg')] px-[50px] py-[30px] h-screen flex flex-col justify-between"
      >
        <div>
          <Link to="/"><img src="https://htmlstream.com/preview/front-v4.2/html/assets/svg/logos/logo-white.svg"
                            alt=""/></Link>
        </div>
        <div className="text-center">
          <img className="mx-auto"
               src="https://htmlstream.com/preview/front-v4.2/html/assets/svg/brands/mailchimp-white.svg" alt=""/>
          <p className="text-lg my-5">
            “ It has many landing page variations to choose from, which one is always a big advantage. ”
          </p>
          <img src="https://htmlstream.com/preview/front-v4.2/html/assets/img/160x160/img9.jpg"
               className="mx-auto rounded-[50%] h-16 w-16"
               alt=""/>
          <p className="text-lg mt-2">
            Lida Reidy
          </p>
          <p className="text-[#ababab] text-sm">Project Manager | Mailchimp</p>
        </div>
        <div className="flex justify-between items-center">
          <img src="https://htmlstream.com/preview/front-v4.2/html/assets/svg/brands/fitbit-white.svg" width="90px"
               alt=""/>
          <img src="https://htmlstream.com/preview/front-v4.2/html/assets/svg/brands/business-insider-white.svg"
               width="90px" alt=""/>
          <img src="https://htmlstream.com/preview/front-v4.2/html/assets/svg/brands/capsule-white.svg" width="90px"
               alt=""/>
        </div>
      </div>
      <div className="flex items-center col-[2/4] px-[50px] py-[30px] justify-center">
        <div>
          <h1 className="text-blue font-bold text-3xl">Welcome back!</h1>
          <div className="w-96 mt-8">
            <div className="mb-5">
              <label className="text-sm">Your email</label>
              <input className="w-full rounded-5 border h-10 px-2 mt-2.5" type="email"/>
            </div>
            <div className="mb-5">
              <label className="text-sm">Password</label>
              <input className="w-full rounded-5 border h-10 px-2 mt-2.5" type="password"/>
            </div>
            <div className="mb-5 text-xs leading-7">
              <p className="text-blue">Forgot Password?</p>
              <p>Don't have an account yet? <span className="text-blue">Sign up here</span></p>
            </div>
            <div className="mb-5">
              <button className="button w-full">Login</button>
            </div>
            <div className="mb-5 grid grid-cols-2 gap-x-5">
              <p className="text-xs col-[1/3] text-center mb-3">or login with</p>
              <button style={{backgroundColor: "#4c66a4"}} className="button w-full">Facebook</button>
              <button style={{backgroundColor: "#cc3e2f"}} className="button w-full">Gmail</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginView;