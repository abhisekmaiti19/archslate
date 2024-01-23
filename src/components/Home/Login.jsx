import { useState } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

function Login() {
  const [login, setLogin] = useState(true);
  const [signup, setSignup] = useState(false);
  return (
    // Login page is not required but I amde extra for better understanding
    <div className="w-[500px] h-fit flex flex-col gap-10 ">
      {/* -- upsection -- */}
      <div className="w-full flex items-center  justify-between px-5 gap-6">
        <div className="flex items-center font-black text-[30px] gap-2">
          <img src={logo} className="w-[45px] h-[45px]" alt="" />
          <h1 className="archslate relative overflow-hidden  bg-gradient-to-r from-[#14203A] to-slate-400 px-2 text-white rounded-md">
            <span className="w-[30%] rounded-sm h-full absolute left-0  bg-gradient-to-l from-50% via-white from-transparent  opacity-30 gloss"></span>
            Archslate
          </h1>
        </div>
        <Link className="flex flex-col justify-start opacity-50 hover:opacity-100 transition-all duration-300">
          Confussion ?{" "}
          <span className="text-brand-link font-bold">See Product demo</span>
        </Link>
      </div>
      {/* --up section end --- */}
      {/* form section  */}
      <div className="w-full relative flex-col flex gap-8 rounded-xl p-10  bg-white border-[1px] shadow-lg border-brand-stroke">
        <h1 className="text-2xl flex flex-col gap-1 font-bold">
          {!login && signup
            ? `Hey! You are in right place 🤩`
            : `Hey! Welcome Back 🖐`}
          <span className=" text-brand-link font-black ">
            {!login && signup ? `Signup Now` : `Login Now`}
          </span>
        </h1>
        <input
          type="text"
          className="w-full bg-slate-50 p-6 rounded-md  outline-brand-link"
          placeholder="E-mail"
        />
        <input
          type="text"
          className="w-full bg-slate-50 p-6 rounded-md  outline-brand-link"
          placeholder="Password"
        />
        {!login && signup ? (
          <input
            type="text"
            className="w-full bg-slate-50 p-6 rounded-md  outline-brand-link"
            placeholder="Confirm Password"
          />
        ) : (
          ``
        )}
        <Link className="w-full p-3 bg-gradient-to-l from-blue-700 via-blue-800 to-blue-950 hover:bg-gradient-to-l hover:from-blue-800 hover:via-blue-950 hover:to-blue-950  rounded-xl flex justify-center items-center gap-5 text-xl font-bold text-white">
          {!login && signup ? `Register Now` : `login`}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </Link>
        <Link
          className="flex justify-end  font-medium hover:opacity-40 transition-all duration-300 "
          onClick={() => {
            if (!login && signup) {
              setLogin(true);
              setSignup(false);
            } else {
              setLogin(false);
              setSignup(true);
            }
          }}
        >
          {login && !signup
            ? `don't have a account? SignUp`
            : `Already have account ! Login Now`}
        </Link>
      </div>
    </div>
  );
}

export default Login;
