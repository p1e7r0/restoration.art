import "./App.css";

import { Sections } from "../common/model/Section";
import Contacts from "../features/contacts/Contacts";
import HomeLandscape from "../features/hero/HomeLandscape";
import HomePortrait from "../features/hero/HomePortrait";
import HomePortrait2 from "../features/hero/HomePortrait2";
import Pricing from "../features/pricing/Pricing";
import Showcase1 from "../features/showcase/Showcase1";
import Showcase2 from "../features/showcase/Showcase2";
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
  {
    key: "showcase3",
    height: 2,
    element: <ShowCase3 />,
  },
  {
    key: "showcase1",
    height: 2,
    element: <Showcase1 />,
  },
  {
    key: "showcase2",
    height: 2,
    element: <Showcase2 />,
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
  // {
  //   key: "portfolio",
  //   height: 2,
  //   element: <Portfolio />,
  // },
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
