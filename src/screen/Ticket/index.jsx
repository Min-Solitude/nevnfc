import React, { useEffect, useState } from 'react'
import Section from '../../motion/Section'
import IonIcon from '@reacticons/ionicons'
import { motion } from 'framer-motion'
import DetailTicket from '../../components/DetailTicket'
import Banner from './components/Banner'
import CreateTicket from '../../components/CreateTicket'
import { useDispatch, useSelector } from 'react-redux'
import { getTickets } from '../../redux/reducers/ticket.recuder'

const Ticket = () => {
    const [isDetailTicket, setIsDetailTicket] = useState(null)
    const [isCreateTicket, setIsCreateTicket] = useState(false)

    const listTicket = useSelector((state) => state.ticket.listTickets)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTickets())
    }, [])

    console.log(isDetailTicket)

    return (
        <Section className={` w-full lg:w-[60%] xl:w-[40%] lg:m-auto p-2  `}>
            <Banner />
            <div className=' mt-4 lg:mt-8 flex flex-col gap-4'>
                <div>
                    <motion.button
                        className=' shadow-sm p-[0.1rem] rounded-full background-gradient text-[0.9rem]'
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsCreateTicket(true)}
                    >
                        <div className='flex items-center bg-white rounded-full py-2 px-6  gap-2'>
                            <span>Create ticket</span>
                            <IonIcon name='add' />
                        </div>
                    </motion.button>
                    <div className='mt-4 lg:mt-8 w-full flex px-2x flex-col gap-4'>
                        {listTicket.map((item, index) =>
                            item.layout === 1 ? (
                                <div
                                    key={index}
                                    className='w-full shadow-md lg:w-[28rem] cursor-pointer duration-200 hover:brightness-75 rounded-lg  flex gap-2 bg-gray-100 p-2'
                                    onClick={() => setIsDetailTicket(item)}
                                >
                                    <label className='w-[8rem] hover:brightness-90 duration-200 cursor-pointer rounded-lg h-[8rem] bg-white flex justify-center items-center'>
                                        {item.photoURL ? (
                                            <img
                                                src={item.photoURL}
                                                className='w-full h-full object-cover rounded-lg'
                                            />
                                        ) : (
                                            <IonIcon name='image-outline' className='text-[2rem] text-gray-400' />
                                        )}
                                    </label>
                                    <div className='flex flex-1 flex-col'>
                                        <div className='text-[1.1rem] font-bold  w-full'>{item.title}</div>
                                        <div className=' h-full text-[0.8rem] font-light w-full'>
                                            {item.description}
                                        </div>
                                    </div>
                                </div>
                            ) : item.layout === 2 ? (
                                <div
                                    key={index}
                                    onClick={() => setIsDetailTicket(item)}
                                    className='lg:w-[28rem] shadow-md duration-200 hover:brightness-75 h-[12rem] w-full cursor-pointer rounded-lg bg-gray-100 p-2bg-gray-100 p-2 relative flex justify-end items-start'
                                >
                                    <img src={item.photoURL} className='w-full h-full object-cover rounded-lg' />

                                    <div className=' absolute bottom-5 left-4 shadow-md flex flex-col p-2 bg-white rounded-lg'>
                                        <div className='text-[0.9rem]'>{item.title}</div>
                                        <div className=' h-full text-[0.8rem] font-light'>{item.description}</div>
                                    </div>
                                </div>
                            ) : item.layout === 3 ? (
                                <div
                                    key={index}
                                    onClick={() => setIsDetailTicket(item)}
                                    className='flex hover:brightness-75 overflow-hidden duration-200 justify-start gap-6 shadow-md'
                                >
                                    <div className=' w-full rounded-lg bg-gray-100 p-2 flex flex-col gap-2'>
                                        <label className='w-full   cursor-pointer rounded-lg bg-white flex justify-center items-center'>
                                            <img
                                                src={item.photoURL}
                                                className='w-full h-full object-cover rounded-lg'
                                            />
                                        </label>
                                        <div className='text-[1.1rem] font-bold outline-none w-full'>{item.title}</div>
                                        <div className=' text-[0.8rem] font-light w-full'>{item.description}</div>
                                    </div>
                                </div>
                            ) : (
                                <div
                                    className='flex hover:brightness-75 duration-200 justify-start gap-6'
                                    key={index}
                                    onClick={() => setIsDetailTicket(item)}
                                >
                                    <label
                                        htmlFor='image'
                                        className=' rounded-lg cursor-pointer w-full lg:w-[25rem] lg:h-[30rem] duration-200 flex justify-center items-center relative bg-gray-100 h-[20rem] p-2 flex flex-col gap-2'
                                    >
                                        <img src={item.photoURL} className='w-full h-full object-cover rounded-lg' />
                                        <div className='absolute top-4   lg:w-[20rem] left-4 flex flex-col bg-white p-2 rounded-lg shadow-md'>
                                            <div className='text-[0.9rem] font-bold w-full'>{item.title}</div>
                                            <div className=' text-[0.8rem] font-light w-full'>{item.description}</div>
                                        </div>
                                    </label>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>
            {isDetailTicket !== null && (
                <DetailTicket
                    id={isDetailTicket.id}
                    close={() => setIsDetailTicket(null)}
                    title={isDetailTicket.title}
                    description={isDetailTicket.description}
                    photoURL={isDetailTicket.photoURL}
                    layout={isDetailTicket.layout}
                    status={isDetailTicket.status}
                />
            )}
            {isCreateTicket && <CreateTicket close={() => setIsCreateTicket(false)} />}
        </Section>
    )
}

export default Ticket
