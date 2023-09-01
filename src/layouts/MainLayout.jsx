import React from 'react'
import Header from './Header'

const MainLayout = ({ children }) => {
    return (
        <div className='h-[200vh]'>
            <Header />
            <main className='pt-[4rem] lg:pt-[5rem]'>{children}</main>
        </div>
    )
}

export default MainLayout
