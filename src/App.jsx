import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import { ScrollRestoration } from "react-router-dom";

function App() {
  return (
    <div className="overflow-hidden">
      <ScrollRestoration />
      <Header />
      <Hero />
      <Features />
    </div>
  );
}

export default App;
