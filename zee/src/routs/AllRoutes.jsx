import { Route, Routes } from "react-router-dom";
import Home from "../components/anirudh_home/Home";
import Login from "../components/sajan_loginfooter/Login";
import Navbar from "../components/rittik_navbar/Navbar";

export default function AllRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/Navbar" element={<Navbar/>}></Route>
            <Route path="/trailer"></Route>
        </Routes>
    )
}