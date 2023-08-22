import About from "./sections/About";
import Download from "./sections/Download";
import FAQ from "./sections/FAQ";
import FeatureFlat from "./sections/FeatureFlat";
import FeatureStack from "./sections/FeatureStack";
import Footer from "./sections/Footer";
import Pricing from "./sections/Pricing";
import Hero from "./sections/Hero";
import Overview from "./sections/Overview";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <main className="bg-background min-h-screen font-montserrat text-white">
      <Navbar />
      <Hero />
      <Overview />
      <About />
      <FeatureStack />
      <FeatureFlat />
      <Download />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
};

export default App;
