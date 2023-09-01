import React from 'react'
import { motion } from 'framer-motion'
import IonIcon from '@reacticons/ionicons'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../../components/Logo'
import QRCode from 'react-qr-code'
import { dataCard } from '../../data/navData'

const Home = () => {
    const [isMobile, setIsMobile] = React.useState(false)
    const [isChangeLayout, setIsChangeLayout] = React.useState(false)
    const [isDropMenu, setIsDropMenu] = React.useState(false)
    const [isShowQrCode, setIsShowQrCode] = React.useState(false)
    const navigate = useNavigate()

    // GET LINK IN URL

    const url = window.location.href

    const checkMobile = () => {
        if (window.innerWidth <= 768) {
            setIsMobile(true)
            setIsDropMenu(false)
            setIsShowQrCode(false)
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

    if (isMobile)
        return (
            <motion.div className=' h-screen overflow-hidden'>
                <motion.div
                    className='rounded-xl bg-white h-full flex gap-8  flex-col items-center justify-center'
                    initial={{ opacity: 0, scale: 0, rotate: 360 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1.5, type: 'spring', stiffness: 100 }}
                >
                    <div className='w-[15rem] h-[15rem] rounded-lg banner-gradient p-2'>
                        <img
                            src='https://i.pinimg.com/564x/07/cf/fa/07cffa5e337dbe0b7f350af68fcb2335.jpg'
                            alt='nev'
                            className='w-full h-full rounded-lg'
                        />
                    </div>
                    <motion.button
                        className='banner-gradient p-1 rounded-full'
                        whileTap={{ scale: 0.9 }}
                        onClick={() => navigate('/m/nevticket')}
                    >
                        <div className='bg-white rounded-full py-2 px-6'>Get started</div>
                    </motion.button>
                </motion.div>
            </motion.div>
        )

    return (
        <div className=' bg-white overflow-hidden flex h-screen relative justify-center items-center'>
            {isChangeLayout ? (
                dataCard.map((item, index) =>
                    item.cardPosition ? (
                        <motion.div
                            key={index}
                            className='w-[15rem] p-2 h-[20rem] absolute rounded-lg cursor-pointer bg-[#fafafa] shadow-md border border-gray-200'
                            initial={{ opacity: 0, scale: 0, left: '50%', top: '50%', translateY: '-50%', rotate: 360 }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                left: 0,
                                top: 0,
                                translateY: item.top,
                                translateX: '-50%',
                                rotate: 10
                            }}
                            transition={{ duration: 1.5, type: 'spring', stiffness: 100 }}
                            whileHover={{ translateX: '0%', rotate: 25 }}
                        >
                            <Link to={item.link}>
                                <div className='h-[12rem] rounded-lg bg-white border border-gray-200 flex justify-center items-center'>
                                    <IonIcon name={item.icon} className='text-[4rem] text-gray-400' />
                                </div>
                            </Link>
                            <div className='py-2'>
                                <h2 className='text-gray-800'>{item.title}</h2>
                                <p className='text-[0.9rem] font-light'>{item.description}</p>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key={index}
                            className='w-[15rem] p-2 h-[20rem] absolute rounded-lg shadow-md cursor-pointer bg-[#fafafa]'
                            initial={{
                                opacity: 0,
                                scale: 0,
                                right: '50%',
                                top: '50%',
                                translateY: '-50%',
                                rotate: -360
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                right: 0,
                                top: 0,
                                translateY: item.top,
                                translateX: '50%',
                                rotate: -10
                            }}
                            transition={{ duration: 1.5, type: 'spring', stiffness: 100 }}
                            whileHover={{ translateX: '0%', rotate: -25 }}
                        >
                            <Link to={item.link}>
                                <div className='h-[12rem] rounded-lg bg-white border border-gray-200 flex justify-center items-center'>
                                    <IonIcon name={item.icon} className='text-[4rem] text-gray-400' />
                                </div>
                            </Link>
                            <div className='py-2'>
                                <h2 className='text-gray-800'>{item.title}</h2>
                                <p className='text-[0.9rem] font-light'>{item.description}</p>
                            </div>
                        </motion.div>
                    )
                )
            ) : (
                <motion.div
                    className='fixed items-center left-0 w-full bg-white shadow-md flex justify-between p-4 top-0'
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, type: 'spring', stiffness: 100 }}
                >
                    <motion.button
                        className={`flex justify-center relative items-center p-1 rounded-lg ${
                            isDropMenu && 'banner-gradient text-white'
                        }`}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsDropMenu(!isDropMenu)}
                    >
                        <IonIcon name='menu-outline' className='text-[1.5rem]' />
                        {isDropMenu && (
                            <motion.div className='absolute p-2 flex flex-col gap-2 rounded-xl left-0 -bottom-8 translate-y-[100%] bg-white shadow-sm border border-gray-100 w-[20rem]'>
                                {dataCard.map((item, index) => (
                                    <Link
                                        className=' rounded-lg p-1 hover:bg-gray-100 flex flex-col items-start text-black'
                                        to={item.link}
                                        key={index}
                                    >
                                        <div className='flex items-center gap-2'>
                                            <h2>{item.title}</h2>
                                            <IonIcon name={item.icon} />
                                        </div>
                                        <p className='text-start text-[0.8rem] text-gray-500'>{item.description}</p>
                                    </Link>
                                ))}
                            </motion.div>
                        )}
                    </motion.button>
                    <div>
                        <Logo />
                    </div>
                    <motion.button
                        className={`flex justify-center relative items-center p-1 rounded-lg ${
                            isShowQrCode && 'banner-gradient text-white'
                        }`}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsShowQrCode(!isShowQrCode)}
                    >
                        <IonIcon name='qr-code-outline' className='text-[1.5rem]' />
                    </motion.button>
                    {isShowQrCode && (
                        <motion.div
                            className='absolute p-1 rounded-xl right-0 -bottom-8 translate-y-[100%] banner-gradient'
                            initial={{ opacity: 0, y: '-200%', x: '-1rem' }}
                            animate={{ opacity: 1, y: '12rem', x: '-1rem' }}
                            transition={{ duration: 0.2, type: 'spring', stiffness: 100 }}
                        >
                            <div className='flex rounded-lg  p-1 bg-white flex-col items-center gap-2'>
                                <div className='h-[10rem] w-[10rem] rounded-lg overflow-hidden'>
                                    <QRCode value={`${url}/suprise`} className='w-full h-full' />
                                </div>
                                <h1 className='text-[0.9rem] font-bold'>Scan me!</h1>
                            </div>
                        </motion.div>
                    )}
                </motion.div>
            )}
            <motion.div
                className='w-[50%] flex items-center justify-center p-2  rounded-xl relative banner-gradient shadow-md'
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, type: 'spring', stiffness: 100 }}
            >
                <div className='bg-white rounded-xl p-4'>
                    <img
                        src='https://uploads-ssl.webflow.com/61a2b0883305d337048a4219/61a30c1d6bff265c8a5cc71e_Creator%20Circles.png'
                        alt='nev'
                        className=''
                    />
                    <div className='flex mt-4 xl:mt-8 flex-col items-center'>
                        <h1 className='text-center font-bold text-[1.4rem]'>
                            Stay connected with Nevticket .'s community
                        </h1>
                        <p className='text-gray-500 text-center text-[0.9rem] font-light'>
                            Experiencing all our services will be a blessing for you
                        </p>
                        <motion.button
                            className='text-[0.9rem] mt-4 mb-2 banner-gradient rounded-full p-1 '
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsChangeLayout(!isChangeLayout)}
                        >
                            <div className='flex items-center gap-2 bg-white w-full px-8 py-2 rounded-full'>
                                <span>Change</span> <IonIcon name='repeat-outline' />
                            </div>
                        </motion.button>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Home
