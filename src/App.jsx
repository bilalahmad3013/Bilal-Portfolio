import { useEffect, useState } from "react";
import "./app.scss";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import Wish from "./components/Wish/Wish";

const App = () => {

  const [time, setTimer] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setTimer(false);
    }, 3500)
  }, [])

  return (
    <>
      {time ? <Wish />
       :
        <div>
          <Cursor />
          <section id="Homepage">
            <Navbar />
            <Hero />
          </section>
          <section id="Services">
            <Parallax type="services" />
          </section>
          <section>
            <Services />
          </section>
          <section id="Portfolio">
            <Parallax type="portfolio" />
          </section>
          <Portfolio />
          <section id="Contact">
            <Contact />
          </section>
        </div>
      }
    </>
  );
};

export default App;
