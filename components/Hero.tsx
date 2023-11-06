"use client";
import Image from 'next/image'
import Button from './Button'
import { motion } from 'framer-motion'

const Hero = () => {
    const fadeInAnimationsVariantsHeroTitle = {
        initial: {
          x:-500,
          opacity: 0,
        },
        animate: {
          transition: {
            duration: .7,
          },
          x:0,
          opacity:1,
        }
        
      }

      const fadeInAnimationsVariantsHeroSubtitle = {
        initial: {
            opacity: 0,
            x:-500
        },
        animate: {
          transition: {
            duration: .7,
            delay: .5
          },
          opacity: 1,
          x:0
        }
    }

    const fadeInAnimationsVariantsHeroReview = {
        initial: {
            opacity: 0,
        },
        animate: {
          transition: {
            duration: .7,
            delay: 1.4,
          },
          opacity: 1,
        }
    }
    const fadeInAnimationsVariantsHeroButtons = {
        initial: {
            opacity: 0,
        },
        animate: {
          transition: {
            duration: .7,
            delay: 2.1,
          },
          opacity: 1,
        }
    }
    const fadeInAnimationsVariantsHeroInfo = {
        initial: {
            scale: 0,
        },
        animate: {
          transition: {
            duration: .7,
            delay: 2.8,
          },
          scale: 1,
        }
    }
  return (
    <section className='max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row'>
        <div className='hero-map'/>
        <motion.div 
            className='relative z-20 flex flex-1 flex-col xl:w-1/2'>
            <Image 
                src="/camp.svg"
                alt='camp'
                width={50}
                height={50}
                className='absolute left-[-5px] top-[-30px] w-10 lg:2-[50px]'
            />
            <motion.h1 
                className='bold-52 lg:bold-88'
                variants={fadeInAnimationsVariantsHeroTitle}
                initial = 'initial'
                whileInView='animate'
                viewport={{
                  once: true,
                }}
            >
                Putuk Truno Camp Area
            </motion.h1>
            <motion.p 
                className='regular-16 mt-6 text-gray-30 xl:max-w-[520px]'
                variants={fadeInAnimationsVariantsHeroSubtitle}
                initial = 'initial'
                whileInView='animate'
                viewport={{
                  once: true,
                }}
            >
                We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of nature. We can help you on an adventure around the world in just one app
            </motion.p>
            <motion.div
                variants={fadeInAnimationsVariantsHeroReview}
                initial = 'initial'
                whileInView='animate'
                viewport={{
                    once: true,
                }}
                className='my-11 flex flex-wrap gap-5'
            >
                <div className='flex items-center gap-2'>
                    {Array(5).fill(1).map((_, index) => (
                        <Image 
                            src = '/star.svg'
                            key = {index}
                            alt = 'star'
                            width={24}
                            height={24}
                        />
                    ))}
                </div>
                <p className='bold-16 lg:bold-20 text-blue-70'>
                    198k
                    <span className='regular-16 lg:regular-20 ml-4'>Excellent Reviews</span>
                </p>
            </motion.div>
            <motion.div 
                className='flex flex-col w-full gap-3 sm:flex-row'
                variants={fadeInAnimationsVariantsHeroButtons}
                initial = 'initial'
                whileInView='animate'
                viewport={{
                    once: true,
                }}
            >
                <Button 
                    type = 'button' 
                    title = 'Download App' 
                    variant = 'btn_green'
                />
                <Button 
                    type = 'button' 
                    title = 'How we work?' 
                    icon = '/play.svg'
                    variant = 'btn_white_text'
                />
            </motion.div>
        </motion.div>
        <div className='relative flex flex-1 items-start'>
            <motion.div 
                className='relative z-20 w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8'
                variants={fadeInAnimationsVariantsHeroInfo}
                initial = 'initial'
                whileInView='animate'
                viewport={{
                  once: true,
                }}
            >

                 <div className='flex flex-col'>
                    <div className='flexBetween'>
                        <p className='regular-16 text-gray-20'>Location</p>
                        {/*<Image src='/close.svg' alt='close' width={24} height={24} className='cursor-pointer'/>*/}
                    </div>
                    <p className='bold-20 text-white'>Aguas Calientes</p>
                </div>

                <div className='flexBetween mt-6'>
                    <div className='flex flex-col'>
                        <p className='regular-16 block text-gray-20'>Distance</p>
                        <p className='bold-20 text-white'>174.88 mi</p>
                    </div>

                    <div className='flex flex-col'>
                        <p className='regular-16 block text-gray-20'>Elevation</p>
                        <p className='bold-20 text-white'>2.040 km</p>
                    </div>
                </div>

            </motion.div>
        </div>
    </section>
  )
}

export default Hero