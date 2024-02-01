import Image from "next/image";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { ArrowRight } from "lucide-react";

const FifthSection = () => {
  return (
    <section className="md:flex justify-center items-center py-20 space-y-10 md:space-x-20 bg-[#28282B]">
      <div className="flex flex-col space-y-6 px-10 text-gray-200 md:w-1/3">
        <div className="text-xl">STREAMLINE YOUR WORK AND PROCESSES</div>
        <div className="text-4xl">Prioritize revenue-driving work</div>
        <div className="text-xl">
          Connect what needs to get done, who is responsible, and how to get it
          done.
        </div>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-blue-400">
              Automate your workflows
            </AccordionTrigger>
            <AccordionContent className="border-b border-blue-500">
              Put tasks on autopilot like assigning work, setting due dates, and
              more.
              <div className="flex text-blue-400 pt-4">
                <div className="text-lg">Get Started</div>
                <ArrowRight className="w-6 h-6 ml-4" />
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-rose-400">
              Streamline your reports
            </AccordionTrigger>
            <AccordionContent className="border-b border-rose-500">
              Put tasks on autopilot like assigning work, setting due dates, and
              more.
              <div className="flex text-rose-400 pt-4">
                <div className="text-lg">Get Started</div>
                <ArrowRight className="w-6 h-6 ml-4" />
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-amber-400">
              Manage your intakes
            </AccordionTrigger>
            <AccordionContent className="border-b border-amber-500">
              Put tasks on autopilot like assigning work, setting due dates, and
              more.
              <div className="flex text-amber-400 pt-4">
                <div className="text-lg">Get Started</div>
                <ArrowRight className="w-6 h-6 ml-4" />
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-green-400">
              Connect work to purpose
            </AccordionTrigger>
            <AccordionContent className="border-b border-green-500">
              Put tasks on autopilot like assigning work, setting due dates, and
              more.
              <div className="flex text-green-400 pt-4">
                <div className="text-lg">Get Started</div>
                <ArrowRight className="w-6 h-6 ml-4" />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <Image
        src="/images/tab-6.webp"
        alt="illustration"
        width={700}
        height={700}
        className="p-10"
      />
    </section>
  );
};

export default FifthSection;
