import React from 'react'
import { NavLink } from 'react-router-dom'

const images=[
    {img:"https://tse4.mm.bing.net/th/id/OIP.z9HkUJKEHLrkIAYVY9jZcAAAAA?pid=ImgDet&w=159&h=81&c=7&o=7&rm=3"},
    {img:"https://tse1.mm.bing.net/th/id/OIP.7s_62QxfhpofunREcDAbuwHaCm?pid=ImgDet&w=159&h=55&c=7&o=7&rm=3"},
    {img:"https://tse1.mm.bing.net/th/id/OIP.qauTtT4rRUL6Mtp_oo8hoQAAAA?pid=ImgDet&w=147&h=154&c=7&o=7&rm=3"},
    {img:"https://tse3.mm.bing.net/th/id/OIP.PE1Tne2di8estzyolas7xwAAAA?pid=ImgDet&w=150&h=150&c=7&o=7&rm=3"},
    {img:"https://tse1.mm.bing.net/th/id/OIP.ciDlzg90GHGmQJsUbbooSAAAAA?pid=ImgDet&w=127&h=178&c=7&o=7&rm=3"},
    {img:"https://tse2.mm.bing.net/th/id/OIP.V0GGBYozdEtU9aCUcOTwmQAAAA?pid=ImgDet&w=150&h=150&c=7&o=7&rm=3"},
    {img:"https://tse2.mm.bing.net/th/id/OIP.xigG_bzZMEVCnY-EaUfkaAAAAA?pid=ImgDet&w=159&h=159&c=7&o=7&rm=3"},
    
]


function Footer() {
  return (
    <div>
    <div className='flex justify-center gap-10 pt-10 pr-20'> 
        <p className='text-[12px] text-gray-500 pt-2 pl-30'>© Blink Commerce Private Limited, 2016-2026</p>
        {
            images.map((item,index)=>(
                <div key={index}>
                  <NavLink>
                 <img src={item.img} onClick={NavLink} alt="" className='h-[35px]' />
                 </NavLink>
                </div>
            ))
        }

        

        </div>
      <p className='text-[13px] text-gray-500 pt-8 p-5'>“Blinkit” is owned & managed by "Blink Commerce Private Limited" and is not related, linked or interconnected in whatsoever manner or nature, to “GROFFR.COM” which is a real estate services business operated by “Redstone Consultancy Services Private Limited”.</p>
        
       
      
    </div>
  )
}

export default Footer
