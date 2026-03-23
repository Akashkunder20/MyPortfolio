import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // scroll speed (higher = slower, smoother)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easing curve
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

  return (
    <>
      <NavBar />
      <Home />
    </>
  );
}

export default App;
