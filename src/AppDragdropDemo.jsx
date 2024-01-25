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


// import React, { Component } from 'react';


// export default class AppDragDropDemo extends Component { 

//    onDragStart = (ev, id) => {
//       console.log('dragstart', id);
//       ev.dataTransfer.setData('id', id)
//    }

//     onDragOver = (ev) => {
//       ev.preventDefault()
//    }


//    onDrop = (ev, cat) => {         
//       let id = ev.dataTransfer.getData("id");  
//       let tasks = this.state.tasks.filter((task) => {      
//           if (task.name == id){               
//               task.category = cat;                
//           }                     
//           return task;          
//                                           });         
//      this.setState({ ...this.state, tasks });
//    }

//    state = {      
//       tasks: [
//                {
//                   name:"React",             
//                   category:"wip",             
//                   bgcolor:"pink"
//                },                        
//               {   name:"Learn Angular",   
//                   category:"wip",              
//                   bgcolor: "yellow"
//                },                       
//               {   name:"hello",
//                   category:"complete",
//                  bgcolor:"red"
//                },    
//               {   name:"Vue",
//                   category:"complete",
//                   bgcolor:"skyblue"
//                }

//             ]} 

//   render() {      
//       let tasks = { wip: [],                 
//                complete: []          
//                  }        

           
//                      this.state.tasks.forEach ((t) => { tasks[t.category].push(
//                      <div key={t.name}  
//                            onDragStart={(e)=>this.onDragStart(e, t.name)} 
//                            draggable
//                            cassName="draggable" 
//                            style={{backgroundColor: t.bgcolor}}
//                      >
//                         {t.name}
//                      </div>
//                                                                               );
//                                                        }
//                                                )
               
          



//     return (
//       <div className="container-drag">    
//          <h2 className="header">DRAG & DROP DEMO</h2>                      
//             <div className='wrapper'>
//                <div className="wip" 
//                     onDragOver={(e)=>this.onDragOver(e)} 
//                     onDrop={(e)=>{this.onDrop(e, "wip")}}
//                >  
//                   <span className="task-header">WIP</span> 
//                   {tasks.wip}                 
//                </div>                   
//                <div className="droppable" 
//                     onDragOver={(e)=>this.onDragOver(e)} 
//                     onDrop={(e)=>this.onDrop(e, "complete")}
//                >   
//                      <span className="task-header">COMPLETED</span>                          
//                      {tasks.complete}                     
//                </div>  
//             </div>           
//      </div>);

//    }

// }


// import { useState } from "react";

// export default function AppDragDropDemo () {

//    const [element, setElement] = useState(
//       [
//          {
//             name: 'spoon',
//             category: 'plastic',
//             number: 1
//          },
//          {
//             name: 'fork',
//             category: 'plastic',
//             number: 2
//          }, 
//          {
//             name: 'water',
//             category: 'liquid',
//             number: 3
//          }, 
//          {
//             name: 'oil',
//             category: 'liquid',
//             number: 4
//          },
//       ]
//    )



      // let elements = {
      //    liquid: [],
      //    plastic: []
      // }

      // const onDragStart = (e, id) => {
      //    e.dataTransfer.setData('id', id)
      //    console.log(e);
      // }

      // const onDragOver = (e) => {
      //    e.preventDefault()
      // }

      // const onDrop = (e, cat) => {
      //    let id = e.dataTransfer.getData('id')
      //    let element2 = element.filter(item => {
      //       if(item.name === id){
      //          item.category = cat
      //       }
      //       return item
      //    })

      //    setElement({...element, element2})
      // }


//       element.forEach(element => {
//          elements[element.category].push(
//             <div key={element.name}  
//                  onDragStart={(e)=> onDragStart(e, element.name)} 
//                  draggable>
//                  {element.name}
//              </div>
//          )
//       });
      



//       return (
       
//          <div className="container">
//                <div className="liquid" onDragOver={(e) => onDragOver(e)}>
//                      {elements.liquid}
//                </div>
//                <div className="plastic" onDragOver={(e) => onDragOver(e)} >
//                      {elements.plastic}
//                </div>
//          </div>
//       )


// }

