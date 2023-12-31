import "./home.css";

import { ImgComparisonSlider } from "@img-comparison-slider/react";
import { useScrollState } from "../../common/ScrollProvider";
import after from "./assets/20231103_Portfolio_ragazzo_square_DOPO.jpg";
import before from "./assets/20231103_Portfolio_ragazzo_square_PRIMA.jpg";

const HomeLandscape = () => {
  const section = useScrollState("hero", (section, relativeScroll, sectionTop) => {
    switch (section) {
      case 0:
        return {
          scroll: relativeScroll(0),
          isSticky: true,
          top: 0,
        };
      case 1:
        return {
          scroll: 1,
          isSticky: true,
          top: sectionTop(1),
        };
      default:
        return {
          scroll: section < 0 ? 0 : 1,
          isSticky: false,
          top: 0,
        };
    }
  });

  return (
    <>
      <div
        className="hero-landscape gray"
        style={{
          position: section?.isSticky ? "sticky" : "relative",
          top: section?.top,
          zIndex: 2,
        }}
      >
        <div className="hero-column-1">
          <div className="hero-title-wrapper">
            <h1 className="hero-title">Revive Your Memories</h1>
            <p className="hero-subtitle">Preserving the Past, Enhancing the Present</p>
            <a href="#contacts" className="hero-button">
              Get Started
            </a>
          </div>
        </div>
        <div className="hero-column-2">
          <ImgComparisonSlider value={(1 - (section?.scroll ?? 0)) * 100} direction={"vertical"} className="comparator" handle={true}>
            <img slot="first" src={before} className="hero-image-to-compare" />
            <img slot="second" src={after} className="hero-image-to-compare" />
          </ImgComparisonSlider>
        </div>
      </div>
      <section />
    </>
  );
};

export default HomeLandscape;
