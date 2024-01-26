import React, { useState } from 'react'
import LeftSide from './Components/LeftSide';
import Header from './Components/Header';
import MainSide from './Components/MainSide';

export default function App() {

    const [count, setCount] = useState(0);



 return (
    <div className='container'>
       <Header />
       <div className='bottom-side'>
         <LeftSide /> 
         <MainSide />
       </div>
      
    </div>
 )
}




// import { useEffect, useState } from "react";
// import data from './data/data'

// export default function AppDragDropDemo () {

//    const [element, setElement] = useState([])

//    useEffect(() => {
//       setElement(data)
//    }, [])


//       let elements = {
//          liquid: [],
//          plastic: []
//       }
      


//       const onDragStart = (e, id) => {
//          e.dataTransfer.setData('id', id)
//       }

//       const onDragOver = (e) => {
//          e.preventDefault()
//       }


//       const onDrop = (e, cat) => {
//          let id = e.dataTransfer.getData('id')


//          let element2 = element.filter(item => {
//             if(item.name !== id){
//                return item
//             }
//          })

//          let element3 = element.filter(item => {
//             if(item.name === id){
//                item.category = cat
//                return item
//             }
//          })

//          setElement([...element2, ...element3])
         
//       }
      

//       element.forEach(element => {
//          elements[element.category].push(
//             <div key={element.name}  
//                  onDragStart={(e)=> onDragStart(e, element.name)} 
//                  draggable
//                  style={{order:element.number}}>
//                  {element.name}
//              </div>
//          )
//       });

         
      

      



//       return (
       
//          <div className="container">
//                <div className="liquid" onDragOver={(e) => onDragOver(e)} onDrop={(e) => onDrop(e, 'liquid')}>
//                      {elements.liquid}
//                </div>
//                <div className="plastic" onDragOver={(e) => onDragOver(e)} onDrop={(e) => onDrop(e, 'plastic')}>
//                      {elements.plastic}
//                </div>
//          </div>
//       )


// }

