import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#21325B] py-[50px] mt-[100px] text-white">
      <div className="container">
        <div className="flex justify-between gap-x-[100px]">
          <div className="max-w-[330px] min-w-[330px]">
            <img src="https://htmlstream.com/preview/front-v4.2/html/assets/svg/logos/logo-white.svg" alt=""/>
            <ul className="mt-4 leading-8">
              <li>Rupert-Mayer-Str. 44</li>
              <li>81379 München</li>
              <li>Phone: +49 (0)89 235 193 931</li>
              <li>Fax: +49 (0)89 411 47 28 - 29</li>
              <li>Email: info@ps-marketing.ch</li>
              <li>Web: https://www.ps-marketing.ch/</li>
            </ul>
          </div>
          <div className="grid grid-cols-4 gap-[30px] grow">
            <div>
              <p className="font-bold">Company</p>
              <ul className="mt-2 leading-8 text-xs">
                <li>About</li>
                <li>Careers</li>
                <li>We're hiring</li>
                <li>Blog</li>
                <li>Customers</li>
                <li>Hire us</li>
              </ul>
            </div>
            <div>
              <p className="font-bold">Features</p>
              <ul className="mt-2 leading-8 text-xs">
                <li>Press</li>
                <li>Release Notes</li>
                <li>Integrations</li>
                <li>Pricing</li>
              </ul>
            </div>
            <div>
              <p className="font-bold">Documentation</p>
              <ul className="mt-2 leading-8 text-xs">
                <li>Support</li>
                <li>Docs</li>
                <li>Status</li>
                <li>API Reference</li>
                <li>Tech Requirements</li>
              </ul>
            </div>
            <div>
              <p className="font-bold">Resources</p>
              <ul className="mt-2 leading-8 text-xs">
                <li>Help</li>
                <li>Your Account</li>
              </ul>
            </div>
            <div className="col-[1/5]">
              © Front. 2021 Htmlstream. All rights reserved.
              <br/><br/>
              When you visit or interact with our sites, services or tools, we or our authorised service providers may
              use cookies for storing information to help provide you with a better, faster and safer experience and for
              marketing purposes.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;