import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import { ScrollRestoration } from "react-router-dom";
import Collaboration from "./components/Collaboration";

function App() {
  return (
    <div className="overflow-hidden">
      <ScrollRestoration />
      <Header />
      <Hero />
      <Features />
      <Collaboration />
    </div>
  );
}

export default App;
