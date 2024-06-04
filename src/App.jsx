import './App.css'
import LandingPage from './components/landing page/Lnding_page'
import { Routes,Route } from 'react-router-dom'
import NotFound from './components/not found/NotFound'
import UserLogin from './components/login/UserLogin'
import UserSignup from './components/signup/UserSignup'
import TreavelsLogin from './components/login/TreavelsLogin'
import TravelsSignup from './components/signup/TravelsSignup'
import UserHome from './components/user-compnents/UserHome'



function App() {

  return (
  <>
  <Routes>
    
    <Route path='/' element={<LandingPage/>}/>
    <Route path='/userlogin' element={<UserLogin/>}/>
    <Route path='/travelslogin' element={<TreavelsLogin/>}/>
    <Route path='/usersignup' element={<UserSignup/>}/>
    <Route path='/travelssignup' element={<TravelsSignup/>}/>
    <Route path='/userhome' element={<UserHome/>}/>
    
    
    <Route path='*' element={<NotFound/>}/>


  </Routes>
  </>
  )
}

export default App
