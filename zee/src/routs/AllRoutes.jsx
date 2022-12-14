import {useState, useEffect} from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Home from "../components/anirudh_home/Home";
import Login from "../components/sajan_loginfooter/Login";
import CarouselDemo from "../components/anirudh_home/CarouselDemo";


import UserDashboard from "../components/aniket_details/UserDashboard";
import AdminDashboard from "../components/aniket_details/AdminDashboard";

export default function AllRoutes() {
    const [carousel, setCarousel] = useState([]);
    const [movies, setMovies] = useState([]);
    const [dramas, setDramas] = useState([]);
    const [webSeries, setWebSeries] = useState([]);
    const [trending, setTrending] = useState([]);
  
    const fetchdata1 = () => {
      axios.get('https://mockdata.onrender.com/slide')
        .then((res) => setCarousel(res.data));
  
      axios.get('https://mockdata.onrender.com/Trending')
        .then((res) => setTrending(res.data))
  
      axios.get('https://mockdata.onrender.com/Movies')
        .then((res) => setMovies(res.data))
  
      axios.get('https://mockdata.onrender.com/Dramas')
        .then((res) => setDramas(res.data))
  
      axios.get('https://mockdata.onrender.com/WebSeries')
        .then((res) => setWebSeries(res.data))
    }
  
    useEffect(() => {
      fetchdata1()
    }, [])

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/Carousel/:Id" element={<CarouselDemo data={carousel} />}></Route>
      <Route path="/userdashboard" element={<UserDashboard />}></Route>
      <Route path="/admindashboard" element={<AdminDashboard />}></Route>
    </Routes>
  );
}