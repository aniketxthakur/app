import React from 'react'
import Navbar from '../main/components/navbar/Navbar'
import { Outlet } from 'react-router-dom'

const MainRoute = ({children}) => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
     </div>
  )
}

export default MainRoute
