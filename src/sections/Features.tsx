import { KeyFeatures } from "@/constants";

const Features = () => {
  return (
    <section className="padding space-y-10">
      <h2 className="text-center text-4xl font-bold">
        Your all-in-one solution for expense management
      </h2>
      <p className="text-center leading-loose">
        Our AI-powered app simplifies your financial life, helping you make
        informed decisions and achieve your financial goals.
      </p>
      {/* Key features grid */}
      <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3">
        {KeyFeatures.map((feature) => (
          <div
            className="flex flex-col items-center gap-4 rounded-xl p-4 text-center"
            key={feature.title}
          >
            <div className="flex items-center justify-center rounded-lg bg-primary">
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
