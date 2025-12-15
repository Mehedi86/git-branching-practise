import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

export default function MainLayout() {
    return (
        <div>
            <Navbar/>
            <div className='min-h-screen'>
                <Outlet />
            </div>
            <Footer/>
        </div>
    )
}
