import React, { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";

const CareerTransitionText = ({ text1, text2, text3 }) => {
  const [index, setIndex] = useState(0);

  const TEXTS = [text1, text2, text3];
  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);


  return (
    <div className="career-transition-mai">
      <h1 className="" ></h1><p className="career-transition-main"><TextTransition springConfig={presets.wobbly}>
       {TEXTS[index % TEXTS.length]}
      </TextTransition></p>
    </div>
  );
};

export default CareerTransitionText;
