import FaqAccordion from "@/components/FaqAccordion";
import { FAQ as faq } from "@/constants";

const FAQ = () => {
  return (
    <section className="padding space-y-10">
      <h2 className="text-center text-4xl font-bold">
        Frequently Asked Questions
      </h2>
      <p className="text-center leading-loose">
        Here are some of our FAQs. If you have any other questions you'd like
        answered please feel free to email us.
      </p>

      <div className="flex flex-col gap-4">
        {faq.map((item, index) => (
          <FaqAccordion
            key={index}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
