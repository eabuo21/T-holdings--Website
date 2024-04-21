import ReactGA from "react-ga";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Tongston-Holdings/Home/Home";
import Insights from "../pages/Tongston-Holdings/Home/Insights";
import Events from "../pages/Events";
import About from "../pages/Tongston-Holdings/WhoWeAre";
import ContactUs from "../pages/Tongston-Holdings/ContactUs";
import OurStore from "../pages/Tongston-Holdings/OurStore/OurStore";
import TCollege from "../pages/Tongston-Holdings/OurBusiness/TCollege";
import TInst from "../pages/Tongston-Holdings/TongstonInstitute/TInst";
import THoldings from "../pages/Tongston-Holdings/TongstonHold/THoldings";
import Career from "../pages/Tongston-Holdings/Career/Career";
import ErrorPage from "../pages/ErrorPage";
import { useEffect, useState } from "react";
import TeesModal from "../components/TeesModal";

// import ApplicationPage from "../components/Application page/Application";

// initialize the google analytics provider api to enable site tracking and page reporting

ReactGA.initialize("437299185"); // inside the brackkets we enter the google analytics property tracking id

const RoutesComp = () => {
  // const [isModalOpen, setModalOpen] = useState(false);

  // const closeModal = () => {
  //   setModalOpen(false);
  //   sessionStorage.setItem("modalClosed", "true");
  // };

  // useEffect(() => {
  //   const isModalClosedInThisSession = sessionStorage.getItem("modalClosed");
  //   if (!isModalClosedInThisSession) {
  //     const timeout = setTimeout(() => {
  //       setModalOpen(true);
  //     }, 1000);
  //     return () => {
  //       clearTimeout(timeout);
  //     };
  //   }
  // }, []);

  //here we add the code to enable website tracking and analytics fo for all the pages of the website

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <>
      <Router>
        {/* <TeesModal isOpen={isModalOpen} onClose={closeModal} /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Career />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/our-store" element={<OurStore />} />
          {/* <Route path="/product" element={<ProductsView />} /> */}
          <Route path="/TongstonCollege" element={<TCollege />} />
          {/* <Route path="/TongstonMedia" element={<TMedia />} />
          <Route path="/TongstonVentures" element={<TVentures />} /> */}
          <Route path="/TongstonInstitute" element={<TInst />} />
          <Route path="/TongstonHoldings" element={<THoldings />} />
          {/* <Route path="/allopenrole" element={<AllOpenRoles />} />
          <Route path="/apply" element={<ApplicationPage/>}/> */}

          {/* include external routes like t-hub and tees */}
          <Route path="/tongstonhub" element={"https://t-hub.tongston.com"} />
          <Route
            path="/tongstonventures"
            element={"https://t-ventures.tongston.com"}
          />
          <Route
            path="/tees2024"
            element={
              "https://tees-2023-a7383c13360d161955826582a3745.webflow.io/"
            }
          />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default RoutesComp;
