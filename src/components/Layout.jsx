import React from 'react'
import Footer from './UI/Footer'
import Headers from './UI/Headers'
import { Outlet } from 'react-router-dom'

const Layout = () => {

    
  return (
   <>
   <Headers />
   <Outlet />
   <Footer />

   </>
  )
}

export default Layout