import React, { useState } from 'react'
import Section from '../../motion/Section'
import QrReader from 'react-qr-scanner'
import Swal from 'sweetalert2';

const Scan = () => {

    const [scanSuccess, setScanSuccess] = useState(false);
    const [isCamera, setIsCamera] = useState(false);

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
    <Section className={`min-h-screen flex flex-col gap-4 flex justify-center items-center`}>     
        <h1>SCAN QR V1</h1>  
        <div className='w-[full] h-[30rem] overflow-hidden'>
            <QrReader
                delay={ 100 }
                style={{
                    width: '100%',
                }}
                onError={ handleErr }
                onScan={ handleScan }
                facingMode={
                    // IOS
                    isCamera ? 'environment' : 'user'
                }
            />
        </div>
        <button
            onClick={ () => setIsCamera(!isCamera) }
        >Change</button>
    </Section>
  )
}

export default Scan