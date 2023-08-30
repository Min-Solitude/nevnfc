import React, { useState } from 'react'
import Section from '../../motion/Section'
import QrReader from 'react-qr-scanner'
import Swal from 'sweetalert2';
import CameraPhoto, { FacingMode } from 'react-html5-camera-photo'; 


const Scan = () => {

    const [scanSuccess, setScanSuccess] = useState(false);

    // const handleScan = async (data) => {
    //     if(data?.text) {
    //         setScanSuccess(true);

    //         try {
    //             Swal.fire(
    //                 `Vé hợp lệ! ${data.text}`,
    //                 '',
    //                 'success'
    //             ).then(e => setScanSuccess(false));
    //         }catch(e) {
    //             console.log(e);
    //             Swal.fire(
    //                 'Vé không hợp lệ!',
    //                 '',
    //                 'error'
    //             ).then(e => setScanSuccess(false));
    //         }

           
    //     };
    // }

    // const handleErr = (err) => {
    //     console.log(err);
    // }

    // const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

    // let facingMode;

    // if (isIOS) {
    // facingMode = 'environment';
    // } else {
    // facingMode = 'user';
    // }


    // Lấy camera sau trên IOS
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const facingMode = isIOS ? FacingMode.Environment : FacingMode.User;

    
    const handleTakePhoto = (dataUri) => {
        // Làm gì đó với ảnh chụp được
        Swal.fire(
            `Vé hợp lệ! ${dataUri}`,
            '',
            'success'
        ).then(e => setScanSuccess(false));

      }

  return (
    <Section className={`min-h-screen flex flex-col gap-4 flex justify-center items-center`}>     
        <h1>SCAN QR V2</h1>  
        <div className='w-[full] h-[30rem] overflow-hidden'>
            {/* <QrReader
                delay={ 100 }
                style={{
                    width: '100%',
                }}
                onError={ handleErr }
                onScan={ handleScan }
                facingMode={facingMode}
            /> */}

<CameraPhoto
  facingMode={facingMode}
  onTakePhoto = { (dataUri) => { handleTakePhoto(dataUri); } }  
/>
        </div>
    </Section>
  )
}

export default Scan