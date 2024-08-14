import { useMediaQuery } from "@mui/material";
import HeroPortrait from "./HeroPortrait";
import HeroLandscape from "./HeroLandscape";
import "./Hero.css";

const Hero = () => {
  const match = useMediaQuery("(max-width: 600px)");

  if (match) {
    return <HeroPortrait />;
  }

  return <HeroLandscape />;
};

export default Hero;
