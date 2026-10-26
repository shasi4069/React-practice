import React from 'react'
import {ArrowRight} from 'lucide-react'
const RightCradContent = (props) => {
  return (
     <div className=' text-white flex flex-col h-full w-full p-5 justify-between absolute top-0 left-0'>
       <h2 className=' bg-white text-md  flex justify-center items-center text-black h-6 w-6 rounded-full'>{props.id+1}</h2>
       <div>
          <p className='leading-relaxed mb-14 text-md'>Lorem, ipsum dolor sit amet adipisicing elit. Ab ratione sunt, quae error fugiat porro? Quod repudiandae commodi expedita aut aspernatur consequatur? Iure, ea reiciendis?</p>
          <div className='flex justify-between mt-auto gap-2'>
            <button style={{backgroundColor:props.color}}className='text-white text-sm px-7 flex-1 py-1 bg-blue-500 rounded-lg'>{props.tag}</button>
            <button className='text-white text-md rounded-lg bg-blue-500 px-7 py-1'><ArrowRight /></button>
          </div>
       </div>
     </div>
  )
}

export default RightCradContent
