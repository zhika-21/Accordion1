import React, {useState} from 'react'
import {data} from "./data"
import "./App.css"

function App() {
 const [change, setChange] = useState();

 const toggle= i=>{
  if(change===i){
    return setChange()
  }
  setChange(i)
 }
  
  return (
 <div className="wrapper">
   <h1>Questions And <br/>
   Answers About<br/>
    Login</h1>
   <div className="container">
     {data.map((item, i)=>(
       <div className="item">
         <div className="title" onClick={()=>{
           toggle(i)
         }}>
           <h2>{item.title}</h2>
           <span>{change===i?"-":"+"}</span>
         </div>
        
         <div className={change ===i ? "content show" : "content"}>
           <p>{item.info}</p>
         </div>
       </div>
     ))}
   </div>
 </div>
  )
}
export default App