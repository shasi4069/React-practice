// import React from 'react'
// import { useState } from 'react';

// const App = () => {
//   //  const a = 10;
//    let [count, setCount] = useState(0);
//   //  console.log(count);
//   let [username , setusername] = useState("preeti")
//   let [value , setValue] = useState([10,20,30])

//   return (
//     <div>
//       <h1>a is {count} <br />{value}</h1>
//       <button onClick={() => {
//       setCount(count + 1)
//       setValue([40,50,60])
//       }}>click</button>

//       <h1>Hii {username}</h1>
//       <button onClick={()=>{
//         if(username != "preeti") setusername ('preeti');
//         else setusername ('Shourya');
//       }}>{username}</button>
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import { useState } from 'react'

// const App = () => {
//   let [value , setValue] = useState(0)

//   function increaseValue(){
//     if(value<20)  setValue(value+1);
//    else alert("value is more than 20")
//   }
//   function decreaseValue(){
//     if(value>0)  setValue(value-1);
//     else alert ("less than 0")
//   }

//   return (
//     <div>
//       <h1>No is : {value}</h1>
//       <button onClick={increaseValue}>Next</button>
//       <button onClick={decreaseValue}>Previous</button>
//     </div>
//   )
// }

// export default App


import React, { useState } from 'react'

const App = () => {
  let [color , useColor] = useState("bg-gray-500")
  // function changeColor(){
  //   useColor()
  // }

  return (
    <div className={ `${color} w-full min-h-screen pt-40`}>
     {/* // <h1 className='mb-10  text-center text-2xl'>I am <span className={`${color}`}>preeti</span></h1> */}
      <div className='flex gap-3'>
      <div onClick={()=>{
        useColor("bg-blue-500")
      }} className="bg-blue-500 h-50 w-50"></div>
      <div onClick={()=>{
        useColor("bg-green-400")
      }}
      className="bg-green-400 h-50 w-50"></div>
      <div onClick={()=>{
        useColor("bg-red-400")
      }}
      className="bg-red-400 h-50 w-50"></div>
      <div onClick={()=>{
        useColor("bg-yellow-400")
      }}
      className="bg-yellow-400 h-50 w-50"></div>
      <div onClick={()=>{
        useColor("bg-pink-400")
      }}
      className="bg-pink-400 h-50 w-50"></div>
      <div onClick={()=>{
        useColor("bg-cyan-400")
      }}
      className="bg-cyan-400 h-50 w-50"></div>
      </div>
    </div>
  )
}

export default App
