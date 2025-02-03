import React, { Fragment } from "react";

import CompanyLogo from "./component/CompanyLogo.jsx";
import BlogCard from "./component/BlogCard.jsx";
import Home from "./component/Home.jsx";
import HeaderTop from "./component/HeaderTop.jsx";
import HeaderNavbar from "./component/HeaderNavbar.jsx";
import Header from "./component/Header.jsx";
import Services from "./component/Services.jsx";
import About from "./component/About.jsx";
import Testimonial from "./component/Testimonial.jsx";
import AppDownload from "./component/AppDownload.jsx";
import ContactUs from "./component/ContactUs.jsx";
import Footer from "./component/Footer.jsx";
import AskQuestions from "./component/AskQuestions.jsx";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <CompanyLogo />
      <Services />
      <About />
      <BlogCard />
      <Testimonial />
      <AppDownload />
      <AskQuestions />
      <ContactUs />
      <Footer />
    </>
  );
};

export default App;
