import React from 'react'
import Section from '../motion/Section'
import QRCode from 'react-qr-code'
import IonIcon from '@reacticons/ionicons'
import { motion } from 'framer-motion'

const DetailTicket = ({ title, description, id, close, photoURL, layout, status }) => {
    const [isShowQRCode, setIsShowQRCode] = React.useState(false)
    return (
        <Section className={` bg-white`}>
            <div className='lg:w-[50%] lg:m-auto lg:mt-8 l relative lg:rounded-xl lg:shadow-md lg:bg-gray-100 xl:w-[30%]'>
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={close}
                    className='absolute top-4 left-4 flex justify-center items-center bg-gray-100 text-gray-900 w-[2rem] h-[2rem] rounded-lg'
                >
                    <IonIcon name='arrow-back' />
                </motion.button>
                <div className='h-[20rem] border border-gray-200'>
                    <img src={photoURL} alt={title} className='w-full h-full object-cover' />
                </div>
                <div className='flex py-2 px-2 justify-between'>
                    <h1 className='text-[1.2rem] font-bold uppercase'>{title}</h1>
                </div>
                <div className='flex justify-between items-center'>
                    <div className='px-2 flex gap-2'>
                        {[1, 2, 3, 4, 5].map((item, index) => (
                            <IonIcon key={index} name='star' className='text-yellow-400' />
                        ))}
                    </div>
                    <p className={`px-2 mt-2 text-[0.9rem] flex items-center gap-2 font-light `}>
                        <span className='font-bold'>Status:</span>
                        <span className={` ${status === 0 ? 'text-red-500' : 'text-green-500'}`}>
                            {status === 0 ? 'Unknown' : 'Checkin'}
                        </span>
                    </p>
                </div>
                <div className='px-2 mt-2'>
                    <motion.button whileTap={{ scale: 0.9 }} onClick={() => setIsShowQRCode(!isShowQRCode)}>
                        <IonIcon
                            name={isShowQRCode ? 'reader-outline' : 'qr-code-outline'}
                            className='text-[1.8rem] text-gray-800'
                        />
                    </motion.button>
                </div>
                {isShowQRCode ? (
                    <div className='flex mt-4 justify-center mb-8 '>
                        <div className=' banner-gradient p-2 rounded-lg'>
                            <QRCode value={id} className='rounded-lg shadow-sm' />
                        </div>
                    </div>
                ) : (
                    <>
                        <div className='px-2 mt-2 text-[0.9rem] font-light mb-8 flex flex-col'>
                            <span className='font-bold'>Description:</span>
                            <p className='mt-2 '>{description}</p>
                        </div>
                    </>
                )}
            </div>
        </Section>
    )
}

export default DetailTicket
