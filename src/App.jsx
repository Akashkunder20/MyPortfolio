import { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFading(true), 1500);
    const removeTimer = setTimeout(() => setLoading(false), 2000);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  return (
    <>
      {loading && (
        <div
          className={`fixed inset-0 z-[9999] flex items-center justify-center bg-gray-950 transition-opacity duration-500 ${
            fading ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <Loader />
        </div>
      )}
      <NavBar />
      <Home />
    </>
  );
}

export default App;