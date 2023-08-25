import { motion } from "framer-motion";

import {
  AtmCard,
  BudgetInsight,
  MobileReceipt,
  VerifiedAccount,
} from "@/assets/icons";

const steps = [
  {
    title: "Sign Up",
    description: "Create your CoinTrackr account in seconds.",
    image: VerifiedAccount,
  },
  {
    title: "Connect your accounts",
    description: "Link your bank and credit card accounts to CoinTrackr.",
    image: AtmCard,
  },
  {
    title: "Start tracking",
    description:
      "Snap photos of receipts, and let our AI handle the rest. Monitor your expenses and budget effortlessly.",
    image: MobileReceipt,
  },
  {
    title: "Get Insights",
    description:
      "Explore personalized financial insights, set goals, and take control of your financial future.",
    image: BudgetInsight,
  },
];

const Guide = () => {
  return (
    <section className="padding space-y-8">
      <h2 className="text-center text-4xl font-bold">Here's how it works</h2>
      <p className="text-center leading-loose">
        CoinTrackr is the only app you need to manage your finances.
      </p>
      {/* Steps grid */}
      <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <div
            className="flex flex-col items-center p-8 text-center"
            key={step.title}
          >
            <div className="relative flex h-[200px] w-[200px] items-center justify-center rounded-full border-2 border-border">
              <motion.img
                initial={{ scale: 0 }}
                transition={{
                  duration: 0.75,
                  type: "spring",
                }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                src={step.image}
                alt={step.title}
              />
              <div className="absolute -left-12 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-accent">
                <span className="text-xl font-bold text-white">
                  {index + 1}
                </span>
              </div>
            </div>
            <h3 className="mt-8 text-2xl font-bold">{step.title}</h3>
            <p className="mt-4 text-center">{step.description}</p>
          </div>
        ))}
      </div>
      {/* Embed youtube video */}
      <div className="relative rounded-md">
        <iframe
          width="560"
          height="315"
          className="max-w-full"
          src="https://www.youtube.com/embed/KCrXgy8qtjM?si=pQ7IYlwwVAvDSBxo"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default Guide;
