import React from 'react'
import { motion } from 'framer-motion'
import IonIcon from '@reacticons/ionicons'
import { Link } from 'react-router-dom'

const dataCard = [
  {
    cardPosition: true,
    top: '30%',
    icon: 'ticket',
    title: 'Ticket event',
    description: 'Event ticket management. Create and check in tickets right in your wallet!',
    link: '/ticket'
  },
  {
    cardPosition: true,
    top: '180%',
    icon: 'scan',
    title: 'Scan ticket',
    description: 'Scan event tickets',
    link: '/scan'
  },
  {
    cardPosition: false,
    top: '30%',
    icon: 'wifi',
    title: 'Ticket event',
    description: 'Event ticket management. Create and check in tickets right in your wallet!',
    link: '/ticket'
  },
  {
    cardPosition: false,
    top: '180%',
    icon: 'barcode',
    title: 'Ticket event',
    description: 'Event ticket management. Create and check in tickets right in your wallet!',
    link: '/ticket'
  }
]

const Home = () => {
  return (
    <div className='h-screen bg-white flex relative justify-center items-center'>
      {
        dataCard.map((item, index) => 
          item.cardPosition ? (
            <motion.div className='w-[15rem] p-2 h-[20rem] absolute rounded-lg cursor-pointer bg-[#fafafa] shadow-md border border-gray-200'
          initial={{ opacity: 0, scale: 0, left: '50%', top: '50%', translateY: '-50%', rotate: 360 }}
          animate={{ opacity: 1, scale: 1, left: 0, top: 0 , translateY: item.top, translateX: '-50%', rotate: 10}}
          transition={{ duration: 1.5,  type: 'spring', stiffness: 100 }}
          whileHover={{   translateX: '0%', rotate: 25 }}
        >
          <Link to={item.link}>
            <div className='h-[12rem] rounded-lg bg-gray-100 border border-gray-200 flex justify-center items-center'>
              <IonIcon name={item.icon} className='text-[4rem] text-gray-400'/>
            </div>
          </Link>
          <div className='py-2'>
            <h2 className='text-gray-800'>{item.title}</h2>
            <p className='text-[0.9rem] font-light'>{item.description}</p>
          </div>
        </motion.div>
          ) : (
            <motion.div className='w-[15rem] p-2 h-[20rem] absolute rounded-lg cursor-pointer bg-[#fafafa]'
            initial={{ opacity: 0, scale: 0, right: '50%', top: '50%', translateY: '-50%', rotate: -360 }}
            animate={{ opacity: 1, scale: 1, right: 0, top: 0 , translateY: item.top, translateX: '50%', rotate: -10}}
              transition={{ duration: 1.5,  type: 'spring', stiffness: 100 }}
            whileHover={{   translateX: '0%', rotate: -25 }}
          >
             <div className='h-[12rem] rounded-lg bg-gray-100 border border-gray-200 flex justify-center items-center'>
            <IonIcon name={item.icon} className='text-[4rem] text-gray-400'/>
            </div>
            <div className='py-2'>
              <h2 className='text-gray-800'>{item.title}</h2>
              <p className='text-[0.9rem] font-light'>{item.description}</p>
            </div>
          </motion.div>
          )
        )
      }
        <div
          className='relative'
        >
          <motion.h1 className='text-[6rem] uppercase text-[#333333] relative'
           initial={{ opacity: 0, scale: 0.8, translateY: '-50%'}}
           animate={{opacity: 1, scale: 1,  translateY: '0'}}
           transition={{ duration: 0.5, delay:1,  type: 'spring', stiffness: 100 }}
          >
            <span>Nevsolit</span>
          </motion.h1>
          <motion.span className='absolute top-0 right-0 text-[1.6rem] text-[#535353]'
          initial={{ opacity: 0, translateY: '-50%'}}
          animate={{opacity: 1, translateY: '0%'}}
          transition={{ duration: 0.5, delay:1.25,  type: 'spring'}}
          >NFC</motion.span>
          <motion.div className='flex gap-2 items-center bg-gray-100 rounded-full p-2 text-[0.9rem] border border-gray-300'
           initial={{opacity: 0, translateY: '50%'}}
           animate={{opacity: 1,  translateY: '0'}}
           transition={{ duration: 0.5, delay:1.5 }}
          >
            <motion.button className='bg-black text-white py-1 px-4 rounded-full'
              whileTap={{scale: .9}}           
            >
                Read it
            </motion.button>
            <span className='font-light text-gray-500'>Experience the NFC system on Nevsolit!</span>
          </motion.div>
        </div>
    </div>
  )
}

export default Home