import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "./components/Loader.jsx";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Overview from "./components/Overview.jsx";
import Itinerary from "./components/Itinerary.jsx";
import Gallery from "./components/Gallery.jsx";
import Food from "./components/Food.jsx";
import Packing from "./components/Packing.jsx";
import LoveNotes from "./components/LoveNotes.jsx";
import Footer from "./components/Footer.jsx";
import MusicToggle from "./components/MusicToggle.jsx";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const MIN_MS = 700;
    const MAX_MS = 1600;
    const start = performance.now();
    let done = false;
    let minTimer;
    const finish = () => {
      if (done) return;
      done = true;
      setLoading(false);
    };
    const maxTimer = setTimeout(finish, MAX_MS);
    const fontsReady = document.fonts?.ready ?? Promise.resolve();
    fontsReady.then(() => {
      const wait = Math.max(0, MIN_MS - (performance.now() - start));
      minTimer = setTimeout(finish, wait);
    });
    return () => {
      clearTimeout(maxTimer);
      clearTimeout(minTimer);
    };
  }, []);

  return (
    <>
      <AnimatePresence>{loading && <Loader key="loader" />}</AnimatePresence>
      <Nav />
      <main>
        <Hero />
        <Overview />
        <Itinerary />
        <LoveNotes />
        <Gallery />
        <Food />
        <Packing />
      </main>
      <Footer />
      <MusicToggle />
    </>
  );
}
