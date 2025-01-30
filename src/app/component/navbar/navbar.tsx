"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { motion } from "framer-motion";

export default function Navbar() {
  const listItemVariant = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  const listVarient = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: "0",
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="fixed w-full flex justify-between border-b py-3 md:px-10 px-5 items-center bg-[white] top-0">

      {/* logo and navigation */}

      <div className="flex items-center gap-10">
        <div className="font-bold text-[24px] text-[#6c5ce7]">LOGO</div>
        <ul className="gap-10 md:flex hidden ">
          <li className="cursor-pointer hover:text-[#6c5ce7]">Home</li>
          <li className="cursor-pointer  hover:text-[#6c5ce7]">QR Code</li>
          <li className="cursor-pointer  hover:text-[#6c5ce7]">Blogs</li>
          <li className="cursor-pointer  hover:text-[#6c5ce7]">About</li>
        </ul>
      </div>

      <div>
        {/* login and register */}

        <div className="hidden md:block">
          <button className="btn text-[#6c5ce7] border px-10 py-2 rounded-full mx-2 font-bold ">
            Log In
          </button>
          <button className="btn bg-[#6c5ce7] text-white border px-10 py-2 rounded-full font-bold">
            Register
          </button>
        </div>
        {/* mobile navigation */}

        <div className="md:hidden flex-1">
          <Sheet>
            <SheetTrigger>
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </SheetTrigger>
            <SheetContent
              side={"left"}
              style={{
                width: "100%",
              }}
            >
              <SheetHeader>
                <SheetTitle className="text-[#6c5ce7] text-left text-[24px]">
                  LOGO
                </SheetTitle>

                <SheetDescription>
                  <motion.ul
                    variants={listVarient}
                    initial="closed"
                    animate="opened"
                    className="mt-5 p-3 text-left text-[16px] text-black"
                  >
                    <motion.li
                      variants={listItemVariant}
                      className="py-5 border-b"
                    >
                      Home
                    </motion.li>
                    <motion.li
                      variants={listItemVariant}
                      className="py-5 border-b"
                    >
                      QR Code
                    </motion.li>
                    <motion.li
                      variants={listItemVariant}
                      className="py-5 border-b"
                    >
                      Blogs
                    </motion.li>
                    <motion.li variants={listItemVariant} className="py-5">
                      About
                    </motion.li>
                  </motion.ul>

                  <div className="block md:hidden flex absolute bottom-10 w-[85%]">
                    <button className="btn text-[#6c5ce7] border px-10 py-4 rounded-full mx-2 flex-1 font-bold">
                      Log In
                    </button>
                    <button className="btn bg-[#6c5ce7] text-white border px-10 py-2 rounded-full flex-1 font-bold">
                      Register
                    </button>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
