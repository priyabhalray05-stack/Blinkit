import React from 'react'
import { NavLink } from 'react-router-dom';

const categories=[
  {
    img:"https://tse4.mm.bing.net/th/id/OIP.B2EzNWbMSB4xCqJXwyYRagHaHa?pid=ImgDet&w=159&h=159&c=7&o=7&rm=3",name:"Paan Corner",
  },
  {
    img:"https://www.bing.com/th/id/OIP.x9YM9XMCgh63CNzzVjZxlQAAAA?w=188&h=188&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
        name:"Bread",
  },
  {
     img:"https://tse4.mm.bing.net/th/id/OIP.v748ydymXBYZaYdENG2oTQHaGL?pid=ImgDet&w=195&h=162&c=7&dpr=1.5&o=7&rm=3", name:"Fruits & Vegetables",
    
  },
  {
    img:"https://tse4.mm.bing.net/th/id/OIP.9tiAADg_II3zKcGHnIwy4QHaEK?pid=ImgDet&w=159&h=89&c=7&o=7&rm=3",name:"Cold drinks",
  },
  {
    img:"https://tse1.mm.bing.net/th/id/OIP.uIPk-EdNBed_4wNtBmPPzAAAAA?pid=ImgDet&w=159&h=179&c=7&o=7&rm=3", name:"Snakes & Munchies",

  },
  {
    img:"https://tse1.mm.bing.net/th/id/OIP.VNwth8lvkVrVIHa-Gh7GOwAAAA?pid=ImgDet&w=159&h=157&c=7&o=7&rm=3",name:"Breakfast & Instant Noodles",
  },
  {
    img:"https://tse1.mm.bing.net/th/id/OIP.YoMKbYYVY_nYe225R-eCKQAAAA?pid=ImgDet&w=159&h=179&c=7&o=7&rm=3",name:"Sweet Tooth"
  },
  {img:"https://tse3.mm.bing.net/th/id/OIP.Bo_myKPJxMX7Sv8FJiClIgAAAA?pid=ImgDet&w=159&h=157&c=7&o=7&rm=3",name:"Biscuit"

  },
  {img:"https://tse3.mm.bing.net/th/id/OIP.rulZS2GwPuql7iJ3xSK0DwAAAA?pid=ImgDet&w=159&h=161&c=7&o=7&rm=3",name:"Tea,coffee & Milk drinks"},
  {img:"https://tse2.mm.bing.net/th/id/OIP.Ezu9TGpceq7iw9zlEnZcygAAAA?pid=ImgDet&w=159&h=159&c=7&o=7&rm=3",name:"Ata,Rice,Dal"}
  
];

function Small() {
 
  return (
    <div className='w-full  mt-8 grid grid-cols-10 ml-4'>
    {
      categories.map((item,index)=>(
        <NavLink to="/Milk">
        <div key={index} >
          <img src={item.img} alt="" className='h-24 w-30 bg-amber-300 object-cover' />
          <p className='text-sm px-8'>{item.name}</p>
        </div>
        </NavLink>
      ))
    }
    </div>
  )
}

export default Small
