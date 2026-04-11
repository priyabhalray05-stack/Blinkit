import React from 'react'

const categories=[
    {
        img:"https://tse2.mm.bing.net/th/id/OIP.w-cVlglMOhx8LHM8k7lrSgHaHa?pid=ImgDet&w=159&h=159&c=7&o=7&rm=3",
        time:"8 MINS",
        name:"Old Hill Parmesan Cheese Block ",
        weight:"200g",
        price:"RS.555"
    },

    {
        img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/c65283d2-7e14-4a19-9c71-aa83287552d9.png",
        time:"8 MINS",
        name:"Old Hill Red Chedder Cheese Block",
        weight:" 200g",
        price:"RS.425",
    },
    {   
        offer:"25% OFF",
        img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/4a15f69a-7133-427a-b369-b3b82d523d19.png",
        time:"8MINS",
        name:"Nature Vit Cheddar Cheese Powder",
        weight:"250 g",
        price:"RS.299",
        price:"RS.400"
    },
    
]

function Backery() {
  return (
    <div className='mt-8 '>
      <h2 className='px-6 text-xl'> Dairy, Bread & Eggs</h2>
      <div className='flex gap-5 mx-5'>
        {
            categories.map((item,index)=>(
                <div key={index} className='w-[220px] h-[300px]  border border-gray-400 rounded-2xl mt-6'>
                    <img src={item.img} alt="" className='h-[140px] pl-8'/>
                    <p className='text-sm px-4'>{item.time}</p>
                    <p className='text-xm pl-4 pt-2 '>{item.name}</p>
                    <p className='text-sm pl-4  text-gray-400 pt-3'>{item.weight}</p>
                    <div className='flex justify-around'>
                        <p className='text-sm font-bold pt-2 pr-8'>{item.price}</p>
                        <button className='border-green-500 bg-gray-100 font-bold text-sm border rounded h-8 w-18 text-green-600'>ADD</button>
                    </div>
                </div>
            ))
        } 
      </div>
      
    </div>
  )
}

export default Backery
