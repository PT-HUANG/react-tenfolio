import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type QuestionProps = {
  question: string;
  answer: string;
};

function Question({ question, answer }: QuestionProps) {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-[90%] max-w-[400px] md:max-w-[600px] m-2 md:mx-6"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger
          className="
        text-white font-bold p-3 bg-[#490C86DE] rounded-sm items-center
        md:text-lg md:p-5
        "
        >
          {question}
        </AccordionTrigger>
        <AccordionContent
          className="
        text-white font-bold bg-[#241d41] mt-2 p-3 rounded-sm
        md:text-lg md:p-5
        "
        >
          {answer}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default Question;
