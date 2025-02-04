"use client";

import { useEffect, useState } from "react";
import Navbar from "../component/navbar/navbar";
import { Html5QrcodeScanner } from "html5-qrcode";
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
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { div } from "framer-motion/m";

export default function Scanner() {
  const [scanAgain, setScanAgain] = useState(false);
  const [result, setResult] = useState("");

  const btnEl = useRef(null);

  useEffect(() => {
    scan();
  }, []);

  function scan() {
    let html5QrCode = new Html5QrcodeScanner(
      "reader",
      { fps: 10, qrbox: { width: 250, height: 250 } },
      /* verbose= */ false
    );

    html5QrCode.render(onScanSuccess, onScanFailure);

    function onScanSuccess(decodedText, decodedResult) {
      console.log(`Code matched = ${decodedText}`, decodedResult);
      setResult(decodedText);
    }

    function onScanFailure(error) {
      // console.log(`Code scan error = ${error}`);
    }
  }

  return (
    <div>
      <Navbar />

      {!scanAgain && (
        <div className="mt-20">
          <h1 className="text-center font-bold text-xl py-5">Scan</h1>
          <div id="reader" className="w-[90%]  md:w-[400px] m-auto"></div>

          {result && (
            <div className="text-center p-5">
              {" "}
              <a href={result}>{result}</a>{" "}
            </div>
          )}
        </div>
      )}

      {scanAgain && (
        <div className="mt-20">
          Result{" "}
          <Button
            onClick={() => {
              setScanAgain(!scanAgain);
              scan();
            }}
          >
            toggle
          </Button>
        </div>
      )}

      <Drawer>
        <DrawerTrigger ref={btnEl}></DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <DrawerClose>
              <Button
                variant="outline"
                onClick={() => {
                  setScanAgain(true);
                }}
              >
                Cancel
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
