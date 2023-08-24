const services = [
  {
    title: "Track Expense Effectively",
    description:
      "Effortlessly track your expenses with our intuitive interface. From receipts to digital transactions, Our app keeps everything organized.",
  },
  {
    title: "Optimize Your Budget",
    description:
      "Use Predictive Budgeting to receive personalized insights into your spending habits. Stay on budget and work towards your financial goals.",
  },
  {
    title: "Anytime, Anywhere",
    description:
      "Access CoinTrackr from your smartphone or computer. Manage your finances on the go and have your data synchronized across devices.",
  },
];

const About = () => {
  return (
    <section className="padding space-y-10">
      <h2 className="text-center text-4xl font-bold">
        Transforming Financial Tracking into a Breeze
      </h2>
      <p className="text-center leading-loose">
        Taking control of your finances shouldn't feel overwhelming. CoinTrackr
        makes expense tracking and budget management easy.
      </p>
      {/* Services grid */}
      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
        {services.map((service) => (
          <div
            className="flex flex-col items-center rounded-xl border border-blue-100 p-8"
            key={service.title}
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
              <img src="/images/overview/icon-1.svg" alt="" />
            </div>
            <h3 className="mt-8 text-2xl font-bold">{service.title}</h3>
            <p className="mt-4 text-center">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
