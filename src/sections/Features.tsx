import { motion } from "framer-motion";
import { KeyFeatures } from "@/constants";
import { fadeIn } from "@/lib/motion";
import TitleText from "@/components/TitleText";

const Features = () => {
  return (
    <section className="padding max-container mx-auto space-y-10">
      <TitleText
        text="Your all-in-one solution for expense management"
        styles="text-center"
      />
      <p className="text-center leading-loose">
        Our AI-powered app simplifies your financial life, helping you make
        informed decisions and achieve your financial goals.
      </p>
      {/* Key features grid */}
      <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3">
        {KeyFeatures.map((feature) => (
          <motion.div
            variants={fadeIn("up", "tween", 0.1, 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.25, once: true }}
            className="flex flex-col items-center gap-4 rounded-xl p-4 text-center"
            key={feature.title}
          >
            <div className="flex h-auto w-full items-center justify-center rounded-lg bg-primary lg:h-full">
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
