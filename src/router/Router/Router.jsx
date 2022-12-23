import { Route, Routes } from "react-router-dom"
import Archives from "../../pages/Archives/Archives";
import Home from "../../pages/Home/Home";
import Label from "../../pages/Label/Label";
import Profile from "../../pages/Profile/Profile";
import Habit from "../../pages/Habit/Habit";
import WelcomePage from "../../pages/WelcomePage/WelcomePage"
import PageNotFound from "../PageNotFound/PageNotFound";



const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Label" element={<Label /> }/>
        <Route path="/Habit" element={<Habit />} />
        <Route path="/Archive" element={<Archives />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="*" element={<PageNotFound/>} />
    </Routes>
  )
}

export default Router;