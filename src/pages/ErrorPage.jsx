import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/error.css";
import Navbar from "../components/Header";
import Footer from "../components/footer";

const ErrorPage = () => {
  return (
    <>
      <Navbar />
      <div className="not-found-container">
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <Link to="/" className="home-button">
          Go to Homepage
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default ErrorPage;
