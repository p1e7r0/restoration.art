import "./showcase.css";

import { ImgComparisonSlider } from "@img-comparison-slider/react";
import { useScrollState } from "../../common/ScrollProvider";
const beforeImage = "https://restoration.art/compare/1_before.jpg";
const afterImage = "https://restoration.art/compare/1_after.jpg";

const ShowCase3 = () => {
  const section = useScrollState("showcase3", (section, relativeScroll, sectionTop) => {
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
        <ImgComparisonSlider value={(1 - (section?.scroll ?? 0)) * 100} direction={"horizontal"} className="portfolio-comparison" handle={true}>
          <img slot="first" src={beforeImage} className="portfolio-image-to-compare" />
          <img slot="second" src={afterImage} className="portfolio-image-to-compare" />
        </ImgComparisonSlider>
      </section>
      <section />
    </div>
  );
};

export default ShowCase3;
