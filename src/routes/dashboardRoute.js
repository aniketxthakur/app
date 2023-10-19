import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../dashboard/components/navbar/navbar'

const DashboardRoute = () => {
  return (
    <div className='mt-40'>
      <Navbar/>
    <Outlet/>
    </div>
  )
}

export default DashboardRoute
