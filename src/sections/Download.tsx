import { motion } from "framer-motion";
import { GooglePlay, Apple } from "@/assets/icons";
import { SocialLinks } from "@/constants";
import { fadeIn, sphereVariant, staggerContainer } from "@/lib/motion";
import { CommunityImg } from "@/assets/images";

const Download = () => {
  return (
    <section
      id="download"
      className="padding grid place-items-center gap-4 bg-secondary xl:grid-cols-2"
    >
      <div className="hidden self-center rounded-md bg-primary p-8 xl:block">
        <img
          src={CommunityImg}
          alt="Hero"
          className="h-full w-auto object-contain"
        />
      </div>
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: false,
          amount: 0.25,
        }}
        className="w-full space-y-14 lg:w-[80%]"
      >
        <h2 className="text-4xl font-bold uppercase">
          Get Billio and join our community
        </h2>
        {/* socials icons */}
        <motion.ul
          variants={staggerContainer(0.1, 0.9)}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.25,
          }}
          className="flex w-full flex-wrap gap-2"
        >
          {SocialLinks.map(({ title, href, icon: Icon }, index) => (
            <motion.li
              variants={sphereVariant("left", 0.5 * index, 0.85)}
              whileHover={{ y: -5 }}
              key={title}
            >
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className=" flex h-16 w-16 items-center justify-center rounded-full bg-primary p-2"
              >
                <Icon size={30} />
                <span className="sr-only">{title}</span>
              </a>
            </motion.li>
          ))}
        </motion.ul>
        <p className="text-2xl font-medium">
          Download our app now and get started.
        </p>
        {/* Download buttons */}
        <div className="flex flex-col items-start gap-4 lg:flex-row">
          <button
            type="button"
            className="flex min-w-[250px] items-center gap-4 rounded-md border-2 border-white px-8 py-2 text-white transition-all hover:translate-y-[-2px] hover:shadow-md hover:shadow-accent hover:brightness-110"
          >
            <img src={Apple} alt="Google Play" className="h-8 w-8" />

            <div className="flex flex-col">
              <span className="text-sm">Available on</span>
              <span className="text-lg">App Store</span>
            </div>
          </button>
          <button
            type="button"
            className="flex min-w-[250px] items-center gap-4 rounded-md border-2 border-white px-8 py-2 text-white transition-all hover:translate-y-[-2px] hover:shadow-md hover:shadow-accent hover:brightness-110"
          >
            <img src={GooglePlay} alt="Google Play" className="h-8 w-8" />
            <div className="flex flex-col">
              <span className="text-sm">Download on</span>
              <span className="text-lg">Google Play</span>
            </div>
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Download;
