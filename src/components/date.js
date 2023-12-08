import React, { useState, useEffect } from "react";

function CurrentDate() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalID);
    };
  }, []);

  return <div>{currentDate.toLocaleDateString()}</div>;
}
export default CurrentDate;
