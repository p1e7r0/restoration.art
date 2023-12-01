import "./home.css";

import { ImgComparisonSlider } from "@img-comparison-slider/react";
import { useScrollState } from "../../common/ScrollProvider";
import after from "./assets/20231103_Portfolio_ragazzo_square_DOPO.jpg";
import before from "./assets/20231103_Portfolio_ragazzo_square_PRIMA.jpg";

const HomePortrait2 = () => {
  const section = useScrollState("hero", (section, relativeScroll, sectionTop) => {
    switch (section) {
      case 0:
        return {
          scroll: 0,
          isSticky: true,
          top: 0,
        };
      case 1:
        return {
          scroll: relativeScroll(1),
          isSticky: true,
          top: 0,
        };
      case 2:
        return {
          scroll: 2,
          isSticky: true,
          top: sectionTop(2),
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
    <div
      style={{
        position: section?.isSticky ? "sticky" : "relative",
        top: section?.top,
        zIndex: 2,
      }}
    >
      <div className="hero-column-2">
        <ImgComparisonSlider value={(1 - (section?.scroll ?? 0)) * 100} direction={"vertical"} className="comparator" handle={true}>
          <img slot="first" src={before} className="hero-image-to-compare" />
          <img slot="second" src={after} className="hero-image-to-compare" />
        </ImgComparisonSlider>
      </div>
      <section />
    </div>
  );
};

export default HomePortrait2;
