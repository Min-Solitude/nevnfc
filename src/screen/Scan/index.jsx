import React, { useState } from 'react'
import Section from '../../motion/Section'
import QrReader from 'react-qr-scanner'
import Swal from 'sweetalert2';

const Scan = () => {

    const [scanSuccess, setScanSuccess] = useState(false);
    const [isCameraFront, setIsCameraFront] = useState(false);

    const handleScan = async (data) => {
        if(data?.text) {
            setScanSuccess(true);

            try {
                Swal.fire(
                    `Vé hợp lệ! ${data.text}`,
                    '',
                    'success'
                ).then(e => setScanSuccess(false));
            }catch(e) {
                console.log(e);
                Swal.fire(
                    'Vé không hợp lệ!',
                    '',
                    'error'
                ).then(e => setScanSuccess(false));
            }

           
        };
    }

    const handleErr = (err) => {
        console.log(err);
    }


  return (
    <Section className={`min-h-screen flex flex-col gap-4 bg-pink-400 flex justify-center items-center`}>     
        <h1>SCAN QR V3</h1>  
        <div className='w-[full] h-[30rem] overflow-hidden'>
            <QrReader
                delay={ 100 }
                style={{
                    width: '100%',
                }}
                onError={ handleErr }
                onScan={ handleScan }
                // Get the phone's back camera by default
                facingMode={isCameraFront}

                
            />
        </div>
        <button
            onClick={() => setIsCameraFront(!isCameraFront)}
        >Change Camera</button>
    </Section>
  )
}

export default Scan