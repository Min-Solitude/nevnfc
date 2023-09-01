import React from 'react'
import { useNavigate } from 'react-router-dom'

const Logo = ({ className }) => {
    const navigate = useNavigate()
    return (
        <div
            className={`font-bold text-[1.2rem] text-gray-900 cursor-pointer ${className} `}
            onClick={() => navigate('/')}
        >
            Nevticket
        </div>
    )
}

export default Logo
