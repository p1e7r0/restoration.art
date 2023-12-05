import "./App.css";

import { useMediaQuery } from "@mui/material";
import { ScrollProvider } from "../common/ScrollProvider";
import Scrollable from "../common/Scrollable";
import { sectionsLandscape, sectionsPortrait } from "./sections";

function App() {
  const match = useMediaQuery("(max-width: 768px)");
  const sections = match ? sectionsPortrait : sectionsLandscape;

  return (
    <ScrollProvider sections={sections} key={`${match}`}>
      <Scrollable sections={sections} />
    </ScrollProvider>
  );
}

export default App;
