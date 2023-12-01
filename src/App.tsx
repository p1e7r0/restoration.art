import "./App.css";

import { useMediaQuery } from "@mui/material";
import { ScrollProvider } from "./common/ScrollProvider";
import Scrollable from "./common/Scrollable";
import { Sections } from "./common/model/Section";
import Contacts from "./features/contacts/Contacts";
import HomeLandscape from "./features/hero/HomeLandscape";
import HomePortrait from "./features/hero/HomePortrait";
import HomePortrait2 from "./features/hero/HomePortrait2";
import Portfolio from "./features/portfolio/Portfolio";
import Pricing from "./features/pricing/Pricing";

const sectionsPortrait: Sections = [
  {
    key: "hero",
    height: 1,
    element: <HomePortrait />,
  },
  {
    key: "hero2",
    height: 2,
    element: <HomePortrait2 />,
  },
  {
    key: "portfolio",
    height: 2,
    element: <Portfolio />,
  },
  {
    key: "pricing",
    height: 1,
    element: <Pricing />,
  },
  {
    key: "contacts",
    height: 1,
    element: <Contacts />,
  },
];

const sectionsLandscape: Sections = [
  {
    key: "hero",
    height: 2,
    element: <HomeLandscape />,
  },
  {
    key: "portfolio",
    height: 2,
    element: <Portfolio />,
  },
  {
    key: "pricing",
    height: 1,
    element: <Pricing />,
  },
  {
    key: "contacts",
    height: 1,
    element: <Contacts />,
  },
];

function App() {
  const match = useMediaQuery("(max-width: 768px)");
  const sections = match ? sectionsPortrait : sectionsLandscape;

  return (
    <ScrollProvider sections={sections}>
      <Scrollable sections={sections} />
    </ScrollProvider>
  );
}

export default App;
