import React from 'react'
import { NavLink } from "react-router-dom";
const categories=[
    {
        img:"https://tse4.mm.bing.net/th/id/OIP.LJbPx2SfUJrhScmzCzHiiAAAAA?pid=ImgDet&w=159&h=161&c=7&o=7&rm=3",name:"Masala Oil & More",
    },
    {img:"https://tse4.mm.bing.net/th/id/OIP.9l6IPn8CsxhcYw8W1OXEMAAAAA?pid=ImgDet&w=159&h=179&c=7&o=7&rm=3",name:"Sauces & Spreads"},
    {img:"https://tse4.mm.bing.net/th/id/OIP.rZh4riqz7jcy5U1D9AtXdgAAAA?pid=ImgDet&w=159&h=105&c=7&o=7&rm=3",name:"Chicken meat"},
    {img:"https://tse3.mm.bing.net/th/id/OIP.PZpxwphGuxMQH1pzR0PSnwHaHa?pid=ImgDet&w=159&h=159&c=7&o=7&rm=3",name:"Organic & Healthy Living"},
    {img:"https://tse3.mm.bing.net/th/id/OIP.9uQqV5YfskRV-r64v1KVJwAAAA?pid=ImgDet&w=150&h=150&c=7&o=7&rm=3",name:"Baby care"},
    {img:"https://tse3.mm.bing.net/th/id/OIP.mkiOOaHcDkZyxvL6v8h6bwAAAA?pid=ImgDet&w=159&h=159&c=7&o=7&rm=3",name:"Pharma & Wellness"},
    {img:"https://tse4.mm.bing.net/th/id/OIP.5XkIcvtlIOlfPPhraJJaXQAAAA?pid=ImgDet&w=159&h=209&c=7&o=7&rm=3",name:"Cleaning Essentials"},
    {img:"https://tse3.mm.bing.net/th/id/OIP.KnSNYMgBz2KmxKAHG2ToxwAAAA?pid=ImgDet&w=159&h=210&c=7&o=7&rm=3", name:"Home & Office"},
    {img:"https://tse4.mm.bing.net/th/id/OIP.54mp0mXfZAF4LaSKwEwW9gAAAA?pid=ImgDet&w=159&h=126&c=7&o=7&rm=3", name:"Personal Care"},
    {img:"https://tse3.mm.bing.net/th/id/OIP.CZAgAgbMX6ZEfqAVRTe-BgAAAA?pid=ImgDet&w=144&h=212&c=7&o=7&rm=3",name:"Pet Care"},
]

function Small2() {
  return (
    
    <div className='w-full  mt-8 grid grid-cols-10 ml-4' >
       {
        categories.map((item,index)=>( 
            <NavLink to="/Milk">
            <div key={index} className='mx-2 mt-6'>
                <img src={item.img} alt="" className='h-24 w-24  rounded-2xl'/>
                <p className='text-sm pl-2'>{item.name}</p>
            </div>
            </NavLink>
        ))
       }

    </div>
  )
}

export default Small2
