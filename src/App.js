import React from 'react';
// import SimplePractice from './components/simplePractice';
import AllProduct from "./components/AllProducts"
// import IndividualProducts from './components/IndividualProducts';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import IndividualProducts from './components/IndividualProducts';
const App = () => {

  return (
    <>
    <BrowserRouter>
    <h1 style={{color:"white",
  textAlign:"center"}}>Practice Online Store</h1>
    <Routes>
      <Route path='/' element={<AllProduct />}/>
      <Route path='/posts/:productId' exact element={<IndividualProducts/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App