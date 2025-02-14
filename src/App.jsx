import Hero from "./components/Hero";
import HighLights from "./components/HighLights";
import Model from "./components/Model";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <h1 className="bg-black text-white">
      <Navbar />
      <Hero />
      <HighLights />
      <Model />
    </h1>
  );
}

export default App;
