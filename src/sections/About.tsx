import { motion } from "framer-motion";

import TitleText from "@/components/TitleText";
import { Services } from "@/constants";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { ExpenseManagement } from "@/assets/images";

const About = () => {
  return (
    <section
      id="about"
      className="padding-x max-container relative mx-auto py-12 lg:mt-44"
    >
      <TitleText
        text="Transforming Financial Tracking into a Breeze"
        styles="text-center"
      />
      <p className="mt-10 text-center leading-loose">
        Taking control of your finances shouldn't feel overwhelming. Billio
        makes expense tracking and budget management easy.
      </p>
      {/* Services grid */}
      <div className="grid xl:grid-cols-2">
        <motion.div
          variants={staggerContainer(0.5, 0)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.25 }}
          className="mt-16 flex flex-col gap-8"
        >
          {Services.map((service, index) => (
            <motion.div
              variants={fadeIn("right", "spring", 0.3 * index, 0.75)}
              className="flex flex-col items-center gap-4 rounded-xl border border-border bg-background p-8 xl:flex-row xl:py-4"
              key={service.title}
            >
              <div className="flex h-24 w-24 flex-shrink-0 items-center justify-center">
                <img
                  src={service.image}
                  alt={service.title}
                  width={500}
                  height={500}
                />
              </div>
              <div className="flex flex-col text-center xl:text-left">
                <h3 className="mt-8 text-2xl font-bold xl:mt-0">
                  {service.title}
                </h3>
                <p className="mt-4">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 0.75)}
          initial="hidden"
          whileInView={"show"}
          className="hidden h-full w-full xl:block"
        >
          <img
            src={ExpenseManagement}
            alt="Expense Management"
            className="h-full w-full object-contain object-center"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
