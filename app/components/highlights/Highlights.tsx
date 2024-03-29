"use client";

import React from "react";
import { motion } from "framer-motion";
import { PatternDivide } from "@/public/assets/svgs";
import HighlightsItems from "./HighlightsItems";

const recipes = [
  {
    key: 1,
    name: "Seared Salmon Fillet",
    description:
      "Our locally sourced salmon served \n with a refreshing buckwheat summer salad.",
    src: "salmon",
  },
  {
    key: 2,
    name: "Rosemary Filet Mignon",
    description:
      "Our prime beef served to your taste with a delicious \n choice of seasonal sides.",
    src: "beef",
  },
  {
    key: 3,
    name: "Summer Fruit Chocolate Mousse",
    description:
      "Creamy mousse combined with summer fruits and \n dark chocolate shavings.",
    src: "chocolate",
  },
];

function Highlights() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 0.3,
        staggerChildren: 0.4,
        staggerDirection: 1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: -50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "tween" },
    },
  };

  return (
    <section className="flex h-auto w-full items-center justify-center bg-cod-gray max-sm:mt-[100px] sm:h-[891px] max-md:sm:mt-[118px] md:h-[761px]">
      <section className="flex h-auto w-full justify-between gap-x-6 text-white max-xl:px-6 max-md:flex-col max-md:items-center max-md:justify-center max-sm:pb-[102px] max-sm:pt-[72px] xl:w-[1110px]">
        <motion.div
          className="flex flex-col max-md:items-center max-md:text-center sm:w-[445px]"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "tween", delay: 0.5 }}
        >
          <PatternDivide />
          <h2 className="mb-[13px] mt-9 text-[32px] font-bold sm:mt-[55px] sm:text-5xl md:mb-[27px]">
            A few highlights from our menu
          </h2>
          <p className="text-base sm:text-body-2">
            We cater for all dietary requirements, but here's a glimpse at some
            of our diner's favourite. Our menu is revamped every season.
          </p>
        </motion.div>

        <motion.section
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col max-sm:mt-[85px] sm:mt-[54px] sm:gap-y-6"
        >
          {recipes.map((recipe) => (
            <motion.div variants={item} key={recipe.key}>
              <HighlightsItems
                name={recipe.name}
                description={recipe.description}
                src={recipe.src}
              />
              {recipe.src === "chocolate" ? (
                ""
              ) : (
                <hr className="mt-[54px] h-[1px] w-full bg-white opacity-[15%] max-sm:mb-6 sm:mt-6" />
              )}
            </motion.div>
          ))}
        </motion.section>
      </section>
    </section>
  );
}

export default Highlights;
