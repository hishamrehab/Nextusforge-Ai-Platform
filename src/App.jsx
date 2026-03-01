import React, { useEffect, useRef, useState, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import { AnimatePresence } from "framer-motion";

// Existing Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Pricing from "./pages/Pricing";

// New Enterprise Pages (Lazy Loaded)
const Services = lazy(() => import("./pages/Services"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const About = lazy(() => import("./pages/About"));
const Team = lazy(() => import("./pages/Team"));
const TeamProfile = lazy(() => import("./pages/TeamProfile"));
const Careers = lazy(() => import("./pages/Careers"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogDetail = lazy(() => import("./pages/BlogDetail"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const Work = lazy(() => import("./pages/Work"));
const CaseStudyDetail = lazy(() => import("./pages/CaseStudyDetail"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Contact = lazy(() => import("./pages/Contact"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const Changelog = lazy(() => import("./pages/Changelog"));
const Status = lazy(() => import("./pages/Status"));
const Docs = lazy(() => import("./pages/Docs"));

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
    <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const InnerApp = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark",
  );
  const location = useLocation();

  const dotRef = useRef(null);
  const outlineRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const position = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    document.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      position.current.x += (mouse.current.x - position.current.x) * 0.1;
      position.current.y += (mouse.current.y - position.current.y) * 0.1;

      if (dotRef.current && outlineRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.current.x - 6}px, ${mouse.current.y - 6}px , 0)`;
        outlineRef.current.style.transform = `translate3d(${position.current.x - 20}px, ${position.current.y - 20}px , 0)`;
      }
      requestAnimationFrame(animate);
    };
    animate();

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [theme]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="dark:bg-[#050B14] min-h-screen relative selection:bg-primary selection:text-white transition-colors duration-500">
      <Navbar theme={theme} setTheme={setTheme} />

      <main className="min-h-[70vh]">
        <Suspense fallback={<PageLoader />}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              {/* Main Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:slug" element={<ServiceDetail />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/our-work" element={<Work />} />
              <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/team" element={<Team />} />
              <Route path="/team/:slug" element={<TeamProfile />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogDetail />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/changelog" element={<Changelog />} />
              <Route path="/status" element={<Status />} />
              <Route path="/docs" element={<Docs />} />

              {/* Auth Routes */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />

              {/* Protected Routes */}
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </main>

      <Footer theme={theme} setTheme={setTheme} />

      {/* Custom Cursor */}
      <div
        ref={outlineRef}
        className="fixed top-0 left-0 h-10 w-10 rounded-full border border-primary pointer-events-none z-[9999] hidden lg:block"
        style={{ transition: "transform 0.1s ease-out" }}
      ></div>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 h-3 w-3 rounded-full bg-primary pointer-events-none z-[9999] hidden lg:block"
      ></div>
    </div>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <InnerApp />
      </Router>
    </AuthProvider>
  );
};

export default App;
