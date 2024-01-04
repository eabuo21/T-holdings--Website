import React, { useEffect, useState } from "react";
import RoutesComp from "./routes/RoutesCOmp";
import { ToastContainer } from "react-toastify";
import TeesModal from "./components/TeesModal";

const App = () => {
  return (
    <>
      <div className="app">
        <RoutesComp />
        <ToastContainer />
      </div>
    </>
  );
};

export default App;
