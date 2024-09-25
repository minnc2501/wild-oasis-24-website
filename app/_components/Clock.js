"use client";

import { useState, useEffect } from "react";
import SpinnerMini from "./SpinnerMini";

export default function Clock() {
  const [currentTime, setCurrentTime] = useState(null);

  // Update the time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup the timer when component is unmounted
    return () => clearInterval(timer);
  }, []);

  if (!currentTime) {
    // Don't render on server, only render on the client
    return (
      <div>
        <SpinnerMini />
      </div>
    );
  }

  return (
    <span>
      Today is {currentTime.toLocaleDateString()} -{" "}
      {currentTime.toLocaleTimeString()}
    </span>
  );
}
