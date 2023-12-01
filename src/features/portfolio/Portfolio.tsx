import { ImgComparisonSlider } from "@img-comparison-slider/react";
import { useScrollState } from "../../common/ScrollProvider";
import "./portfolio.css";

import { useMediaQuery } from "@mui/material";
import afterImage from "./assets/DR_20231114_gruppo extreme_DOPO.jpg";
import beforeImage from "./assets/DR_20231114_gruppo extreme_PRIMA.jpg";

const Portfolio = () => {
  const match = useMediaQuery("(max-width: 768px)");
  const offset = match ? 1 : 0;

  const section = useScrollState("portfolio", (section, relativeScroll, sectionTop) => {
    if (section < 2 + offset) {
      return {
        scroll: 0,
        isSticky: false,
        top: 0,
      };
    }
    if (section >= 2 + offset && section < 3 + offset) {
      return {
        scroll: relativeScroll(2 + offset),
        isSticky: true,
        top: 0,
      };
    }
    if (section >= 3 + offset && section < 4 + offset) {
      return {
        scroll: 1,
        isSticky: true,
        top: sectionTop(3 + offset),
      };
    }
    if (section >= 4 + offset) {
      return {
        scroll: 1,
        isSticky: false,
        top: 0,
      };
    }
  });

  return (
    <div className="black">
      <section
        style={{
          position: section?.isSticky ? "sticky" : "relative",
          top: section?.top,
          zIndex: 1,
        }}
      >
        <ImgComparisonSlider value={(1 - (section?.scroll ?? 0)) * 100} direction={"horizontal"} className="portfolio-comparison" handle={true}>
          <img slot="first" src={beforeImage} className="portfolio-image-to-compare" />
          <img slot="second" src={afterImage} className="portfolio-image-to-compare" />
        </ImgComparisonSlider>
      </section>
      <section />
    </div>
  );
};

export default Portfolio;
