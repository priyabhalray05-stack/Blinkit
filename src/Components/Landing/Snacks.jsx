import React from 'react'

const product=[
    {
        img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/dc8780fd-9dea-4863-93c2-590e5c5840f8.png",
        time:"8 MINS",
        name:"Pringles Cheddar Cheese Potato Chips",
        weight:"158 g",
        price:"RS.329",

    },
    {
        img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/rc-upload-1773048060308-754.png",
        time:"11 MINS",
        name:"Kettle Studio Rock Sea Salt & English Vinegar",
        weight:"113 g",
        price:"RS.99"
    },
    {
        img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/e726d2de-4fdd-4fc3-b314-11017932a1d2.png",
        time:"11 MINS",
        name:"Nongshim Shrimp Flavoured Hot & Spicy",
        weight:"75 g",
        price:"RS.139",
    },
    {
        img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/rc-upload-1773048060308-226.png",
        time:"11 MINS",
        name:"Kettle Studio Potato Chips- Himalyan Pink",
        weight:"113 g",
        price:"RS.99",
    },
     {
        img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/b08bdf74-16c4-472b-ac65-651b1580b20f.png",
        time:"11 MINS",
        name:"NongShim Onion Ring Puffs",
        weight:"50 g",
        price:"RS. 139",
    },
     {
        img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/1ae5178b-a790-4ba6-bf12-d1bf355ec09d.png",
        time:"11 MINS",
        name:"Nongshim Shrimp Flavoured Crackers",
        weight:"75 g",
        price:"RS.139",
    },



];

function Snacks() {
  return (
   <div>
    <h1 className='text-xl px-6 pt-5'>Snacks & Munchies</h1>
    <div className='flex gap-5 mx-5'>
        
        
            {
                product.map((item,index)=>(
                    <div key={index} className='h-[300px] w-[250px] border rounded-2xl mt-10 border-gray-400 '>
                        <img src={item.img} alt="" className='h-[100px] pt-3 px-10'/>
                        <p className='text-sm px-4 pt-2'>{item.time}</p>
                        <p className='px-4 pt-2 pb-2'>{item.name}</p>
                        <p className='text-gray-400 px-3'> {item.weight}</p>
                       
                        <div  className='flex justify-around pt-3 '>
                            <p className='pr-10 font-bold'> {item.price}</p>
                            <button className='border border-green-500 bg-gray-100 text-green-600 h-8 w-18 rounded font-bold text-sm'>ADD</button>
                        </div>
                    </div>
                    

                ))
            }
        
      
    </div>
    </div>
  )
}

export default Snacks
