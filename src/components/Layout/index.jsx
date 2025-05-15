// components/Layout/PageLayout.jsx
import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ScrollToTopButton from "../ScrollToTopButton";

const PageLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main style={{ marginTop: "60px" }}>{children}</main>
      <ScrollToTopButton />
      <Footer />
    </>
  );
};

export default PageLayout;
