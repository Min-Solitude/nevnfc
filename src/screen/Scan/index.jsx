import React, { useState } from 'react'
import Section from '../../motion/Section'
import QrReader from 'react-qr-scanner'
import Swal from 'sweetalert2'
import { useDispatch } from 'react-redux'
import { checkIn } from '../../redux/reducers/ticket.recuder'

const Scan = () => {
    const [scanSuccess, setScanSuccess] = useState(false)

    const dispatch = useDispatch()

    const handleScan = async (data) => {
        if (data?.text) {
            setScanSuccess(true)
            try {
                dispatch(checkIn(data.text))
            } catch (e) {
                console.log(e)
                Swal.fire('Vé không hợp lệ!', '', 'error').then((e) => setScanSuccess(false))
            }
        }
    }

    const handleErr = (err) => {
        console.log(err)
    }

    return (
        <Section className={` flex flex-col gap-4 flex p-1  items-center`}>
            <h1 className='font-bold text-[1.6rem] mt-8'>SCAN TICKET </h1>
            <div className='banner-gradient p-2 rounded-lg'>
                <div className='w-[full] rounded-lg overflow-hidden'>
                    1
                    <QrReader
                        delay={100}
                        style={{
                            width: '100%'
                        }}
                        onError={handleErr}
                        onScan={handleScan}
                    />
                </div>
            </div>
        </Section>
    )
}

export default Scan
