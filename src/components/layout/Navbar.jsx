import React from 'react'
import { NavLink } from 'react-router'

export default function Navbar() {
  return (
    <div className='container mx-auto text-center py-4 bg-neutral-600 text-white'>
      <ul className='flex gap-2 justify-center'>
        <NavLink to="/" className={({ isActive }) => isActive ? 'text-blue-200' : ''}>Home</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-blue-200' : ''}>Contact</NavLink>
        <NavLink to="/collect-info" className={({ isActive }) => isActive ? 'text-blue-200' : ''}>Collect Info</NavLink>
      </ul>
    </div>
  )
}
