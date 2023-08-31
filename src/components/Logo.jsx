import React from 'react'
import { useNavigate } from 'react-router-dom'

const Logo = ({className}) => {
    const navigate = useNavigate()
  return (
    <div className={`${className} font-bold text-[1.8rem] text-gray-900 cursor-pointer`}
        onClick={() => navigate('/')}
    >Nevticket</div>
  )
}

export default Logo