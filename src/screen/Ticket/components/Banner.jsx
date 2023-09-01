import React from 'react'

const Banner = () => {
    return (
        <div className='h-[25rem] rounded-lg shadow-sm flex justify-center relative overflow-hidden background-gradient'>
            <img
                src='https://images.ctfassets.net/v3n26e09qg2r/4D9CSEOzzm4zjCdPbmkFKE/927da3b4c128c841bb0abb4a16747f9e/Hero_Image_Left.webp?w=1052&h=1246&q=80&fm=webp'
                alt='nev'
                className='absolute w-[40rem] lg:w-[20rem] lg:left-0 lg:bottom-0 lg:translate-y-[30%] lg:translate-x-[-30%]'
            />
            <img
                src='https://images.ctfassets.net/v3n26e09qg2r/3Ciub8Qc1UhiOVboAfmazR/0a0737be4b3eabc7d9c9c0d00e9f94f7/Hero_Right_Image_Default-2022.png?w=2069&h=2319&q=80&fm=webp'
                alt='nev'
                className='absolute hidden lg:block w-[40rem] lg:w-[20rem] right-0 bottom-0 translate-y-[30%] translate-x-[30%]'
            />
            <h1 className='mt-8 text-white font-bold text-[2rem] hidden lg:block tracking-wider'>My ticket</h1>
        </div>
    )
}

export default Banner
