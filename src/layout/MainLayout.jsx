import React from 'react'
import { Outlet } from 'react-router'

export default function MainLayout() {
    return (
        <div>
            <h1>Navbar</h1>
            <div>
                <Outlet />
            </div>
            <h1>Footer</h1>
        </div>
    )
}
