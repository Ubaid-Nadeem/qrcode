"use client";

import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect, useState } from "react";
import styles from "./scanner.module.css"

export default function Scanner() {

  const [sacnnerResult, setSacnnerResult] = useState(null);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      "reader",
      {
        qrbox: {
          width: 150,
          height: 150,
        },
        fps: 10,
      },
      false
    );

    scanner.render(success, error);

    function success(result) {
      console.log(result);
      scanner.clear();
      setSacnnerResult(result);
    }

    function error(e) {}
  }, []);

  return <div>
      Scan QR Code
      {sacnnerResult ? (
        <div>{sacnnerResult} </div>
      ) : (
        <div
          id="reader"
          width={600}
          height={600}
          className={`flex flex-col gap-5 ${styles.bg}`}
        ></div>
      )}
  </div>;
}
