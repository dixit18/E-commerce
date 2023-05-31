import React from 'react'
  import Home from './components/routes/home/Home'
import { Route, Routes } from 'react-router-dom'
import Navigation from './components/routes/home/Navigation/Navigation'
import SignIn from './components/routes/home/Sign-in/SignIn'
const Shop = ()=>{
  return(
    <>shop</>
  )
}
function App() {

  return (
    <Routes>
      <Route path="/" element={<Navigation/>}>
     
        <Route index element={<Home/>} />
        <Route path='shop' element={<Shop/>}/>
        <Route path="sign-in" element={<SignIn/>} />
      </Route>
      
    </Routes>
  )
}

export default App