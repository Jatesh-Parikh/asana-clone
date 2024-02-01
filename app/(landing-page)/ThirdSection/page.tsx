"use client";

import { CheckCircle2 } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ThirdSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col space-y-10"
      >
        <div className="py-20 bg-[#097969] flex flex-col items-center space-y-10 ">
          <div className="text-white text-3xl px-10 md:px-0 md:text-5xl md:pb-10 flex justify-start items-center">
            Why companies choose Bird
          </div>
          <div className="md:w-3/4 px-10">
            <div className="flex items-center justify-center space-x-10 md:space-x-20 text-white text-2xl border-b border-t py-10">
              <CheckCircle2 className="h-10 w-10 md:h-20 md:w-20 stroke-1" />
              <div className="md:w-80 md:text-3xl text-sm w-72">
                The only platform that brings together your content and
                conversations
              </div>
              <div className="hidden md:block md:w-1/2 text-md">
                See related tasks, collaborators and progress to quickly achieve
                business goals
              </div>
            </div>
            <div className="flex items-center justify-center space-x-10 md:space-x-20 text-white text-2xl border-b border-t py-10">
              <CheckCircle2 className="h-10 w-10 md:h-20 md:w-20 stroke-1" />
              <div className="md:w-80 md:text-3xl text-sm w-72">
                Rated best for cross-team collaboration
              </div>
              <div className="hidden md:block md:w-1/2 text-md">
                See related tasks, collaborators and progress to quickly achieve
                business goals
              </div>
            </div>
            <div className="flex items-center justify-center space-x-10 md:space-x-20 text-white text-2xl border-b border-t py-10">
              <CheckCircle2 className="h-10 w-10 md:h-20 md:w-20 stroke-1" />
              <div className="md:w-80 md:text-3xl text-sm w-72">
                Simple adoption, with less downtime
              </div>
              <div className="hidden md:block md:w-1/2 text-md">
                See related tasks, collaborators and progress to quickly achieve
                business goals
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ThirdSection;
