import { useEffect, useRef } from "react";
import "./Hero.css";
import after from "./assets/20231103_Portfolio_ragazzo_square_DOPO.jpg";
import before from "./assets/20231103_Portfolio_ragazzo_square_PRIMA.jpg";

const Hero = () => {
  const imagesContainerRef = useRef<HTMLDivElement>(null);
  const beforeImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const beforeImage = beforeImageRef.current;
    const imagesContainer = imagesContainerRef.current;
    if (!beforeImage || !imagesContainer) return;

    const originalScrollPercent = window.scrollY / window.innerHeight;
    if (originalScrollPercent <= 1) {
      beforeImage.style.height = `${100 - originalScrollPercent * 100}vh`;
      imagesContainer.style.position = "fixed";
      imagesContainer.style.top = "0";
    } else {
      beforeImage.style.height = `0vh`;
      imagesContainer.style.position = "absolute";
      imagesContainer.style.top = "100%";
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // // Calcola quanto scroll è necessario per rivelare completamente l'immagine "after"
      const maxScroll = windowHeight;

      // // Calcola la percentuale dello scroll
      const scrollPercent = scrollPosition / maxScroll;

      // // Imposta l'altezza della parte visibile dell'immagine "after"
      beforeImage.style.height = `${100 - scrollPercent * 100}vh`;
      if (scrollPercent < 1) {
        imagesContainer.style.position = "fixed";
        imagesContainer.style.top = "0";
      } else {
        imagesContainer.style.position = "absolute";
        imagesContainer.style.top = "100%";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="hero">
      <div ref={imagesContainerRef} className="image-container">
        <div ref={beforeImageRef} className="before-image">
          <img src={before} alt="Before Image" />
        </div>
        <div className="after-image">
          <img src={after} alt="After Image" />
        </div>
      </div>
      <div className="empty"></div>
      <div className="text">
        <h1>Before & After</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et pellentesque odio. Donec id quam in ex tincidunt lacinia. Nullam facilisis, risus ac tincidunt fermentum,
          libero enim tincidunt nunc, eget suscipit nisl nunc ac nunc. Donec id quam in ex tincidunt lacinia. Nullam facilisis, risus ac tincidunt fermentum, libero enim tincidunt
          nunc, eget suscipit nisl nunc ac nunc.
        </p>
      </div>
    </div>
  );
};

export default Hero;
