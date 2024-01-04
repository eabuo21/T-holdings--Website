import React from "react";
import { Link } from "react-router-dom";

const EmailSuccess = () => {
  return (
    <div>
      <h2> Your Form Was Submitted Successfully!,</h2>
      <Link to={"/"}>
        <p>
          {" "}
          <cheveronLeft>Return to previous page </cheveronLeft>
        </p>
      </Link>
    </div>
  );
};
export default EmailSuccess;
