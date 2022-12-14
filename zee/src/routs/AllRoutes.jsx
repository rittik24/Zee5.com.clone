import { Route, Routes } from "react-router-dom";
import Home from "../components/anirudh_home/Home";
import Login from "../components/sajan_loginfooter/Login";

import UserDashboard from "../components/aniket_details/UserDashboard";
import AdminDashboard from "../components/aniket_details/AdminDashboard";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/trailer"></Route>
      <Route path="/userdashboard" element={<UserDashboard />}></Route>
      <Route path="/admindashboard" element={<AdminDashboard />}></Route>
    </Routes>
  );
}
