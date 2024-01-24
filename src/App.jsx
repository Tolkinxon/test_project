import React, { useState } from 'react'
import LeftSide from './Components/LeftSide';
import Header from './Components/Header';
import MainSide from './Components/MainSide';

export default function App() {

    const [count, setCount] = useState(0);



 return (
    <>
       <Header />
       <LeftSide /> 
       <MainSide />
    </>
 )
}
