import { useEffect, useRef } from "react";
import after from "./assets/20231103_Portfolio_ragazzo_square_DOPO.jpg";
import before from "./assets/20231103_Portfolio_ragazzo_square_PRIMA.jpg";
import { useMediaQuery } from "@mui/material";
import HeroTitle from "./HeroTitle";
import { headerHeight } from "../../app/configuration";

const HeroPortrait = () => {
  const imagesContainerRef = useRef<HTMLDivElement>(null);
  const beforeImageRef = useRef<HTMLDivElement>(null);

  const matches = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    const beforeImage = beforeImageRef.current;
    const imagesContainer = imagesContainerRef.current;
    if (!beforeImage || !imagesContainer) return;

    const handleScroll = () => {
      const scrollPercent = window.scrollY / (window.innerHeight - headerHeight);

      if (scrollPercent < 1) {
        beforeImage.style.height = `100vh`;
        imagesContainer.style.position = "absolute";
        imagesContainer.style.top = "100vh";
      } else if (scrollPercent < 2) {
        const relativeScroll = scrollPercent - 1;
        beforeImage.style.height = `${100 - relativeScroll * 100}vh`;
        imagesContainer.style.position = "fixed";
        imagesContainer.style.top = `${headerHeight}px`;
      } else {
        beforeImage.style.height = `0`;
        imagesContainer.style.position = "absolute";
        imagesContainer.style.top = `calc(200vh - ${headerHeight}px)`;
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [matches]);

  return (
    <div className="hero">
      <HeroTitle />
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

export default HeroPortrait;
