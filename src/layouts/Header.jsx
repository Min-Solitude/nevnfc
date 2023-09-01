import IonIcon from '@reacticons/ionicons'
import { motion } from 'framer-motion'
import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../components/Logo'
import { dataCard } from '../data/navData'

const Header = () => {
    const [isMobile, setIsMobile] = React.useState(false)
    const [isDropMenu, setIsDropMenu] = React.useState(false)

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

    return (
        <motion.header
            className='fixed h-[4rem] backdrop-blur-[2rem] w-full z-50 flex items-center justify-between px-4 top-0 left-0'
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Logo className={`text-[1.4rem]`} />
            {isMobile ? (
                <div>
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        className={`rounded-lg flex justify-center items-center duration-200 ${
                            isDropMenu && 'background-gradient text-white p-2'
                        }`}
                        onClick={() => setIsDropMenu(!isDropMenu)}
                    >
                        <IonIcon name='menu' className='text-[1.4rem]' />
                    </motion.button>
                    {isDropMenu && (
                        <div
                            className='absolute text-[0.9rem] w-[15rem] rounded-xl right-4 -bottom-[7rem] bg-white shadow-md items-end p-2 translate-y-[50%] flex flex-col gap-2'
                            onClick={() => setIsDropMenu(false)}
                        >
                            {dataCard.map((item, index) => (
                                <NavLink
                                    to={item.link}
                                    key={index}
                                    className={`flex items-center gap-2 bg-gray-100 p-2 rounded-lg w-full justify-center`}
                                >
                                    <span>{item.title}</span>
                                    <IonIcon name={item.icon} />
                                </NavLink>
                            ))}
                        </div>
                    )}
                </div>
            ) : (
                <nav className='flex items-center gap-4'>
                    {dataCard.map((item, index) => (
                        <NavLink
                            to={item.link}
                            key={index}
                            className={(nav) =>
                                nav.isActive
                                    ? ` flex gap-2 items-center text-[0.9rem] py-2 px-6 rounded-lg duration-200 bg-gray-100`
                                    : ` flex gap-2 items-center text-[0.9rem] py-2 px-6 rounded-lg duration-200 hover:bg-gray-100`
                            }
                        >
                            <span>{item.title}</span>
                            <IonIcon name={item.icon} />
                        </NavLink>
                    ))}
                </nav>
            )}
        </motion.header>
    )
}

export default Header
