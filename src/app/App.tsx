import Contacts from "../features/contact/Contacts";
import Header from "../features/header/Header";
import Hero from "../features/hero/Hero";
import Portfolio from "../features/portfolio/Portfolio";
import Pricing from "../features/pricing/Pricing";
import "./App.css";
import { cssVariables } from "./configuration";

function App() {
  return (
    <div className="app" style={cssVariables}>
      <Header />
      <Hero />
      <Portfolio />
      <Pricing />
      <Contacts />
    </div>
  );
}

export default App;
