import React from "react";

const Navbar = () => {
  return (
    <div className=" w-full">
      <div className="navbar bg-base-100 max-w-[1440px] mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className=" text-3xl font-bold">Ecloudemy</a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <details className="relative text-gray-700 text-lg font-medium  after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-secondary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
                <summary>Academy</summary>
                <ul className="p-2">
                  <li>
                    <a className="relative text-gray-700 text-lg font-medium  after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-secondary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li className="relative text-gray-700 text-lg font-medium  after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-secondary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ">
              <a>Testimonials</a>
            </li>
            <li className="relative text-gray-700 text-lg font-medium  after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-secondary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
              <details>
                <summary>Resource</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li className="relative text-gray-700 text-lg font-medium hover:secondary after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-secondary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
              <a>Community</a>
            </li>
          </ul>
        </div>

        <div className="navbar-end gap-3">
          <button className="btn border-secondary hover:btn-secondary rounded-full">SIGN IN</button>
          <button className="btn border-secondary hover:btn-secondary rounded-full">Join Zero to Mastery</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
