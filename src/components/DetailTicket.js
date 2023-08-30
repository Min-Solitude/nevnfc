import React from 'react'
import Section from '../motion/Section'
import QRCode from "react-qr-code";

const DetailTicket = ({title, description, id}) => {
  return (
    <Section className={`fixed h-screen flex justify-center bg-white w-full`}>
        <div className='my-4 flex flex-col gap-2 w-[40%] p-2 rounded-lg bg-gray-100 border border-gray-300'>
            <div className='h-[20rem] bg-white rounded-lg border border-gray-300'></div>
            <h1 className='mt-2 text-[1.6rem] text-gray-800'>{title}</h1>
            <p className='text-[0.9rem] font-light'>{description}</p> 
            <div className='w-[15rem] h-[15rem] rounded-lg overflow-hidden mt-4'>
                <QRCode
                    size={256}
                    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                    value={id}
                    viewBox={`0 0 256 256`}
                />
            </div>
        </div>
    </Section>
  )
}

export default DetailTicket