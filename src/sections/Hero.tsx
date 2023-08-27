import { motion } from "framer-motion";
import { GooglePlay, Apple } from "@/assets/icons";
import { HeroImg, HeroImg2, HeroImg3 } from "@/assets/images";
import AnimatedNumber from "@/components/AnimatedNumber";
import { Metrics } from "@/constants";
import { slideIn, staggerContainer } from "@/lib/motion";

const Hero = () => {
  return (
    <section className="padding-x hero-gradient relative min-h-screen bg-background py-20 lg:pt-40">
      <div className="max-container mx-auto grid place-items-center xl:grid-cols-2">
        <div className="padding-y flex flex-1 flex-col justify-center gap-10">
          <h1 className="text-5xl font-bold lg:text-7xl">
            AI-Powered Expense Tracker for Smarter Financial Management
          </h1>
          <h2 className="text-2xl leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            expedita aliquid animi distinctio similique minus obcaecati aliquam
            facere reprehenderit ea.
          </h2>
          {/* Download on google play button with outline rounded border */}
          <div className="flex flex-col items-start gap-4 lg:flex-row">
            <button
              type="button"
              className="flex min-w-[250px] items-center gap-4 rounded-md border-2 border-white px-8 py-1 text-white transition-all hover:translate-y-[-2px] hover:shadow-md hover:shadow-accent hover:brightness-110"
            >
              <img src={Apple} alt="Google Play" className="h-8 w-8" />

              <div className="flex flex-col">
                <span className="text-sm">Available on</span>
                <span className="text-lg">App Store</span>
              </div>
            </button>
            <button
              type="button"
              className="flex min-w-[250px] items-center gap-4 rounded-md border-2 border-white px-8 py-1 text-white transition-all hover:translate-y-[-2px] hover:shadow-md hover:shadow-accent hover:brightness-110"
            >
              <img src={GooglePlay} alt="Google Play" className="h-8 w-8" />
              <div className="flex flex-col">
                <span className="text-sm">Download on</span>
                <span className="text-lg">Google Play</span>
              </div>
            </button>
          </div>
        </div>
        {/* Image */}
        <div className="hidden xl:block">
          <img
            src={HeroImg2}
            alt="Hero"
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
      {/* Metric grid with four columns */}
      <motion.div
        variants={staggerContainer(0.1, 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: "all" }}
        className="bottom-0 left-1/2 mx-auto mt-20 grid gap-4 rounded-md bg-secondary/50 p-4 lg:absolute lg:w-[80%] lg:-translate-x-1/2 lg:translate-y-1/2 lg:grid-cols-4 lg:bg-accent/70"
      >
        {Metrics.map((metric) => (
          <motion.div
            variants={{
              show: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  type: "spring",
                },
              },
              hidden: {
                opacity: 0,
                y: 100,
              },
            }}
            key={metric.title}
            className="flex flex-col items-center gap-2 rounded-md bg-primary px-8 py-10 lg:bg-accent lg:py-16"
          >
            <div className="text-4xl font-bold lg:text-6xl">
              <AnimatedNumber value={metric.value} />
              <span className="text-2xl">{metric.unit}</span>
            </div>
            <span className="text-2xl capitalize">{metric.title}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Hero;
