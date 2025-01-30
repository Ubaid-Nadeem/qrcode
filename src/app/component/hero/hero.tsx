"use client";

import styles from "./style.module.css";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Select, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import Image from "next/image";
import QR from "../../../../public/example-qr.png";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function Hero() {
  const [selectedMethod, setSelectedMethod] = useState("Website");
  const [isActive, setIsActive] = useState(true);
  const [isError, setIsError] = useState(false);

  return (
    <div className={`w-full  ${styles.hero_bg} mt-[61px] p-5`}>
      <div
        className={`bg-[#e9e9eb] ${styles.hero_child} p-2 flex m-auto rounded-lg flex-col mt-10`}
      >
        <div className="p-3 w-full bg-white rounded-lg ">
          <ul className="flex gap-5 items-center w-full hidden md:flex">
            <li
              onClick={() => {
                setSelectedMethod("Website");
              }}
              className={`${
                selectedMethod == "Website"
                  ? "bg-[#f2f5fe] text-[#6c5ce7]"
                  : "bg-none text-black"
              } px-4 py-2 rounded-lg  cursor-pointer flex gap-2 text-[14px] items-center`}
            >
              <span className="p-1 border rounded-lg">
                <svg
                  className="w-6 h-6 text-[#6c5ce7]"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.64 4.737A7.97 7.97 0 0 1 12 4a7.997 7.997 0 0 1 6.933 4.006h-.738c-.65 0-1.177.25-1.177.9 0 .33 0 2.04-2.026 2.008-1.972 0-1.972-1.732-1.972-2.008 0-1.429-.787-1.65-1.752-1.923-.374-.105-.774-.218-1.166-.411-1.004-.497-1.347-1.183-1.461-1.835ZM6 4a10.06 10.06 0 0 0-2.812 3.27A9.956 9.956 0 0 0 2 12c0 5.289 4.106 9.619 9.304 9.976l.054.004a10.12 10.12 0 0 0 1.155.007h.002a10.024 10.024 0 0 0 1.5-.19 9.925 9.925 0 0 0 2.259-.754 10.041 10.041 0 0 0 4.987-5.263A9.917 9.917 0 0 0 22 12a10.025 10.025 0 0 0-.315-2.5A10.001 10.001 0 0 0 12 2a9.964 9.964 0 0 0-6 2Zm13.372 11.113a2.575 2.575 0 0 0-.75-.112h-.217A3.405 3.405 0 0 0 15 18.405v1.014a8.027 8.027 0 0 0 4.372-4.307ZM12.114 20H12A8 8 0 0 1 5.1 7.95c.95.541 1.421 1.537 1.835 2.415.209.441.403.853.637 1.162.54.712 1.063 1.019 1.591 1.328.52.305 1.047.613 1.6 1.316 1.44 1.825 1.419 4.366 1.35 5.828Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              Website
            </li>
            <li
              onClick={() => {
                setSelectedMethod("Text");
              }}
              className={`${
                selectedMethod == "Text"
                  ? "bg-[#f2f5fe] text-[#6c5ce7]"
                  : "bg-none text-black"
              } px-5 py-2 rounded-lg  cursor-pointer flex gap-2 text-[14px] items-center`}
            >
              <span className="p-1 border rounded-lg">
                <svg
                  className="w-6 h-6 text-[#6c5ce7]"
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
                    d="M10 3v4a1 1 0 0 1-1 1H5m4 8h6m-6-4h6m4-8v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1Z"
                  />
                </svg>
              </span>
              Text
            </li>
            <li
              onClick={() => {
                setSelectedMethod("Whatsapp");
              }}
              className={`${
                selectedMethod == "Whatsapp"
                  ? "bg-[#f2f5fe] text-[#6c5ce7]"
                  : "bg-none text-black"
              } px-5 py-2 rounded-lg  cursor-pointer flex gap-2 text-[14px] items-center`}
            >
              <span className="p-1 border rounded-lg">
                <svg
                  className="w-6 h-6 text-[#6c5ce7]"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z"
                    clipRule="evenodd"
                  />
                  <path
                    fill="currentColor"
                    d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"
                  />
                </svg>
              </span>
              Whatsapp
            </li>
          </ul>

          <div className="black md:hidden">
            <Drawer>
              <DrawerTrigger className="w-full">
                <Select>
                  <SelectTrigger className="w-full text-[#6c5ce7] border-none bg-[#f2f5fe] outline-hidden">
                    <SelectValue
                      placeholder={selectedMethod}
                      className="w-full "
                    />
                  </SelectTrigger>
                </Select>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle className="my-5 text-left">
                    Select a QR Type
                  </DrawerTitle>
                  <DrawerDescription>
                    <ul className="flex gap-5 items-center w-full flex-col w-full">
                      <DrawerClose className="w-full">
                        <li
                          onClick={() => {
                            setSelectedMethod("Website");
                          }}
                          className={`${
                            selectedMethod == "Website"
                              ? "bg-[#f2f5fe] text-[#6c5ce7]"
                              : "bg-none text-black"
                          } px-4 py-2 rounded-lg  cursor-pointer flex gap-2 text-[14px] items-center w-full`}
                        >
                          <span className="p-1 border rounded-lg">
                            <svg
                              className="w-6 h-6 text-[#6c5ce7]"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fillRule="evenodd"
                                d="M8.64 4.737A7.97 7.97 0 0 1 12 4a7.997 7.997 0 0 1 6.933 4.006h-.738c-.65 0-1.177.25-1.177.9 0 .33 0 2.04-2.026 2.008-1.972 0-1.972-1.732-1.972-2.008 0-1.429-.787-1.65-1.752-1.923-.374-.105-.774-.218-1.166-.411-1.004-.497-1.347-1.183-1.461-1.835ZM6 4a10.06 10.06 0 0 0-2.812 3.27A9.956 9.956 0 0 0 2 12c0 5.289 4.106 9.619 9.304 9.976l.054.004a10.12 10.12 0 0 0 1.155.007h.002a10.024 10.024 0 0 0 1.5-.19 9.925 9.925 0 0 0 2.259-.754 10.041 10.041 0 0 0 4.987-5.263A9.917 9.917 0 0 0 22 12a10.025 10.025 0 0 0-.315-2.5A10.001 10.001 0 0 0 12 2a9.964 9.964 0 0 0-6 2Zm13.372 11.113a2.575 2.575 0 0 0-.75-.112h-.217A3.405 3.405 0 0 0 15 18.405v1.014a8.027 8.027 0 0 0 4.372-4.307ZM12.114 20H12A8 8 0 0 1 5.1 7.95c.95.541 1.421 1.537 1.835 2.415.209.441.403.853.637 1.162.54.712 1.063 1.019 1.591 1.328.52.305 1.047.613 1.6 1.316 1.44 1.825 1.419 4.366 1.35 5.828Z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                          Website
                        </li>
                      </DrawerClose>

                      <DrawerClose className="w-full">
                        <li
                          onClick={() => {
                            setSelectedMethod("Text");
                          }}
                          className={`${
                            selectedMethod == "Text"
                              ? "bg-[#f2f5fe] text-[#6c5ce7]"
                              : "bg-none text-black"
                          } px-5 py-2 rounded-lg  cursor-pointer flex gap-2 text-[14px] items-center w-full`}
                        >
                          <span className="p-1 border rounded-lg">
                            <svg
                              className="w-6 h-6 text-[#6c5ce7]"
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
                                d="M10 3v4a1 1 0 0 1-1 1H5m4 8h6m-6-4h6m4-8v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1Z"
                              />
                            </svg>
                          </span>
                          Text
                        </li>
                      </DrawerClose>

                      <DrawerClose className="w-full">
                        <li
                          onClick={() => {
                            setSelectedMethod("Whatsapp");
                          }}
                          className={`${
                            selectedMethod == "Whatsapp"
                              ? "bg-[#f2f5fe] text-[#6c5ce7]"
                              : "bg-none text-black"
                          } px-5 py-2 rounded-lg  cursor-pointer flex gap-2 text-[14px] items-center w-full`}
                        >
                          <span className="p-1 border rounded-lg">
                            <svg
                              className="w-6 h-6 text-[#6c5ce7]"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill="currentColor"
                                fillRule="evenodd"
                                d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z"
                                clipRule="evenodd"
                              />
                              <path
                                fill="currentColor"
                                d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"
                              />
                            </svg>
                          </span>
                          Whatsapp
                        </li>
                      </DrawerClose>
                    </ul>
                  </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                  {/* <Button>Submit</Button> */}
                  <DrawerClose>
                    {/* <Button variant="outline">Cancel</Button> */}
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
        </div>

        <div className="bg-white w-full rounded-lg p-5 mt-2 flex  flex-col md:flex-row  gap-2">
          <div className="bg-white w-full  md:w-[70%]  rounded-lg">
            <h2 className="font-bold text-[18px] pt-5">Complete the content</h2>
            {selectedMethod == "Website" && (
              <div>
                <span className="block text-[13px] mt-5 mb-2 text-[#68676c]">
                  Enter your Website <sup className="text-[red]">*</sup>
                </span>
                <input
                  placeholder="E.g. https://example.com"
                  className={`w-full p-2 md:w-[350px] border ${
                    isError ? "outline-[red] border-[red]" : ""
                  }`}
                />
                <p
                  className={`text-[12px] py-2 text-[red] ${
                    isError ? "block" : "hidden"
                  }`}
                >
                  URL must start with http or https
                </p>
              </div>
            )}

            {selectedMethod == "Text" && (
              <div>
                <span className="block text-[13px] mt-5 mb-2 text-[#68676c]">
                  Message <sup className="text-[red]">*</sup>
                </span>
                <Textarea
                  placeholder="Type your message here."
                  className="w-full md:w-[350px] p-2"
                  rows={4}
                />
              </div>
            )}

            {selectedMethod == "Whatsapp" && (
              <div>
                <span className="block text-[13px] mt-5 mb-2 text-[#68676c]">
                  Number<sup className="text-[red]">*</sup>
                </span>
                <input
                  placeholder=""
                  className="w-full p-2 md:w-[350px] border"
                  type="number"
                />

                <div>
                  <span className="block text-[13px] mt-5 mb-2 text-[#68676c]">
                    Message <sup className="text-[red]">*</sup>
                  </span>
                  <Textarea
                    placeholder="Type your message here."
                    className="w-full md:w-[350px] p-2"
                    rows={4}
                  />
                </div>
              </div>
            )}

            <Button
              className="block bg-[#6c5ce7] text-white px-10 py-2 m-auto my-5 md:w-auto md:m-0 md:my-5 rounded-full"
              // disabled={isActive}
            >
              Generate QR Code
            </Button>
          </div>
          <div className="w-full  md:w-[30%] rounded-lg bg-[#f7f7f7] order-first md:order-none">
            <div className="bg-white w-[150px] m-auto rounded-lg p-5 my-5 ">
              <Image src={QR} alt="example QR" />
            </div>
            <Button
              variant="outline"
              className="block  text-[#6c5ce7] px-10 py-2 m-auto my-5 md:w-auto rounded-full"
              disabled={isActive}
            >
              Download QR
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
