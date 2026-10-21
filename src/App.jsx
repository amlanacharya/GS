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
    const t = setTimeout(() => setLoading(false), 1600);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <AnimatePresence>{loading && <Loader key="loader" />}</AnimatePresence>
      <Nav />
      <main>
        <Hero />
        <Overview />
        <Itinerary />
        <Gallery />
        <Food />
        <Packing />
        <LoveNotes />
      </main>
      <Footer />
      <MusicToggle />
    </>
  );
}
