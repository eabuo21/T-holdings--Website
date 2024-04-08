import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import Bizform from "../../../components/BizForms/Bizform";

const GetIntouch = () => {
  const [showbizform, setShowBizform] = useState(false);

  const openForm = () => {
    setShowBizform(true);
 

  };
 
  const closeForm = () => {
    setShowBizform(false);


   
  };

  return (
    <>
      <div className="get-get-touch-container ">
        <section className="under-text">
          <p
            className="bottom-text"
            style={{
              textAlign: "center",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Contact us to provide a custom solution for you
          </p>

          <button onClick={() => openForm() (document.body.style.overflow="hidden")} className="get-button">
            Get In Touch
          </button>
          {showbizform && <Bizform onClose={() => closeForm() (   document.body.style.overflow = "auto")  } />}
        </section>
      </div>
    </>
  );
};
export default GetIntouch;
