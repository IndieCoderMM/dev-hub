import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqAccordion = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  return (
    <div className="rounded-md bg-primary px-4 py-2 lg:px-10 lg:py-4">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-xl">{question}</AccordionTrigger>
          <AccordionContent className="text-lg">{answer}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FaqAccordion;
