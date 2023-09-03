import React, { useEffect } from 'react'
import Section from '../../motion/Section'
import Swal from 'sweetalert2'

const NFC = () => {
    // Check if NFC is supported

    useEffect(() => {
        if ('NDEFReader' in window) {
            Swal.fire({
                title: 'NFC is supported',
                icon: 'success',
                confirmButtonText: 'Cool'
            })
        } else {
            Swal.fire({
                title: 'NFC is not supported',
                icon: 'error',
                confirmButtonText: 'OK'
            })
        }
    }, [])

    return <Section className={'p-4'}>NFC</Section>
}

export default NFC
