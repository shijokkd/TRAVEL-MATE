import './App.css'
import LandingPage from './components/landing page/Lnding_page'
import { Routes,Route } from 'react-router-dom'
import NotFound from './components/not found/NotFound'
import UserLogin from './components/login/UserLogin'
import UserSignup from './components/signup/UserSignup'



function App() {

  return (
  <>
  <Routes>
    
    <Route path='/' element={<LandingPage/>}/>
    <Route path='/userlogin' element={<UserLogin/>}/>
    <Route path='/usersignup' element={<UserSignup/>}/>
    
    <Route path='*' element={<NotFound/>}/>


  </Routes>
  </>
  )
}

export default App
