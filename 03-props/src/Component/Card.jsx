import React from 'react'

const Card = (props) => {
  return (
    <div className="card w-72 border-2 border-zinc-900 p-5 rounded-lg m-5">
           <div className='w-full h-52 overflow-hidden '>
            <img src={props.img} alt="" className='h-full w-full object-cover' />
           </div>
            
            <h1 className='text-xl mt-3'>{props.user},{props.age}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button className='bg-blue-500 px-3 py-2 rounded-lg mt-2 text-white'>View Profile</button>
        </div>
  )
}

export default Card
