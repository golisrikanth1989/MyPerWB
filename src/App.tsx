import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Learning from "./pages/Learning";

// Vite base already carries the GitHub Pages repo prefix (e.g. "/MyPerWB/"),
// so deriving basename from it keeps routing correct without hardcoding it twice.
const basename = import.meta.env.BASE_URL.replace(/\/$/, "") || "/";

function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) {
        requestAnimationFrame(() => el.scrollIntoView({ behavior: "smooth" }));
        return;
      }
    }
    window.scrollTo({ top: 0 });
  }, [location.pathname, location.hash]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter basename={basename}>
      <div className="min-h-screen bg-paper">
        <ScrollManager />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/learning" element={<Learning />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
