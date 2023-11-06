"use client";
import { FEATURES } from "@/constants"
import { motion } from "framer-motion"
import Image from "next/image"
import { type } from "os"
import { features, title } from "process"

const Feature = () => {
  const fadeInAnimationsVariantsFeatureTitle = {
    initial: {
      x:500,
      opacity: 0,
    },
    animate: {
      transition: {
        duration: .7,
        delay: 1,
      },
      x:0,
      opacity:1,
    }
    
  }

  return (
    <section className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
      <div className="max-container padding-container relative w-full flex justify-end">
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image
            src="/phone.png"
            alt="phone"
            width={440}
            height={1000}
            className="feature-phone"
          />
        </div>

        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <div className="relative">
            <Image
              src="/camp.svg"
              alt="camp"
              width={50}
              height={50}
              className="absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]"
            />
            <motion.h2 
              className="bold-40 lg:bold-64"
              variants={fadeInAnimationsVariantsFeatureTitle}
              initial = 'initial'
              whileInView='animate'
              viewport={{
                once: true,
              }}
            >
              Our Features
            </motion.h2>
          </div>
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20">
            {FEATURES.map((feature, index) => (
              <FeatureItem 
                key={feature.title}
                title={feature.title}
                icon = {feature.icon}
                description = {feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

type FeatureItem = {
  title: string;
  icon: string;
  description: string;
  index?: number
}

const FeatureItem = ({title, icon, description, index}:FeatureItem) => {
  const fadeInAnimationsVariantsFeatureList = {
    initial: {
      opacity: 0,
    },
    animate: {
      transition: {
        duration: .7,
        delay: 1.5,
      },
      opacity:1,
    }
    
  }
  return (
    <motion.li
      className="flex w-full flex-1 flex-col items-start"
      key={index}
      variants={fadeInAnimationsVariantsFeatureList}
      initial = 'initial'
      whileInView='animate'
      viewport={{
        once: true,
      }}
      custom={index}
    >
      <div className="rounded-full lg:p-7 bg-green-50 cursor-pointer transition-all duration-300 hover:bg-green-800">
        <Image src={icon} alt="map" width={28} height={28}/>
      </div>
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">
        {title}
      </h2>
      <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
        {description}
      </p>
    </motion.li>
  )
}

export default Feature