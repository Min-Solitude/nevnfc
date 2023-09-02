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
    const [isShowTicketLayout, setIsShowTicketLayout] = useState(1)

    const listTicket = useSelector((state) => state.ticket.listTickets)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTickets())
    }, [])

    return (
        <Section className={` w-full lg:w-[60%] xl:w-[40%] lg:m-auto p-2  `}>
            <Banner />
            <div className=' mt-8 lg:mt-8 flex flex-col gap-4'>
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
                    <div className='mt-6 flex gap-2'>
                        {[1, 2, 3, 4].map((item, index) => (
                            <motion.button
                                className={`py-2 px-6 text-[0.9rem] rounded-lg bg-gray-100 ${
                                    isShowTicketLayout === item && 'bg-gray-300'
                                } `}
                                key={index}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setIsShowTicketLayout(item)}
                            >
                                {item}
                            </motion.button>
                        ))}
                    </div>
                    <div
                        className={`mt-4 lg:mt-8 w-full lg:items-start grid grid-cols-1 lg:grid-cols-2  px-2x  gap-4 `}
                    >
                        {listTicket.map(
                            (item, index) =>
                                item.layout === isShowTicketLayout &&
                                (item.layout === 1 ? (
                                    <div
                                        key={index}
                                        className='w-full max-w-[25rem] shadow-md cursor-pointer duration-200 hover:brightness-75 rounded-lg  flex gap-2 bg-[#1d1d1d] text-white '
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
                                        <div className='flex p-2 flex-1 flex-col'>
                                            <div className='text-[1.1rem] font-bold  w-full line-clamp-1 mb-2'>
                                                {item.title}
                                            </div>
                                            <div className=' h-full text-[0.8rem] font-light w-full lowercase'>
                                                <p className='line-clamp-4'>{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ) : item.layout === 2 ? (
                                    <div
                                        key={index}
                                        onClick={() => setIsDetailTicket(item)}
                                        className='overflow-hidden max-w-[25rem] shadow-md duration-200 hover:brightness-75 h-[12rem] w-full cursor-pointer rounded-lg bg-gray-100 p-2bg-gray-100 relative flex justify-end items-start'
                                    >
                                        <img src={item.photoURL} className='w-full h-full object-cover rounded-lg' />

                                        <div className=' absolute bottom-0 left-0  flex flex-col p-2 backround-linear-gradient max-w-[20rem] text-white'>
                                            <div className='text-[0.9rem] line-clamp-1'>{item.title}</div>
                                            <div
                                                className=' h-full text-[0.8rem] font-light line-clamp-2                                             
                                            '
                                            >
                                                {item.description}
                                            </div>
                                        </div>
                                    </div>
                                ) : item.layout === 3 ? (
                                    <div
                                        key={index}
                                        onClick={() => setIsDetailTicket(item)}
                                        className='flex hover:brightness-75 overflow-hidden duration-200 justify-start gap-6'
                                    >
                                        <div className=' w-full rounded-lg max-w-[25rem] h-[28rem] bg-[#1d1d1d] text-white flex flex-col gap-2'>
                                            <label className='w-full h-[15rem]  cursor-pointer rounded-lg bg-white flex justify-center items-center'>
                                                <img
                                                    src={item.photoURL}
                                                    className='w-full h-full object-cover rounded-lg'
                                                />
                                            </label>
                                            <div className='p-2'>
                                                <div className='text-[1.1rem] font-bold outline-none w-full'>
                                                    <p className='line-clamp-2'>{item.title}</p>
                                                </div>
                                                <div className=' text-[0.8rem] mt-4 font-light w-full'>
                                                    <p className='line-clamp-6'>{item.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div
                                        className='flex hover:brightness-75 duration-200  justify-start gap-6'
                                        key={index}
                                        onClick={() => setIsDetailTicket(item)}
                                    >
                                        <label className=' rounded-lg cursor-pointer overflow-hidden w-full max-w-[25rem] lg:h-[30rem] duration-200 flex justify-center items-center relative bg-gray-100 h-[20rem] flex flex-col gap-2'>
                                            <img
                                                src={item.photoURL}
                                                className='w-full h-full object-cover rounded-lg'
                                            />
                                            <div className='absolute top-0   lg:w-[20rem] left-0 flex flex-col backround-linear-gradient text-white p-2 '>
                                                <div className='text-[0.9rem] font-bold w-full'>{item.title}</div>
                                                <div className=' text-[0.8rem] font-light w-full'>
                                                    <p className='line-clamp-2'>{item.description}</p>
                                                </div>
                                            </div>
                                        </label>
                                    </div>
                                ))
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
