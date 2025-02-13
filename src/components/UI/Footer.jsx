import React from 'react'
import FooterData from '../../APIs/Footer.json'
import { MdPlace } from 'react-icons/md'
import { IoCallSharp, IoMailSharp } from 'react-icons/io5'
import { TbMailPlus } from 'react-icons/tb'

const Footer = () => {
 
const  footerIcons = {
  MdPlace:<MdPlace/>,
  IoCallSharp:<IoCallSharp/>,
  TbMailPlus:<TbMailPlus/>


}
  return <footer className='w-full bg-gray-900 p-4'>
<div className='grid grid-cols-3'>
  {FooterData.map((item,idx)=>{

    const {icon,title,details} = item;

    return (
      
      <div className='' key={idx}>
        <div className='text-white'>{footerIcons[icon]}</div>
        <div>
          <p className='text-blue-600 font-bold'>{title}</p>
          <p className='text-gray-400'>{details}</p>
        </div>

        </div>
        
    )
      
    
  })}
</div>
<div className= ' bg-gray-700 p-1 mt-10 w-full'>
  <p className='text-center text-white'>All Rights Reserved 2025</p>
</div>
  </footer>
}

export default Footer