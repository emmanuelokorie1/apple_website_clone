import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HighLights from "./components/HighLights";
import HowItWorks from "./components/HowItWorks";
import Model from "./components/Model";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <h1 className="bg-black text-white">
      <Navbar />
      <Hero />
      <HighLights />
      <Model />
      <Feature />
      <HowItWorks />
      <Footer />
    </h1>
  );
}

export default App;
