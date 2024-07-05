import "./App.css";
import { Routes, Route } from "react-router-dom";
import UserRouter from './router/UserRouter'
import TreavelsLogin from "./pages/agent/TreavelsLogin";
import TravelsSignup from "./pages/agent/TravelsSignup";
import UserSignup from "./pages/user/UserSignup";
import Userlogin from "./pages/user/UserLogin";
import Landingpage  from "./pages/others/Lnding_page";
// import TNavebar from "./components/travels-components/TNavebar";
import TravelHome from "./pages/agent/TravelHome";




function App() {
  return (
    <>
      <Routes>
        
        <Route path="/" element={<Landingpage/>} />   
        <Route path="/travelslogin" element={<TreavelsLogin />} />
        <Route path="/travelssignup" element={<TravelsSignup />} />
        <Route path="/usersignup" element={<UserSignup />} />
        <Route path="/userlogin" element={<Userlogin />} />
        <Route path="/*" element={<UserRouter/>} />
        <Route path="/travelshome" element={<TravelHome/>} />
        


      </Routes>
    </>
  );
}

export default App;
