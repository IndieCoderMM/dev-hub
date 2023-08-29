import { motion } from "framer-motion";
import { KeyFeatures } from "@/constants";
import { fadeIn, staggerContainer } from "@/lib/motion";
import TitleText from "@/components/TitleText";

const Features = () => {
  return (
    <section id="features" className="padding max-container mx-auto space-y-10">
      <TitleText
        text="Your all-in-one solution for expense management"
        styles="text-center"
      />
      <p className="text-center leading-loose">
        Our AI-powered app simplifies your financial life, helping you make
        informed decisions and achieve your financial goals.
      </p>
      {/* Key features grid */}
      <div className="mt-16 grid grid-cols-1 gap-12 xl:grid-cols-3">
        {KeyFeatures.map((feature, index) => (
          <motion.div
            variants={fadeIn("up", "tween", 0.3 * index, 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="flex flex-col items-center gap-4 rounded-xl p-4 text-center"
            key={feature.title}
          >
            <div className="flex h-auto w-full items-center justify-center rounded-lg bg-primary md:w-auto xl:min-h-[420px]">
              <img
                src={feature.image}
                alt={feature.title}
                width={500}
                height={500}
                className="max-w-full object-contain"
              />
            </div>
            <h3 className="text-2xl font-bold">{feature.title}</h3>
            <p className="text-center">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
