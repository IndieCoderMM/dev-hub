import About from "./sections/About";
import Download from "./sections/Download";
import FAQ from "./sections/FAQ";
import Features from "./sections/Features";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Navbar from "./components/Navbar";
import Guide from "./sections/Guide";
import { Toaster } from "./components/ui/toaster";
import ScrollButton from "./components/ScrollButton";

const App = () => {
  return (
    <main className="min-h-screen bg-background font-josefin text-white">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Download />
      <Guide />
      <FAQ />
      <Footer />
      <Toaster />
      <ScrollButton />
    </main>
  );
};

export default App;
