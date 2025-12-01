import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import { ScrollRestoration } from "react-router-dom";
import Collaboration from "./components/Collaboration";
import Services from "./components/Services";
import Pricing from "./components/Pricing";

function App() {
  return (
    <div className="overflow-hidden">
      <ScrollRestoration />
      <Header />
      <Hero />
      <Features />
      <Collaboration />
      <Services />
      <Pricing />
    </div>
  );
}

export default App;
