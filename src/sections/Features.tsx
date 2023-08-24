const keyFeatures = [
  {
    title: "Smart Receipt Scanner",
    description:
      "Snap photos of receipts, and our AI extracts details and categorizes expenses for you.",
  },
  {
    title: "Budgeting Made Easy",
    description:
      "AI analyzes your finances, offers personalized budget recommendations, and sends real-time alerts.",
  },
  {
    title: "Expense Categorization",
    description:
      "AI automatically categorizes expenses, saving you time and keeping your records organized",
  },
];

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
      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
        {keyFeatures.map((feature) => (
          <div
            className="flex flex-col items-center rounded-xl border border-blue-100 p-8"
            key={feature.title}
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
              <img src="/images/overview/icon-1.svg" alt="" />
            </div>
            <h3 className="mt-8 text-2xl font-bold">{feature.title}</h3>
            <p className="mt-4 text-center">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
