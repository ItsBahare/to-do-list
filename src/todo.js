import { useState } from 'react';
import './style.css';
function Todo() {
const[num,setNum] = useState(0)
const[item,setItem]= useState([])
const [number,setNumber] = useState(0)
const[complete,setComplete]= useState([])

function Add(){
  setNum(num +1 )
  const newitem = prompt("New Item");
  setItem ([...item,newitem]);
  if(item == newitem){
    alert("check your items again!")
     const dublicated = item => item.filter((item , index)=> item.indexOf(item) !== index)
     setItem(dublicated)
     setNum(num)
  }else{
    setItem ([...item,newitem]);
    
  }

  
}


function remove(key){
  setItem (item.filter(i => i !== key))
  setNum(num-1)
  
}

function done(id){
  setItem (item.filter(items => items !== id))
  setNumber(number+1)
  setNum(num-1)

}
function removeAll(){
  setItem(item.filter((eachItem)=> eachItem !== eachItem))
 setNum(0) 
}


return (
      
    <div>
      <div id='container'>
        <span className='padding'>
          All your tasks : {num}
        </span>

        <span className='padding'>
          completed tasks : {number}
        </span>
        <button className='padding-btn'onClick={removeAll}>remove All</button>
        <button className='padding-btn' onClick={Add}> Add task </button>

      </div>
      <div id='container1'>
        <ul id='list' >
          {item.map((key) =>  <li className='items'> {key} <button className='padding-btn' onClick={()=> done (key)}>Done</button> <button className='padding-btn di ' onClick={() => remove(key) }>remove</button> </li>)}
 
        </ul>
      </div>
    </div>
  );
}

export default Todo;
