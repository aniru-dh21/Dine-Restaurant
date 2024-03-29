"use client";

import MainImage from "@/public/assets/homepage/hero-bg-desktop@2x.jpg";
import MainResponsiveImage from "@/public/assets/homepage/hero-bg-tablet@2x.jpg";
import { Logo, MobileLogo } from "@/public/assets/svgs";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Button from "./Button";
import Image from "next/image";

function MainContainer() {
  const router = useRouter();

  return (
    <section className="relative flex h-[992px] w-full flex-col overflow-x-hidden bg-cod-gray px-6 pt-[24rem] text-white max-md:items-center max-md:text-center mobile:px-20 md:h-[820px] md:pt-16 lg:px-[165px]">
      <Logo className="z-50 max-sm:hidden" />
      <MobileLogo className="z-50 sm:hidden" />

      <section className="flex w-full justify-between max-lg:flex-col">
        <div className="z-50 mt-9 sm:mt-[38px] md:mt-[153px]">
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "tween", delay: 0.2 }}
          >
            <h1 className="text-[32px] font-light opacity-80 sm:text-5xl md:text-7xl">
              Exquisite dining
              <br />
              since 1989
            </h1>
            <p className="mt-5 text-base opacity-80 sm:text-body-2 md:mt-[10px] md:w-[445px]">
              Experience our seasonal menu in beautiful country surroundings.
              Eat the freshest produce from the comfort of our farmhouse.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "tween", delay: 0.3 }}
          >
            <Button onClick={() => router.push("/reservations")}>
              Book a table
            </Button>
          </motion.div>
        </div>

        <Image
          width={2880}
          height={260}
          alt="bg-main-image"
          src={MainImage}
          placeholder="blur"
          priority
          className="absolute right-[-16rem] top-0 z-30 h-full w-[570px] object-cover object-right max-md:hidden lg:right-0"
        />

        <Image
          width={1536}
          height={804}
          alt="bg-main-responsive-image"
          src={MainResponsiveImage}
          placeholder="blur"
          priority
          className="absolute left-0 top-0 h-full w-full object-cover object-center md:hidden"
        />
      </section>
    </section>
  );
}

export default MainContainer;
