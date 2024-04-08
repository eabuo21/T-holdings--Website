import React, { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";

const TransitionText = ({ text1, text2, text3, text4, text5, text6}) => {
  const [index, setIndex] = useState(0);

  const TEXTS = [text1, text2, text3, text4, text5, text6];
  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  const Styles = {
    fontWeight: "700",
    fontSize: "20px",
    lineHeight: "141.5%",
    textAlign: "center",
    justifyContent: "center",
  };
  return (
    <TextTransition style={Styles} springConfig={presets.wobbly}>
      {TEXTS[index % TEXTS.length]}
    </TextTransition>
  );
};

export default TransitionText;
