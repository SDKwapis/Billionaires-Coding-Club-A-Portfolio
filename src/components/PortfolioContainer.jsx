import { useState } from "react";
import NavTabs from "./NavTabs";
import Hi from "./pages/Hi";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Header from "./Header";
import Footer from "./Footer";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Hi");

  const renderPage = () => {
    if (currentPage === "Hi") {
      return <Hi />;
    }
    if (currentPage === "Projects") {
      return <Projects />;
    }
    if (currentPage === "Skills") {
      return <Skills />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="page-container">
      {/* Header Component */}
      <Header />

      {/* Navigation Tabs */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />

      {/* Main content rendering */}
      <div className="content-wrapper">
        <main className="mx-3">{renderPage()}</main>
      </div>
      {/* Footer Component */}
      <Footer />
    </div>
  );
}
