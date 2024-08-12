import { ImgComparisonSlider } from "@img-comparison-slider/react";
import after from "./assets/20231103_Portfolio_ragazzo_square_DOPO.jpg";
import before from "./assets/20231103_Portfolio_ragazzo_square_PRIMA.jpg";
import { useEffect, useState } from "react";

const HeroPortrait = () => {
  const [section, setSection] = useState({
    scroll: 0,
    isSticky: false,
    top: 0,
  });

  useEffect(() => {
    const onScroll = () => {
      // scroll must be offset by 100vh

      const scroll = window.scrollY / window.innerHeight - 1;
      const isSticky = scroll <= 2;
      const top = scroll <= 1 ? 0 : -(scroll - 1) * window.innerHeight;

      if (scroll > 2) {
        setSection({
          scroll: 2,
          isSticky: false,
          top: -window.innerHeight,
        });

        return;
      }

      setSection({
        scroll,
        isSticky,
        top,
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="hero-column-1">
        <div className="hero-title-wrapper">
          <h1 className="hero-title">Revive Your Memories</h1>
          <p className="hero-subtitle">Preserving the Past, Enhancing the Present</p>
          <a href="#contacts" className="hero-button">
            Get Started
          </a>
        </div>
      </div>
      <div
        className="hero-portrait gray"
        style={{
          position: section?.isSticky ? "sticky" : "relative",
          top: section?.top,
          // zIndex: 2,
        }}
      >
        <div className="hero-column-2">
          <ImgComparisonSlider value={(1 - (section?.scroll ?? 0)) * 100} direction={"vertical"} className="comparator" handle={true}>
            <img alt="first" slot="first" src={before} className="hero-image-to-compare" />
            <img alt="second" slot="second" src={after} className="hero-image-to-compare" />
          </ImgComparisonSlider>
        </div>
      </div>
      <section />
      <section className="placeholder-section" />
    </>
  );
};

export default HeroPortrait;
