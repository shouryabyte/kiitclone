// This is a static 4-page React redesign of the KIIT University website. It improves UI hierarchy, accessibility, navigation, image performance, and static interactivity. It is deployment-ready for Vercel and does not use any backend.
import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import QuickHelp from "./components/QuickHelp.jsx";

import Home from "./pages/Home.jsx";
import Programs from "./pages/Programs.jsx";
import Admissions from "./pages/Admissions.jsx";
import CampusPlacements from "./pages/CampusPlacements.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    // Smooth scroll to top on route changes (static SPA behavior).
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <Navbar />
      <main id="main" className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/campus-placements" element={<CampusPlacements />} />
        </Routes>
      </main>
      <Footer />
      <QuickHelp />
    </div>
  );
}
