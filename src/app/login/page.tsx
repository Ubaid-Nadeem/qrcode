"use client"

import loginCover from "../../../public/login.svg";
import Image from "next/image";
import styles from "./style.module.css";
import { useRouter } from "next/navigation";

export default function Login() {

const route = useRouter()


  return (
    <div className="flex w-full h-screen">
      <div className="w-full md:w-[40%] ">
        <div className="w-full max-w-[350px] md:w-[80%] m-auto p-5">
          <h2 className="py-5 font-bold text-[24px] mb-10 tracking-wider">
            Logo
          </h2>

          <h2 className="font-bold text-[22px] tracking-wider">
            Welcome back!
          </h2>
          <p className="text-gray-500 text-[14px] py-2">
            Enter with your networks or complete your data
          </p>

          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-6 h-6 text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-width="2"
                  d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
                />
              </svg>
            </div>
            <input
              type="email"
              className="my-2 block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300   "
              placeholder="name@gmail.com"
              required
            />
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-6 h-6 text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14v3m-3-6V7a3 3 0 1 1 6 0v4m-8 0h10a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1Z"
                />
              </svg>
            </div>
            <input
              type="password"
              id="search"
              className="my-2 block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 "
              placeholder="Enter your password here..."
              required
            />
          </div>
          <p className="text-gray-600 text-[14px] py-2 ">
            Have you forgotten your password?{" "}
            <span className="text-[blue] cursor-pointer">click here</span>
          </p>

          <button
            type="button"
            className="bg-[#6c5ce7] text-white py-2 rounded-full w-full my-3"
          >
            Log In
          </button>
          <p className="text-[14px] text-gray-600">
            Don't have an account{" "}
            <span className="text-[blue] cursor-pointer" onClick={()=>{
              route.push("/register")
            }}>
              {" "}
              Create an account
            </span>
          </p>
          <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded-sm md:my-10 dark:bg-gray-700" />

          <div className="flex w-full gap-5 mt-5">
            <p className=" text-center flex-1 bg-gray-200 py-3 rounded-full cursor-pointer">
              <svg
                className="w-4 h-4 text-gray-800 inline"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12.037 21.998a10.313 10.313 0 0 1-7.168-3.049 9.888 9.888 0 0 1-2.868-7.118 9.947 9.947 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.935 9.935 0 0 1 6.614 2.564L16.457 6.88a6.187 6.187 0 0 0-4.131-1.566 6.9 6.9 0 0 0-4.794 1.913 6.618 6.618 0 0 0-2.045 4.657 6.608 6.608 0 0 0 1.882 4.723 6.891 6.891 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678c.075.617.109 1.238.1 1.859-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z"
                  clipRule="evenodd"
                />
              </svg>
            </p>
            <p className="flex-1 bg-gray-200 text-center py-3 rounded-full cursor-pointer">
              <svg
                className="w-4 h-4 text-gray-800 inline"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                  clipRule="evenodd"
                />
              </svg>
            </p>
            <p className="flex-1 bg-gray-200 text-center py-3 rounded-full cursor-pointer">
              <svg
                className="w-4 h-4 text-gray-800 inline"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                  clipRule="evenodd"
                />
                <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
              </svg>
            </p>
          </div>
        </div>
      </div>
      <div
        className={`hidden w-[60%] ${styles.login_cover_bg}  justify-center items-center md:flex`}
      >
        <Image
          src={loginCover}
          alt="login-cover"
          className={`${styles.login_image} w-[60%] h-[60vh]`}
        />
      </div>
    </div>
  );
}
