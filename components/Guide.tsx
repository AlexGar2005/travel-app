"use client";
import Image from 'next/image'
import React from 'react'
import {motion} from 'framer-motion';

const Guide = () => {
  const fadeInAnimationsVariantsGuideLeft = {
    initial: {
        opacity: 0,
        x:-500
    },
    animate: {
      transition: {
        duration: .7,
      },
      opacity: 1,
      x:0
    }
  }
  const fadeInAnimationsVariantsGuideTitle = {
    initial: {
        opacity: 0,
        x:-500
    },
    animate: {
      transition: {
        duration: .7,
        delay: 1.4
      },
      opacity: 1,
      x:0
    }
}
const fadeInAnimationsVariantsGuideSubtitle = {
  initial: {
      opacity: 0,
      x:500
  },
  animate: {
    transition: {
      duration: .7,
      delay: 2.1
    },
    opacity: 1,
    x:0
  }
}
const fadeInAnimationsVariantsGuideInfo = {
  initial: {
      scale: 0,
  },
  animate: {
    transition: {
      duration: .7,
      delay: .7,
    },
    scale: 1,
  }
}
  return (
    <section className='flexCenter flex-col'>
      <div className=' padding-container max-container w-full pb-24'>
        <Image 
          src = "/camp.svg"
          alt = "camp"
          width = {50}
          height = {50}

        />
        <motion.p 
          className='uppercase regular-18 -mt-1 mb-3 text-green-50'
          variants={fadeInAnimationsVariantsGuideLeft}
          initial = 'initial'
          whileInView='animate'
          viewport={{
            once: true,
          }}
        >
          We are here for you
        </motion.p>
        <div className='flex flex-wrap justify-between gap-5 lg:gap-10'>
          <motion.h2 
            className='capitalize bold-40 lg:bold-64 xl:max-w-[590px]'
            variants={fadeInAnimationsVariantsGuideTitle}
            initial = 'initial'
            whileInView='animate'
            viewport={{
              once: true,
            }}
          >
            Guide you to easy path
          </motion.h2>
          <motion.p 
            className='regular-16 text-gray-30 xl:max-w-[520px]'
            variants={fadeInAnimationsVariantsGuideSubtitle}
            initial = 'initial'
            whileInView='animate'
            viewport={{
              once: true,
            }}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis nemo quia earum consectetur esse obcaecati provident iusto sequi, animi molestiae sunt et porro fugit accusamus sit maxime ipsum deserunt eius libero asperiores repellat sed. Dolorem dolorum itaque neque quidem eligendi!
          </motion.p>
        </div>
      </div>
      <div className='flexCenter max-container relative w-full'>
        <Image 
          src="/boat.png"
          alt='boat'
          width={1440}
          height={500}
          className='w-full object-cover object-center 2xl:rounded-5xl'
        />

        <motion.div 
          className='absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20 '
          variants={fadeInAnimationsVariantsGuideInfo}
          initial = 'initial'
          whileInView='animate'
          viewport={{
            once: true,
          }}
        >
          <Image 
            src="/meter.svg"
            alt='meter'
            width={16}
            height={158}
            className='h-full w-auto'
          />
          <div 
            className='flexBetween flex-col'
          >
            <div className='flex w-full flex-col'>
              <div className='flexBetween w-full'>
                <p className='regular-16 text-gray-20'>Destination</p>
                <p className='bold-16 text-green-50'>60 min</p>
              </div>
              <p className='bold-20 mt-2'>Aguas Calientes</p>
            </div>

            <div className='flex w-full flex-col'>
              <p className='regular-16 text-gray-20'>Start Track</p>
              <h4 className='bold-20 mt-2'>Aguas Calientes</h4>
            </div>

            <div className='flex w-full flex-col'>
              <p className='regular-16 text-gray-20'>Save Money</p>
              <h4 className='bold-20 mt-2'>Wonorejo Pasuruan</h4>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Guide