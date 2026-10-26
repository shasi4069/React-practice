import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id='right' className=' h-full flex gap-3 flex-nowrap w-3/4 overflow-x-auto rounded-4xl scrollbar-none'>
        {props.users.map(function(elem,idx){
        return <RightCard
         key={idx} 
         color={elem.color} 
         id={idx}
         img={elem.img}
         tag={elem.tag} 
         />})}
    </div>
  )
}
 
export default RightContent
