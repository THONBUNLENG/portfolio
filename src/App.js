import React, { useEffect, Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";

// 1. Bootstrap CSS ត្រូវតែនៅខាងលើ Custom CSS ជានិច្ច
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import "./App.css";

// 2. Context & Layout Components
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ThreeBackground from "./components/ThreeBackground";

// 3. Lazy Load Pages (បង្កើនល្បឿន Load Website)
const SplashScreen = lazy(() => import("./components/MeScreen"));
const Home = lazy(() => import("./components/Home/Home"));
const BlogPage = lazy(() => import("./components/Blogs/BlogPage"));
const LanguagePage = lazy(() => import("./components/Language/LanguagePage"));

// Component ជំនួយ Scroll ទៅលើពេលប្តូរ Route (មិនរំខានដល់ Anchor #hash)
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, hash]);

  return null;
}

// Loading Spinner ស្រាលពេលកំពុង Load Page
function PageLoader() {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-black text-white">
      <div
        className="spinner-border text-danger"
        style={{ width: "3rem", height: "3rem", borderColor: "#e74c5e", borderRightColor: "transparent" }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <div key={location.pathname} className="page-transition-container flex-grow-1">
      <Suspense fallback={<PageLoader />}>
        <Routes location={location}>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/home" element={<Home />} />
          <Route path="/language" element={<LanguagePage />} />
          <Route path="/blogs/:blogId" element={<BlogPage />} />
          {/* បន្ថែម replace ដើម្បីកុំឱ្យជាប់ Bad History */}
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </Suspense>
    </div>
  );
}

function AppContent() {
  const location = useLocation();
  const isSplash = location.pathname === "/";

  return (
    <div className="App d-flex flex-column min-vh-100">
      {!isSplash && <ThreeBackground />}
      {!isSplash && <Navbar />}
      <ScrollToTop />
      <AnimatedRoutes />
      {!isSplash && <Footer />}
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <Router>
        <AppContent />
      </Router>
    </LanguageProvider>
  );
}

export default App;