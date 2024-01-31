"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const tabs = [
  {
    name: "Marketing Teams",
    title: "Deliver impactful marketing strategies",
    feature1: "Campaign planning",
    feature2:
      "Help teams quickly refocus and re-prioritize work as goals change.",
    feature3: "Automate processes for approvals",
    image: "/images/tab-1.webp",
  },
  {
    name: "IT Teams",
    title: "Automate and streamline IT requests",
    feature1: "Reduce digital friction for better team velocity",
    feature2: "Track and manage work across teams",
    feature3: "Automate processes for approvals",
    image: "/images/tab-2.webp",
  },

  {
    name: "Operations Teams",
    title: "Drive operational efficiency",
    feature1: "Track work and see progress in real time",
    feature2: "Standardize and automate processes",
    feature3: "Unblock teams to hit revenue goals",
    image: "/images/tab-3.webp",
  },
  {
    name: "Project Management",
    title: "Manage projects more efficiently",
    feature1: "Track work and see progress in real time",
    feature2: "Standardize and automate processes",
    feature3: "Track resources, goals and progress in one place",
    image: "/images/tab-4.webp",
  },
  {
    name: "Strategic Planning",
    title: "Align teams to execute winning strategies",
    feature1: "Track work and see progress in real time",
    feature2: "Set annual plans to deliver results",
    feature3: "See real-time insights to stay on track and on budget",
    image: "/images/tab-1.webp",
  },
];

const SecondSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section
      ref={ref}
      className="flex flex-col justify-center items-center md:py-20 p-10"
    >
      <div className="flex justify-center items-center">
        <div
          style={{
            transform: `translateY(${isInView ? 0 : 100}px)`,
            opacity: isInView ? 1 : 0,
            transition: "all 1s ease-in-out",
          }}
          className="md:flex md:space-x-20 md:py-10 border-b"
        >
          <div className="space-y-10">
            <div className="text-3xl">
              80% of teams say Bird helps them move faster
            </div>
            <div className="flex items-center space-x-9 hover:text-blue-500 text-xl">
              See how customers use Bird
              <ArrowRight className="hidden md:block h-6 w-6 ml-4" />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-2 md:flex md:space-x-10 items-center justify-center py-10"
          >
            <Image
              src="/images/logo/logo-5.svg"
              width={150}
              height={150}
              alt="logo"
            />
            <Image
              src="/images/logo/logo-13.svg"
              width={150}
              height={150}
              alt="logo"
            />
            <Image
              src="/images/logo/logo-8.svg"
              width={150}
              height={150}
              alt="logo"
            />
            <Image
              src="/images/logo/logo-9.svg"
              width={150}
              height={150}
              alt="logo"
            />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="hidden md:block pt-10 py-20 text-3xl md:text-5xl"
      >
        See how teams use Bird
      </motion.div>

      <div className="hidden md:flex justify-center items-center">
        {tabs.map((tab) => (
          <div
            key={tab.name}
            className={`flex justify-center items-center space-x-10 w-60 
             ${
               activeTab === tab
                 ? "border-b-4 pt-2 border-gray-400 text-gray-800"
                 : "text-muted-foreground"
             } `}
            onClick={() => setActiveTab(tab)}
            style={{ cursor: "pointer" }}
          >
            <div className="flex items-center justify-center text-3xl text-center h-20 w-20">
              {tab.name}
            </div>
          </div>
        ))}
      </div>

      <div className="hidden md:block pt-10">
        {activeTab && (
          <div className="flex justify-center">
            <div
              style={{ width: "700px", height: "525px" }}
              className="flex flex-col bg-gray-200 p-10 rounded-md justify-center"
            >
              <p className="text-3xl pb-10 border-b underline text-center">
                {activeTab.title}
              </p>

              <div className="flex flex-col justify-center items-center space-y-10">
                <ul className="flex space-x-4">
                  <CheckCircle2 className="h-6 w-6 text-gray-500" />
                  <li>{activeTab.feature1}</li>
                </ul>
                <ul className="flex space-x-4">
                  <CheckCircle2 className="h-6 w-6 text-gray-500" />
                  <li>{activeTab.feature2}</li>
                </ul>
                <ul className="flex space-x-4">
                  <CheckCircle2 className="h-6 w-6 text-gray-500" />
                  <li>{activeTab.feature3}</li>
                </ul>
              </div>
            </div>

            <div
              style={{ width: "700px", height: "525px" }}
              className="bg-gradient-to-r from-gray-400 to-gray-200 flex justify-center items-center rounded-md"
            >
              <Image
                src={activeTab.image}
                width={530}
                height={500}
                alt="logo"
                className="rounded-md"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SecondSection;
