import React from 'react'
import { motion } from 'framer-motion'
import IonIcon from '@reacticons/ionicons'

const CreateTicket = ({ close }) => {
    const [chooseLayout, setChooseLayout] = React.useState(0)
    const [isMobile, setIsMobile] = React.useState(false)
    const [changeLayoutInMobile, setChangeLayoutInMobile] = React.useState(0)

    const checkMobile = () => {
        if (window.innerWidth <= 768) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }

    React.useEffect(() => {
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => {
            window.removeEventListener('resize', checkMobile)
        }
    }, [isMobile])

    if (chooseLayout !== 0) {
        return (
            <div className='fixed top-0 left-0 bottom-0 p-4 lg:p-0 right-0 bg-[#ffffff] flex justify-center items-center z-50'>
                <div className='flex w-full flex-col  lg:items-center gap-2 p-2'>
                    <h1 className='text-[1.2rem] font-bold text-gray-700 lg:mb-4'>Create ticket</h1>
                    <input type='file' id='image' className='hidden' />
                    {chooseLayout === 1 ? (
                        <div className='w-full shadow-md lg:w-[28rem] cursor-pointer duration-200 rounded-lg  flex gap-2 bg-gray-100 p-2'>
                            <label
                                htmlFor='image'
                                className='w-[8rem] hover:brightness-90 duration-200 cursor-pointer rounded-lg h-[8rem] bg-white flex justify-center items-center'
                            >
                                <IonIcon name='image-outline' className='text-[2rem] text-gray-400' />
                            </label>
                            <div className='flex flex-1 gap-2 flex-col'>
                                <input
                                    type='text'
                                    placeholder='Title'
                                    className='rounded-lg bg-white py-2 px-4 text-[0.9rem] outline-none w-full'
                                />
                                <textarea
                                    placeholder='Description'
                                    className='rounded-lg py-2 px-4 outline-none h-full text-[0.8rem] font-light w-full'
                                ></textarea>
                            </div>
                        </div>
                    ) : chooseLayout === 2 ? (
                        <label
                            htmlFor='image'
                            className='lg:w-[28rem] shadow-md h-[12rem] w-full cursor-pointer rounded-lg bg-gray-100 p-2bg-gray-100 p-2 relative flex justify-end items-start'
                        >
                            <IonIcon name='image-outline' className='text-[2rem] text-gray-400' />
                            <div className=' absolute bottom-5 left-4 flex flex-col gap-2'>
                                <input
                                    type='text'
                                    placeholder='Title'
                                    className='py-1 px-2 text-[0.9rem] rounded-lg outline-none bg-white'
                                />
                                <textarea
                                    placeholder='Description'
                                    className='outline-none px-2 rounded-lg h-full text-[0.8rem] font-light bg-white'
                                ></textarea>
                            </div>
                        </label>
                    ) : chooseLayout === 3 ? (
                        <div className='flex justify-start gap-6 shadow-md'>
                            <div className=' w-full rounded-lg bg-gray-100 duration-200 p-2 flex flex-col gap-2'>
                                <label
                                    htmlFor='image'
                                    className='w-full duration-200 hover:brightness-75 cursor-pointer rounded-lg h-[20rem] bg-white flex justify-center items-center'
                                >
                                    <IonIcon name='image-outline' className='text-[2rem] text-gray-400' />
                                </label>
                                <input
                                    type='text'
                                    placeholder='Title'
                                    className='rounded-lg bg-white py-2 px-4 text-[0.9rem] outline-none w-full'
                                />
                                <textarea
                                    placeholder='Description'
                                    className='rounded-lg py-2 px-4 outline-none h-full text-[0.8rem] font-light w-full'
                                ></textarea>
                            </div>
                        </div>
                    ) : (
                        <div className='flex justify-start gap-6'>
                            <label
                                htmlFor='image'
                                className=' rounded-lg cursor-pointer w-full lg:w-[25rem] lg:h-[30rem] duration-200 flex justify-center items-center relative bg-gray-100 h-[20rem] p-2 flex flex-col gap-2'
                            >
                                <IonIcon name='image-outline' className='text-[2rem] text-gray-400' />
                                <div className='absolute top-4 lg:w-[20rem] left-4 flex flex-col gap-2'>
                                    <input
                                        type='text'
                                        placeholder='Title'
                                        className='rounded-lg bg-white py-2 px-4 text-[0.9rem] outline-none w-full'
                                    />
                                    <textarea
                                        placeholder='Description'
                                        className='rounded-lg py-2 px-4 outline-none h-full text-[0.8rem] font-light w-full'
                                    ></textarea>
                                </div>
                            </label>
                        </div>
                    )}
                </div>
            </div>
        )
    }

    return (
        <motion.div
            className='fixed top-0 left-0 bottom-0 p-4 lg:p-0 right-0 bg-[#ffffff] flex justify-center items-center z-50'
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            {isMobile ? (
                <div className='w-full flex flex-col gap-4'>
                    <div className=''>
                        <h1 className='text-[1.2rem] font-bold text-gray-700'>Choose layout</h1>
                    </div>
                    <div className='flex items-center gap-4'>
                        {[1, 2, 3, 4].map((item, index) => (
                            <motion.button
                                key={index}
                                whileTap={{ scale: 0.9 }}
                                className={`flex justify-center items-center text-gray-600 w-[3rem] h-[3rem] rounded-lg bg-gray-100 ${
                                    changeLayoutInMobile === item && 'bg-gray-300'
                                }`}
                                onClick={() => setChangeLayoutInMobile(item)}
                            >
                                {item}
                            </motion.button>
                        ))}
                    </div>
                    <div className='p-2 rounded-lg bg-gray-100 '>
                        {changeLayoutInMobile === 0 ? (
                            <div className='text-[0.8rem] text-red-500'>
                                <i>Please choose layout</i>
                            </div>
                        ) : changeLayoutInMobile === 1 ? (
                            <div>
                                <div className='rounded-lg  flex gap-2 bg-gray-100'>
                                    <div className='w-[8rem] rounded-lg h-[8rem] bg-white flex justify-center items-center'>
                                        <IonIcon name='image-outline' className='text-[2rem] text-gray-400' />
                                    </div>
                                    <div className='flex flex-1 gap-2 flex-col'>
                                        <div className='rounded-lg bg-white p-4 w-full'></div>
                                        <div className='rounded-lg bg-white p-11 w-full'></div>
                                    </div>
                                </div>
                            </div>
                        ) : changeLayoutInMobile === 2 ? (
                            <div>
                                <div className='h-[10rem] rounded-lg bg-gray-100 p-2bg-gray-100 p-2 relative flex justify-center items-center'>
                                    <IonIcon name='image-outline' className='text-[2rem] text-gray-400' />
                                    <span className='absolute bottom-8 left-4 w-[50%] p-1 rounded-full bg-white'></span>
                                    <span className='absolute bottom-5 left-4 w-[50%] p-1 rounded-full bg-white'></span>
                                    <span className='absolute bottom-2 left-4 w-[50%] p-1 rounded-full bg-white'></span>
                                </div>
                            </div>
                        ) : changeLayoutInMobile === 3 ? (
                            <div>
                                <div className=' rounded-lg bg-gray-100 flex flex-col gap-2'>
                                    <div className='rounded-lg h-[10rem] bg-white flex justify-center items-center'>
                                        <IonIcon name='image-outline' className='text-[2rem] text-gray-400' />
                                    </div>
                                    <span className='bg-white p-1 rounded-full'></span>
                                    <span className='bg-white p-1 rounded-full'></span>
                                    <span className='bg-white p-1 rounded-full'></span>
                                    <span className='bg-white p-1 rounded-full'></span>
                                    <span className='bg-white p-1 rounded-full'></span>
                                    <span className='bg-white p-1 rounded-full'></span>
                                    <span className='bg-white p-1 rounded-full'></span>
                                    <span className='bg-white p-1 rounded-full'></span>
                                    <span className='bg-white p-1 rounded-full'></span>
                                </div>
                            </div>
                        ) : (
                            <div>
                                <div className='flex justify-start gap-6'>
                                    <div className=' rounded-lg w-full flex justify-center items-center relative bg-gray-100 h-[20rem] p-2 flex flex-col gap-2'>
                                        <IonIcon name='image-outline' className='text-[2rem] text-gray-400' />
                                        <span className='bg-white p-1 absolute top-2 left-2 w-[75%] rounded-full'></span>
                                        <span className='bg-white p-1 absolute top-5 left-2 w-[50%] rounded-full'></span>
                                        <span className='bg-white p-1 absolute top-8 left-2 w-[50%] rounded-full'></span>
                                        <span className='bg-white p-1 absolute top-11 left-2 w-[50%] rounded-full'></span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        className='background-gradient p-2 rounded-lg text-white text-[0.9rem] mt-4'
                        onClick={() => setChooseLayout(changeLayoutInMobile)}
                    >
                        Choose
                    </motion.button>
                </div>
            ) : (
                <div className='bg-white rounded-lg p-2 border border-gray-100 shadow-md'>
                    {chooseLayout === 0 && (
                        <div className='mt-2'>
                            <div className='px-4'>
                                <h1 className='text-[1.2rem] font-bold text-gray-700'>Choose layout</h1>
                            </div>
                            <div className='grid grid-cols-2 gap-6 p-4'>
                                <div
                                    className='w-[28rem] cursor-pointer duration-200 hover:brightness-95 rounded-lg  flex gap-2 bg-gray-100 p-2'
                                    onClick={() => setChooseLayout(1)}
                                >
                                    <div className='w-[8rem] rounded-lg h-[8rem] bg-white flex justify-center items-center'>
                                        <IonIcon name='image-outline' className='text-[2rem] text-gray-400' />
                                    </div>
                                    <div className='flex flex-1 gap-2 flex-col'>
                                        <div className='rounded-lg bg-white p-4 w-full'></div>
                                        <div className='rounded-lg bg-white p-11 w-full'></div>
                                    </div>
                                </div>
                                <div
                                    className='w-[28rem] cursor-pointer duration-200 hover:brightness-95 rounded-lg bg-gray-100 p-2bg-gray-100 p-2 relative flex justify-center items-center'
                                    onClick={() => setChooseLayout(2)}
                                >
                                    <IonIcon name='image-outline' className='text-[2rem] text-gray-400' />
                                    <span className='absolute bottom-8 left-4 w-[50%] p-1 rounded-full bg-white'></span>
                                    <span className='absolute bottom-5 left-4 w-[50%] p-1 rounded-full bg-white'></span>
                                    <span className='absolute bottom-2 left-4 w-[50%] p-1 rounded-full bg-white'></span>
                                </div>
                                <div className='flex justify-start gap-6' onClick={() => setChooseLayout(3)}>
                                    <div className=' rounded-lg bg-gray-100 duration-200 hover:brightness-95 p-2 flex flex-col gap-2'>
                                        <div className='w-[15rem] rounded-lg h-[10rem] bg-white flex justify-center items-center'>
                                            <IonIcon name='image-outline' className='text-[2rem] text-gray-400' />
                                        </div>
                                        <span className='bg-white p-1 rounded-full'></span>
                                        <span className='bg-white p-1 rounded-full'></span>
                                        <span className='bg-white p-1 rounded-full'></span>
                                        <span className='bg-white p-1 rounded-full'></span>
                                        <span className='bg-white p-1 rounded-full'></span>
                                        <span className='bg-white p-1 rounded-full'></span>
                                        <span className='bg-white p-1 rounded-full'></span>
                                        <span className='bg-white p-1 rounded-full'></span>
                                        <span className='bg-white p-1 rounded-full'></span>
                                    </div>
                                </div>
                                <div className='flex justify-start gap-6' onClick={() => setChooseLayout(4)}>
                                    <div className=' rounded-lg w-[15rem] hover:brightness-95 duration-200 flex justify-center items-center relative bg-gray-100 h-[20rem] p-2 flex flex-col gap-2'>
                                        <IonIcon name='image-outline' className='text-[2rem] text-gray-400' />
                                        <span className='bg-white p-1 absolute top-2 left-2 w-[75%] rounded-full'></span>
                                        <span className='bg-white p-1 absolute top-5 left-2 w-[50%] rounded-full'></span>
                                        <span className='bg-white p-1 absolute top-8 left-2 w-[50%] rounded-full'></span>
                                        <span className='bg-white p-1 absolute top-11 left-2 w-[50%] rounded-full'></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </motion.div>
    )
}

export default CreateTicket
