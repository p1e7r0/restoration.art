import "./showcase.css";

import { ImgComparisonSlider } from "@img-comparison-slider/react";
import { useScrollState } from "../../common/ScrollProvider";
import beforeImage from "./assets/img20221025_10040785_AFTER.jpg";
import afterImage from "./assets/img20221025_10040785_BEFORE.jpg";

const Showcase2 = () => {
  const section = useScrollState("showcase2", (section, relativeScroll, sectionTop) => {
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
    <div className="black">
      <section
        style={{
          position: section?.isSticky ? "sticky" : "relative",
          top: section?.top,
          zIndex: 1,
        }}
      >
        <ImgComparisonSlider value={(section?.scroll ?? 0) * 100} direction={"horizontal"} className="portfolio-comparison" handle={true}>
          <img slot="first" src={beforeImage} className="portfolio-image-to-compare" />
          <img slot="second" src={afterImage} className="portfolio-image-to-compare" />
        </ImgComparisonSlider>
      </section>
      <section />
    </div>
  );
};

export default Showcase2;
