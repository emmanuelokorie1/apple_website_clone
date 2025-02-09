import Hero from "./components/Hero";
import HighLights from "./components/HighLights";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <h1 className="text-black">
      <Navbar />
      <Hero />
      <HighLights />
    </h1>
  );
}

export default App;
