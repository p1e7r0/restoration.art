import HomeLandscape from "./HomeLandscape";
import HomePortrait from "./HomePortrait";
import "./home.css";

import { useMediaQuery } from "@mui/material";

const Home = () => {
  const match = useMediaQuery("(max-width: 768px)");

  if (match) {
    return <HomePortrait />;
  }

  return <HomeLandscape />;
};

export default Home;
