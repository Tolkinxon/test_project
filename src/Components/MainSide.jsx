import point from '../images/Ellipse.svg' 
import point2 from '../images/Ellipse2.svg' 
import dots from '../images/3dots.svg'
import perconalImage from '../images/personalImage.svg'



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
                   <h2 className="main-side__list-heading2">новые</h2>
                   <img src={point2} alt="there is an point" width={3} height={3}/>
                   <p className='main-side__list-counter'>4</p>
                </div>
                <ul className="main-side__list">
                    <li className='main-side__item'>

                        <div className='list__proffestion-wrapper'>
                            <h3 className='list__proffestion'>UX/UI дизайнер</h3>
                            <img src={dots} alt="threre are dots for clicking"  width={20} height={20}/>
                        </div>

                        <p className='list__proffession-area'>
                           Отдел разработки мобильного приложения
                        </p>

                        <div className='list__condition-wrapper'>
                            <p className='list__condition'>
                                B приоритете
                            </p>

                            <p className='list_count-1'>
                                3
                            </p>

                            <p className='list_count-2'>
                                255
                            </p>
                        </div>

                        <div className="list__personal-image">
                            <img src={perconalImage} alt="there is have personal image" width={28} height={28}/>

                            <div>
                                <p>
                                    Рекруитер
                                </p>

                                <p>
                                     Алексей Щербаков
                                </p>
                            </div>
                        </div>
                    </li>

                    <li className='main-side__item'>

                        <div className='list__proffestion-wrapper'>
                            <h3 className='list__proffestion'>UX/UI дизайнер</h3>
                            <img src={dots} alt="threre are dots for clicking"  width={20} height={20}/>
                        </div>

                        <p className='list__proffession-area'>
                           Отдел разработки мобильного приложения
                        </p>

                        <div className='list__condition-wrapper'>
                            <p className='list__condition'>
                                B приоритете
                            </p>

                            <p className='list_count-1'>
                                3
                            </p>

                            <p className='list_count-2'>
                                255
                            </p>
                        </div>

                        <div className="list__personal-image">
                            <img src={perconalImage} alt="there is have personal image" width={28} height={28}/>

                            <div>
                                <p>
                                    Рекруитер
                                </p>

                                <p>
                                     Алексей Щербаков
                                </p>
                            </div>
                        </div>
                    </li>

                    <li className='main-side__item'>
                        <div className='list__proffestion-wrapper'>
                            <h3 className='list__proffestion'>UX/UI дизайнер</h3>
                            <img src={dots} alt="threre are dots for clicking"  width={20} height={20}/>
                        </div>

                        <p className='list__proffession-area'>
                        Отдел разработки мобильного приложения
                        </p>

                        <div className='list__condition-wrapper'>
                            <p className='list__condition'>
                                B приоритете
                            </p>

                            <p className='list_count-1'>
                                3
                            </p>

                            <p className='list_count-2'>
                                255
                            </p>
                        </div>

                        <div className="list__personal-image">
                            <img src={perconalImage} alt="there is have personal image" width={28} height={28}/>

                            <div>
                                <p>
                                    Рекруитер
                                </p>

                                <p>
                                    Алексей Щербаков
                                </p>
                            </div>
                        </div>
                    </li>

                    <li className='main-side__item'>
                        <div className='list__proffestion-wrapper'>
                            <h3 className='list__proffestion'>UX/UI дизайнер</h3>
                            <img src={dots} alt="threre are dots for clicking"  width={20} height={20}/>
                        </div>

                        <p className='list__proffession-area'>
                        Отдел разработки мобильного приложения
                        </p>

                        <div className='list__condition-wrapper'>
                            <p className='list__condition'>
                                B приоритете
                            </p>

                            <p className='list_count-1'>
                                3
                            </p>

                            <p className='list_count-2'>
                                255
                            </p>
                        </div>

                        <div className="list__personal-image">
                            <img src={perconalImage} alt="there is have personal image" width={28} height={28}/>

                            <div>
                                <p>
                                    Рекруитер
                                </p>

                                <p>
                                    Алексей Щербаков
                                </p>
                            </div>
                        </div>
                    </li>

                    <li className='main-side__item'>
                        <div className='list__proffestion-wrapper'>
                            <h3 className='list__proffestion'>UX/UI дизайнер</h3>
                            <img src={dots} alt="threre are dots for clicking"  width={20} height={20}/>
                        </div>

                        <p className='list__proffession-area'>
                        Отдел разработки мобильного приложения
                        </p>

                        <div className='list__condition-wrapper'>
                            <p className='list__condition'>
                                B приоритете
                            </p>

                            <p className='list_count-1'>
                                3
                            </p>

                            <p className='list_count-2'>
                                255
                            </p>
                        </div>

                        <div className="list__personal-image">
                            <img src={perconalImage} alt="there is have personal image" width={28} height={28}/>

                            <div>
                                <p>
                                    Рекруитер
                                </p>

                                <p>
                                    Алексей Щербаков
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
          
        </section>
    )
}