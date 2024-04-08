import React, { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";

const StoreTransitionText = ({ text1, text2, text3, text4, text5, text6, text7, text8, text9, text10}) => {
  const [index, setIndex] = useState(0);

  const TEXTS = [text1, text2, text3, text4, text5, text6, text7, text8, text9, text10];
  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  
    
  return (
    <div className="store-transit">
      <h6 > Our product & services are for:</h6><p><TextTransition  springConfig={presets.wobbly}>
       {TEXTS[index % TEXTS.length]}
      </TextTransition></p>
    </div>
  );
};

export default StoreTransitionText;
