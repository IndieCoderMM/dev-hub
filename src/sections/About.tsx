import { motion } from "framer-motion";

import TitleText from "@/components/TitleText";
import { Services } from "@/constants";
import { fadeIn } from "@/lib/motion";
import { HeroImg, HeroImg3 } from "@/assets/images";

const About = () => {
  return (
    <section className="padding-x max-container relative mx-auto py-12 lg:mt-44">
      <TitleText
        text="Transforming Financial Tracking into a Breeze"
        styles="text-center"
      />
      <p className="mt-10 text-center leading-loose">
        Taking control of your finances shouldn't feel overwhelming. CoinTrackr
        makes expense tracking and budget management easy.
      </p>
      {/* Services grid */}
      <div className="grid lg:grid-cols-2">
        <div className="mt-16 flex flex-col gap-8">
          {Services.map((service) => (
            <motion.div
              variants={fadeIn("right", "spring", 0.1, 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.5 }}
              className="flex flex-col items-center gap-4 rounded-xl border border-border bg-background p-8 lg:flex-row lg:py-4"
              key={service.title}
            >
              <div className="flex h-24 w-24 flex-shrink-0 items-center justify-center">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="flex flex-col text-center lg:text-left">
                <h3 className="mt-8 text-2xl font-bold lg:mt-0">
                  {service.title}
                </h3>
                <p className="mt-4">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="hidden h-full w-full xl:block">
          <img
            src={HeroImg}
            alt="Hero"
            className="h-full w-full object-contain object-center"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
