import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

import AppComponents from "./components/AppComponents/AppComponents";
import AllCourses from "./components/AllCourses/AllCourses";
import ContactUs from "./components/ContactUs/ContactUs";
import BlogHighlights from "./components/Blogs/Blogs";
import ScrollToTop from "./utils/ScrollToTop";
import AboutPage from "./components/AboutUs/AboutPage";
import Footer from "./components/Footer/Footer";
import Curriculum from "./components/Curriculum/Curriculum";
import FloatingButton from "./components/FloatingButton/FloatingButton";

const App = () => {
  return (
    <>
      <Router>
        <ScrollToTop />
        <div className="font-title">
          <Navbar />
          <div className="pt-16">
            {" "}
            {/* Adjust padding for fixed Navbar */}
            <Routes>
              <Route path="/" element={<AppComponents />} />
              <Route path="/courses" element={<AllCourses />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/blogs" element={<BlogHighlights />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/curriculum" element={<Curriculum />} />
            </Routes>
          </div>
          <FloatingButton />
          <Footer />
        </div>
      </Router>
    </>
  );
};

export default App;
