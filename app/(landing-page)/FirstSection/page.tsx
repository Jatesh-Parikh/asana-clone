"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const FirstSection = () => {
  return (
    <section className="py-10 md:py-20 space-y-10 bg-[#E5E4E2]">
      <div className="container mx-auto text-center md:w-2/3">
        <div className="md:text-5xl font-medium text-4xl flex justify-center md:px-20 pb-10">
          The Best App for Cross-Functional Work
        </div>
        <p className="text-lg md:text-xl mb-10">
          Want more efficiency in your organization? Bird is easy for all teams
          to use, so you can deliver quality work, faster.
        </p>

        <div className="flex gap-4 justify-center">
          <button className="bg-black text-white px-6 py-3 rounded-sm">
            Get Started
          </button>
          <Link href={"/contact"} passHref>
            <button className="bg-gray-500 text-white px-6 py-3 rounded-sm">
              See How it Works
            </button>
          </Link>
        </div>
      </div>

      <div className="md:pt-10 md:flex justify-center items-center space-y-10 md:mx-auto md:space-x-10">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 100, y: 0 }}
          className="px-10 md:px-0"
        >
          <Image
            src={"/images/tab-1.webp"}
            alt="illustration"
            width={400}
            height={400}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 100, y: 0 }}
          className="px-10 md:px-0"
        >
          <Image
            src={"/images/tab-2.webp"}
            alt="illustration"
            width={400}
            height={400}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 100, y: 0 }}
          className="px-10 md:px-0"
        >
          <Image
            src={"/images/tab-3.webp"}
            alt="illustration"
            width={400}
            height={400}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default FirstSection;
