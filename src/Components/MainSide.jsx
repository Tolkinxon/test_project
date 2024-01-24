import point from '../images/Ellipse.svg' 
import point2 from '../images/Ellipse2.svg' 



export default function MainSide () {
    return (
        <section className="main-side">
                <div className='main-side__heading-wrapper'>
                   <h1 className="main-side__heading">Заявки</h1>
                   <img src={point} alt="there is an point" width={3} height={3}/>
                   <p className='main-side__counter'>22</p>
                </div>

            <div className="main-side__list-wrapper">
                <div className='main-side__list-name'>
                   <h2 className="main-side__heading2">новые</h2>
                   <img src={point2} alt="there is an point" width={3} height={3}/>
                   <p className='main-side__list-counter'>4</p>
                </div>
                <ul className="main-side__list">
                        
                </ul>
            </div>
          
        </section>
    )
}