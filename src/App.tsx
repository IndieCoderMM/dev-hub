import About from "./sections/About";
import Download from "./sections/Download";
import FAQ from "./sections/FAQ";
import Features from "./sections/Features";
import Footer from "./sections/Footer";
import Pricing from "./sections/Pricing";
import Hero from "./sections/Hero";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <main className="font-montserrat min-h-screen bg-background text-white">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Download />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
};

export default App;
