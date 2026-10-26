import React from 'react'
import RightCradContent from './RightCradContent'


const RightCard = (props) => {
  return (
    <div className='h-full shrink-0 overflow-hidden w-60 relative rounded-md '>
        <img className='h-full w-full object-cover' src={props.img}></img>
        <RightCradContent color={props.color} id={props.id} tag={props.tag}/>
    </div>
  )
}

export default RightCard
