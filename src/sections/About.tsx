import { motion } from "framer-motion";

import TitleText from "@/components/TitleText";
import { Services } from "@/constants";
import { fadeIn } from "@/lib/motion";

const About = () => {
  return (
    <section className="padding space-y-10">
      <TitleText
        text="Transforming Financial Tracking into a Breeze"
        styles="text-center"
      />
      <p className="text-center leading-loose">
        Taking control of your finances shouldn't feel overwhelming. CoinTrackr
        makes expense tracking and budget management easy.
      </p>
      {/* Services grid */}
      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
        {Services.map((service) => (
          <motion.div
            variants={fadeIn("right", "spring", 0.1, 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.5 }}
            className="flex flex-col items-center rounded-xl border border-border p-8 text-center"
            key={service.title}
          >
            <div className="flex h-24 w-24 items-center justify-center">
              <img src={service.image} alt={service.title} />
            </div>
            <h3 className="mt-8 text-2xl font-bold">{service.title}</h3>
            <p className="mt-4 text-center">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
