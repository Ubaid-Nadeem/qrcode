import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navbar from "../component/navbar/navbar";

export default function Faq() {
  return (
    <div>
      <Navbar />
      <div className="w-full p-5 md:w-[70%] m-auto mt-20">
        <h1 className="text-3xl font-bold text-center mt-10">FAQs</h1>
        <p className="text-[gray] text-center p-5 mb-10">
          If you have any questions that you can't answer through our FAQs,
          don't hesitate to contact our team.
        </p>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="hover:no-underline text-xl">
              Is it accessible
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="hover:no-underline text-xl">
              Is it accessible
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>{" "}
          <AccordionItem value="item-3">
            <AccordionTrigger className="hover:no-underline text-xl">
              Is it accessible
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>{" "}
          <AccordionItem value="item-4">
            <AccordionTrigger className="hover:no-underline text-xl">
              Is it accessible
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>{" "}
          <AccordionItem value="item-5">
            <AccordionTrigger className="hover:no-underline text-xl">
              Is it accessible
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
