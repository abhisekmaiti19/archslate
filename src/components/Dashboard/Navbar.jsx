import { useState } from "react";
import logo from "../../assets/logo.png";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="px-[38px] h-[64px] relative flex justify-between py-2 bg-white items-center shadow-md transition duration-500 ease-in-out">
      <div className="flex gap-4 items-center">
        <img src={logo} alt="archsltae logo" className="w-[44px] h-[44px]" />
        <h1 className=" text-[32px]  archslate font-semibold">Archslate</h1>
      </div>
      {/* --search button --  */}
      <div className="w-[570px] h-[36px] flex items-center gap-4 bg-brand-input px-6 rounded-3xl p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6  text-braand-input-text "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>

        <input
          type="text"
          name="search box"
          id=""
          placeholder="Search"
          className="w-[90%] bg-brand-input placeholder:text-braand-input-text  outline-none"
        />
      </div>
      {/* --notification and bell section-- */}
      <div className="flex items-start gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-9 h-9"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
          />
        </svg>
        <div className="flex gap-4">
          <img
            src="https://api.multiavatar.com/lady.svg"
            alt=""
            className="w-[32px] h-[32px] rounded-full"
          />
          <div className="flex flex-col justify-start text-[16px] font-semibold w-[146px]">
            <h1 className="w-full text-nowrap text-ellipsis overflow-hidden ">
              Suzette Goldsteinnnn
            </h1>
            <span className="text-[12px]">Admin</span>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className={`w-6 h-6 hover:cursor-pointer hover:opacity-50 ${
            toggle ? ` rotate-180 ` : ``
          }`}
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
        <ul
          className={`absolute right-10 -bottom-14  bg-white p-4 rounded-xl font-bold border-brand-stroke shadow-lg ${
            toggle ? `block` : `hidden`
          } `}
        >
          <li>Profile</li>
          <li>Logout</li>
        </ul>
      </div>
    </div>
  );
}
