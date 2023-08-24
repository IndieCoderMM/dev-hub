import { Metrics } from "@/constants";

const Hero = () => {
  return (
    <section className="padding flex min-h-screen flex-col gap-10">
      <h1 className="text-6xl font-bold">
        Master Your Finances with CoinTrackr
      </h1>
      <h2 className="text-2xl leading-relaxed">
        The AI-Powered Expense Tracker for Smarter Financial Management.
      </h2>
      {/* Download on google play button with outline rounded border */}
      <div className="flex flex-col items-start gap-4 lg:flex-row">
        <button
          type="button"
          className="flex min-w-[200px] flex-col rounded-md border-2 border-white px-8 py-1 text-white hover:bg-white hover:text-blue-500"
        >
          <span className="text-sm">Download on</span>
          <span className="text-lg">Google Play</span>
        </button>
        <button
          type="button"
          className="flex min-w-[200px] flex-col rounded-md border-2 border-white px-8 py-1 text-white hover:bg-white hover:text-blue-500"
        >
          <span className="text-sm">Download on</span>
          <span className="text-lg">Google Play</span>
        </button>
      </div>
      {/* Metric grid with four columns */}
      <div className="mt-20 grid gap-4 rounded-md bg-primary p-4 lg:grid-cols-4">
        {Metrics.map((metric) => (
          <div
            key={metric.title}
            className="flex flex-col items-center gap-8 rounded-md bg-blue-500 px-8 py-10"
          >
            <span className="text-4xl font-bold">{metric.value}</span>
            <span className="text-2xl capitalize">{metric.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
