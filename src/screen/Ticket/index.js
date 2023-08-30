import React, { useState } from 'react'
import Section from '../../motion/Section'
import IonIcon from '@reacticons/ionicons'
import { motion } from 'framer-motion'
import DetailTicket from '../../components/DetailTicket'

const Ticket = () => {

    const [isDetailTicket, setIsDetailTicket] = useState(false)

  return (
    <Section className={`h-screen bg-white flex justify-center`}>
        <div className='w-[40%] mt-8 flex flex-col gap-4'>
            <h1 className='text-[1.6rem] text-gray-800'>My ticket</h1>
            <div>
                <motion.button className='flex items-center gap-2 py-1 px-4 rounded-full bg-gray-100 border border-gray-300 text-[0.9rem]'
                    whileTap={{scale: .9}}
                >
                    <span>Create ticket</span>
                    <IonIcon name='add' />
                </motion.button>
                <div className='mt-8 w-full flex flex-col gap-4'>
                    <div className=' flex gap-2 rounded-lg bg-gray-100 border border-gray-300 p-2'>
                        <div className='h-[11rem] w-[11rem] rounded-lg border border-gray-300 bg-gray-200'>
                            <img src='' />
                        </div>
                        <div className='flex-1'>
                            <h2 className='text-[1.6rem] text-gray-700'>Happy bee 2023 V.O.L III</h2>
                            <p className='text-[0.8rem] font-light limit text-gray-500'>
                                t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                            </p>
                            <motion.button className='mt-4 text-[0.9rem] bg-black text-white border border-gray-300 rounded-lg py-1 px-6 flex justify-center items-center'
                                whileTap={{scale: .9}}
                                onClick={() => setIsDetailTicket(true)}
                            >
                                View
                            </motion.button>
                        </div>          
                    </div>
                </div>
            </div>
        </div>
        {
            isDetailTicket && <DetailTicket id={'1244535434121'} title={'Happy bee 2023 V.O.L III'} description={'t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'}/>
        }
    </Section>
  )
}

export default Ticket