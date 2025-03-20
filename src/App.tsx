import "./App.css";
import Features from "./components/Features";
import Hero from "./components/Hero";
import KeyFeatures from "./components/KeyFeatures";
import FeatureCard from "./components/FeatureCard";
import Investment from "./components/Investment";
import Revenue from "./components/Revenue";
import Opportunity from "./components/Opportunity";
import Roadmap from "./components/Roadmap";
import DigitalCommerce from "./components/DigitalCommerce";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <Hero />
      <Features />
      <KeyFeatures />
      <FeatureCard />
      <Investment />
      <Revenue />
      <Opportunity />
      <Roadmap />
      <DigitalCommerce />
      <Footer />
    </>
  );
};

export default App;
