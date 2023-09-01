import React from 'react'
import Section from '../motion/Section'
import QRCode from 'react-qr-code'
import IonIcon from '@reacticons/ionicons'
import { motion } from 'framer-motion'

const DetailTicket = ({ title, description, id, close, photoURL, layout, status }) => {
    return (
        <Section className={`fixed top-0 left-0 right-0 bottom-0  bg-white z-50`}>
            <div className='lg:w-[50%] lg:m-auto lg:mt-8 overflow-hidden rounded-xl lg:shadow-md bg-gray-100 xl:w-[30%]'>
                <div className='h-[20rem] border border-gray-200'>
                    <img src={photoURL} alt={title} className='w-full h-full object-cover' />
                </div>
                <div className='flex py-2 px-2 justify-between'>
                    <h1 className='text-[1.2rem] font-bold'>{title}</h1>
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={close}
                        className='flex justify-center items-center background-gradient text-white w-[2rem] h-[2rem] rounded-lg'
                    >
                        <IonIcon name='arrow-back' />
                    </motion.button>
                </div>
                <p className='px-2 text-[0.9rem] font-light text-gray-700'>Description: {description}</p>
                <p className={`px-2 text-[0.9rem] font-light `}>
                    Status:{' '}
                    <span className={` ${status === 0 ? 'text-red-500' : 'text-green-500'}`}>
                        {status === 0 ? 'Unknown' : 'Checkin'}
                    </span>
                </p>
                <div className='p-2 w-full flex justify-center mt-8 rounded-lg mb-8'>
                    <QRCode value={id} />
                </div>
            </div>
        </Section>
    )
}

export default DetailTicket
