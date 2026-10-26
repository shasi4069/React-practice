import React from 'react'

const App = () => {

  // function btnClicked(){
  //   console.log('button is clicked');
    
  // }
  // function mouseEnter(){
  //   console.log('mouse entered');
    
  // }
  
    function  inputChange(val){
      console.log(val);
      
    }
    function onScroll(elem){
      console.log('page scrolling ....at speed', elem);
      
    }
  
  return (
    <div>
      <button onClick={()=>{
        console.log('button click');
      }
      }>Click here</button>
      <input onChange={function(elem){
        inputChange(elem.target.value)
        
      }}
       type="text" placeholder='Enter your name' />

      <div onMouseMove={(elem)=>{
        console.log(elem.clientX); 
      }}
      className="box">
        </div>
        <div onWheel={(elem)=>{
          onScroll(elem.deltaY);
          
        }}>
        <div className="page1"></div>
        <div className="page2"></div>
        <div className="page3"></div>
        </div>
      
    </div>
  )
}

export default App

