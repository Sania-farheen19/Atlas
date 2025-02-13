import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Home from '../../pages/Home'
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import Country from "../../pages/Country";
import { GiHamburgerMenu } from 'react-icons/gi';

const Headers = () => {
  

 
  
  return  <header>
    <div className='w-full bg-slate-800 flex justify-around items-center p-5 m-auto'> 
      <div className='text-white font-bold'>
        <NavLink to={"/"}>
          <h1 className='text-gray-200 text-2xl'>WorldAtlas</h1>
        </NavLink>
      
      </div>
      <div className='flex gap-6 font-semibold text-white'> <Link to={"/home"}>Home</Link>
               <Link to={"/about"}>About</Link>
               <Link to={"/country"}>Country</Link>
               <Link  to={"/contact"}>Contact</Link>
    </div>

    
      </div>
    </header>
  
}

export default Headers