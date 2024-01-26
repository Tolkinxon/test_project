import point from '../images/Ellipse.svg' 
import point2 from '../images/Ellipse2.svg' 
import dots from '../images/3dots.svg'
import perconalImage from '../images/personalImage.svg'
import data from '../data/data'

import {useEffect, useState} from 'react'



export default function MainSide () {

    const [element, setElement] = useState([])

  useEffect(() => {
    setElement(data)
  }, [])


  const onDragStart = (e, id) => {
    e.dataTransfer.setData('id', id)
  }

  const onDragOver = (e) => {
    e.preventDefault()
  }


  const onDrop = (e, cat) => {
    let id = e.dataTransfer.getData('id')

    let element2 = element.filter(item => {
            if(item.id != id){
               return item
            }
    })

    let element3 = element.filter(item => {
            if(item.id == id){
               item.category = cat
               return item
            }
    })

         setElement([...element2, ...element3])

         console.log(element);
    

}

  let elements = {
    new: [],
    deleted: [],
    waited: [],
    accepted: []
  }


  element.forEach(element => {
    elements[element.category].push(
        <li className='main-side__item'  draggable="true" key={element.id} onDragStart={(e) => onDragStart(e, element.id)}>
        
        <div className='list__proffestion-wrapper'>
            <h3 className='list__proffestion'>{element.proffession}</h3>
            <img src={dots} alt="threre are dots for clicking"  width={20} height={20}/>
        </div>

        <p className='list__proffession-area'>
          {element.workPlace}
        </p>

        <div className='list__condition-wrapper'>
            <p className='list__condition'>
                B приоритете
            </p>

            <p className='list_count-1'>
                {element.listCount}
            </p>

            <p className='list_count-2'>
                {element.listCount2}
            </p>
        </div>

        <div className="list__personal-image">
            <img src={perconalImage} alt="there is have personal image" width={28} height={28}/>

            <div>
                <p>
                    Рекруитер
                </p>

                <p>
                    {element.name}
                </p>
            </div>
        </div>
    </li>
    )
  })
    




    return (
        <section className="main-side">
                <div className='main-side__heading-wrapper'>
                   <h1 className="main-side__heading">Заявки</h1>
                   <img src={point} alt="there is an point" width={2} height={3}/>
                   <p className='main-side__counter'>22</p>
                </div>

            <div className='main-side__all-lists-wrapper' >
                <div className="main-side__list-wrapper" onDragOver={(e) => onDragOver(e)}  onDrop={(e) => onDrop(e, 'new')}>
                    <div className='main-side__list-name'>
                    <p className="main-side__list-heading2">New</p>
                    <img src={point2} alt="there is an point" width={3} height={3}/>
                    <p className='main-side__list-counter'>4</p>
                    </div>
                    <ul className="main-side__list">
                        {elements.new}
                    </ul>
                </div>

                <div className="main-side__list-wrapper" onDragOver={(e) => onDragOver(e)} onDrop={(e) => onDrop(e, 'waited')}>
                    <div className='main-side__list-name'>
                    <p className="main-side__list-heading2">Waited</p>
                    <img src={point2} alt="there is an point" width={3} height={3}/>
                    <p className='main-side__list-counter'>4</p>
                    </div>
                    <ul className="main-side__list">
                        {elements.waited}
                    </ul>
                </div>

                <div className="main-side__list-wrapper" onDragOver={(e) => onDragOver(e)}  onDrop={(e) => onDrop(e, 'accepted')}>
                    <div className='main-side__list-name'>
                    <p className="main-side__list-heading2">Accepted</p>
                    <img src={point2} alt="there is an point" width={3} height={3}/>
                    <p className='main-side__list-counter'>4</p>
                    </div>
                    <ul className="main-side__list">
                        {elements.accepted}
                    </ul>
                </div>

                <div className="main-side__list-wrapper" onDragOver={(e) => onDragOver(e)} onDrop={(e) => onDrop(e, 'deleted')}>
                    <div className='main-side__list-name'>
                    <p className="main-side__list-heading2">Deleted</p>
                    <img src={point2} alt="there is an point" width={3} height={3} />
                    <p className='main-side__list-counter'>4</p>
                    </div>
                    <ul className="main-side__list">
                        {elements.deleted}
                    </ul>
                </div>
            </div>


          
        </section>
    )
}