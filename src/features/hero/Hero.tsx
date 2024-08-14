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

    const handleScroll = () => {
      const scrollPercent = window.scrollY / window.innerHeight;

      if (scrollPercent < 1) {
        beforeImage.style.height = `${100 - scrollPercent * 100}vh`;
        imagesContainer.style.position = "fixed";
        imagesContainer.style.top = "40px";
      } else {
        beforeImage.style.height = `0`;
        imagesContainer.style.position = "absolute";
        imagesContainer.style.top = "calc(100vh + 40px)";
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="hero">
      <div ref={imagesContainerRef} className="image-container">
        <div ref={beforeImageRef} className="before-image">
          <img src={before} alt="Before" />
        </div>
        <div className="after-image">
          <img src={after} alt="After" />
        </div>
      </div>
      <div className="placeholder" />
    </div>
  );
};

export default Hero;
