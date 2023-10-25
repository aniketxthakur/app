import React from 'react'
import Navbar from '../main/components/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../main/components/footer.js/footer'

const MainRoute = ({children}) => {
  return (
    <div className='grid'>
      <Navbar/>
      <Outlet/>
      <Footer/>
     </div>
  )
}

export default MainRoute
