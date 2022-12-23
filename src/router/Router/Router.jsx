import { Route, Routes } from "react-router-dom"
import Archives from "../../pages/Archives/Archives";
import Home from "../../pages/Home/Home";
import Label from "../../pages/Label/Label";
import Profile from "../../pages/Profile/Profile";
import Habit from "../../pages/Habit/Habit";
import WelcomePage from "../../pages/WelcomePage/WelcomePage"
import PageNotFound from "../PageNotFound/PageNotFound";
import RequireAuth from '../../contexts/AuthContext/RequireAuth/RequireAuth';



const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/Home" element={<RequireAuth><Home /></RequireAuth>} />
        <Route path="/Label" element={<RequireAuth><Label /> </RequireAuth>}/>
        <Route path="/Habit" element={<RequireAuth><Habit /></RequireAuth>} />
        <Route path="/Archive" element={<RequireAuth><Archives /></RequireAuth> } />
        <Route path="/Profile" element={<RequireAuth><Profile /></RequireAuth>} />
        <Route path="*" element={<PageNotFound/>} />
    </Routes>
  )
}

export default Router;