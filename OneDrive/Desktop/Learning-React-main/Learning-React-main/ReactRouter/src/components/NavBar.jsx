import React from "react";

export default function NavBar() {
  return (
    <>
      <nav
        className=" grid grid-cols-3 text-center sticky top-0 h-20 font-medium"
        style={{ margin: 0, padding: 0 }}
      >
        {/* logo */}
        <div className="mt-7">Your logo</div>

        <div>
          <ul className="flex justify-center space-x-10 mt-8">
            <li className=" active:text-orange-600 cursor-pointer hover:text-orange-500">
              Home
            </li>
            <li className=" active:text-orange-600 cursor-pointer hover:text-orange-500">
              About Us
            </li>
            <li className=" active:text-orange-600 cursor-pointer hover:text-orange-500">
              Contact
            </li>
            <li className=" active:text-orange-600 cursor-pointer hover:text-orange-500">
              Github
            </li>
          </ul>
        </div>

        <div className="flex justify-center space-x-10 mt-1">
          <button>
            {" "}
            <strong>Log In</strong>
          </button>
          <button className=" bg-orange-500 p-1 w-28 rounded-md text-white h-9 mt-5">
            <strong>Sign Up</strong>
          </button>
        </div>
      </nav>
    </>
  );
}
