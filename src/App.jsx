import LeftSide from './Components/LeftSide';
import Header from './Components/Header';
import MainSide from './Components/MainSide';

export default function App() {


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


