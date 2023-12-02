import "./App.css";

import { Sections } from "../common/model/Section";
import Contacts from "../features/contacts/Contacts";
import HomeLandscape from "../features/hero/HomeLandscape";
import HomePortrait from "../features/hero/HomePortrait";
import HomePortrait2 from "../features/hero/HomePortrait2";
import Portfolio from "../features/portfolio/Portfolio";
import Pricing from "../features/pricing/Pricing";
import ShowCase3 from "../features/showcase/Showcase3";

export const sectionsPortrait: Sections = [
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
  // {
  //   key: "showcase1",
  //   height: 2,
  //   element: <ShowCase1 />,
  // },
  // {
  //   key: "showcase2",
  //   height: 2,
  //   element: <ShowCase2 />,
  // },
  {
    key: "showcase3",
    height: 2,
    element: <ShowCase3 />,
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

export const sectionsLandscape: Sections = [
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

export default sectionsPortrait;
