"use client";
import React from 'react'
import Button from './Button'
import Image from 'next/image'
import {motion} from 'framer-motion'

const GetApp = () => {
  const fadeInAnimationsVariantsGetAppTitle = {
    initial: {
      opacity: 0,
      x: 0,
    },
    animate: {
      transition: {
        duration: .7,
        delay: .7
      },
      opacity:1,
      x:0
    }
  }
  const fadeInAnimationsVariantsGetAppSubtitle = {
    initial: {
      opacity: 0,
      x: 0,
    },
    animate: {
      transition: {
        duration: .7,
        delay: 1.4,
      },
      opacity:1,
      x:0
    }
  }
  const fadeInAnimationsVariantsGetAppButtons = {
    initial: {
      opacity: 0,
    },
    animate: {
      transition: {
        duration: .7,
        delay: 2.1,
      },
      opacity:1,
    }
  }
  
  return (
    <section className='flexCenter w-full flex-col pb-[100px]'>
      <div className='get-app'>
        <div className='z-20 flex w-full flex-1 flex-col items-start justify-center gap-12'>
          <motion.h2 
            className='bold-40 lg:bold-64 xl:max-w-[320px]'
            variants={fadeInAnimationsVariantsGetAppTitle}
            initial = 'initial'
            whileInView='animate'
            viewport={{
              once: true,
            }}  
          >Get for free now!</motion.h2>
          <motion.p
            variants={fadeInAnimationsVariantsGetAppSubtitle}
            initial = 'initial'
            whileInView='animate'
            viewport={{
              once: true,
            }}  
          >Available on IOS and Android</motion.p>
          <motion.div 
            className='flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row'
            variants={fadeInAnimationsVariantsGetAppButtons}
            initial = 'initial'
            whileInView='animate'
            viewport={{
              once: true,
            }}  
          >
            <Button 
              type='button'
              title = 'Download App'
              icon='/apple.svg'
              variant='btn_white'
            />
            <Button 
              type='button'
              title = 'Play Store'
              icon='/android.svg'
              variant='btn_dark_green_outline'
            />
          </motion.div>
        </div>
        <div className='flex flex-1 items-center justify-end'>
          <Image
            src="/phones.png"
            alt='phones'
            width={550}
            height={870}
          />
        </div>
      </div>
    </section>
  )
}

export default GetApp