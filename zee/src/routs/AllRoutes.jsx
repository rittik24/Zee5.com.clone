import { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Home from "../components/anirudh_home/Home";
import Login from "../components/sajan_loginfooter/Login";
import CarouselDemo from "../components/anirudh_home/CarouselDemo";
import TrendingDemo from "../components/anirudh_home/TrendingDemo";
import MoviesDemo from "../components/anirudh_home/MoviesDemo";
import DramasDemo from "../components/anirudh_home/DramasDemo";
import WebSeriesDemo from "../components/anirudh_home/WebSeriesDemo";
import TVShows from "../components/anirudh_home/TVShows";
import Buyplan from "../components/moumita_buyplan/Buyplan";
import UserDashboard from "../components/aniket_details/UserDashboard";
import AdminDashboard from "../components/aniket_details/AdminDashboard";
import About from "../components/rittik_navbar/About";
import Payment from "../components/moumita_buyplan/Payment";
import Register from "../components/sajan_loginfooter/Register";
import Reports from "../components/aniket_details/Reports";
import Moviespage from "../components/anirudh_home/Moviespage";
import WebSeriesPage from "../components/anirudh_home/WebSeriesPage";
import Newspage from "../components/anirudh_home/Newspage";
import PrivateRoute from "./PrivateRoute";
import SearchDemo from "../components/anirudh_home/SearchDemo";


export default function AllRoutes() {
  const [carousel, setCarousel] = useState([]);
  const [movies, setMovies] = useState([]);
  const [dramas, setDramas] = useState([]);
  const [webSeries, setWebSeries] = useState([]);
  const [trending, setTrending] = useState([]);
  const [search, setSearch] = useState([]);

  const fetchdata1 = () => {
    axios
      .get("https://mockdata.onrender.com/slide")
      .then((res) => setCarousel(res.data));

    axios
      .get("https://mockdata.onrender.com/Trending")
      .then((res) => setTrending(res.data));

    axios
      .get("https://mockdata.onrender.com/Movies")
      .then((res) => setMovies(res.data));

    axios
      .get("https://mockdata.onrender.com/Dramas")
      .then((res) => setDramas(res.data));

    axios
      .get("https://mockdata.onrender.com/WebSeries")
      .then((res) => setWebSeries(res.data));

    axios.get('https://mockdata.onrender.com/SearchData')
      .then((res) => setSearch(res.data));
  };

  useEffect(() => {
    fetchdata1();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route
        path="/Carousel/:Id"
        element={<CarouselDemo data={carousel} />}
      ></Route>
      <Route
        path="/moviedemo/:Id"
        element={<MoviesDemo data={movies} />}
      ></Route>
      <Route
        path="/webseriesdemo/:Id"
        element={<WebSeriesDemo data={webSeries} />}
      ></Route>
      <Route
        path="/dramademo/:Id"
        element={<DramasDemo data={dramas} />}
      ></Route>
      <Route
        path="/trendingdemo/:Id"
        element={<TrendingDemo data={trending} />}
      ></Route>
      <Route path='/Search/:Id' element={<SearchDemo data={search} />}></Route>
      <Route path="/userdashboard" element={<PrivateRoute><UserDashboard /></PrivateRoute>}></Route>
      <Route path="/admindashboard" element={<PrivateRoute><AdminDashboard /></PrivateRoute>}></Route>
      <Route path="/register" element={<Register />}></Route>

      <Route path="/admindashboard/admins" element={<Reports />}></Route>

      <Route path="/About" element={<About />}></Route>
      <Route path="/tvshows" element={<TVShows />}></Route>
      <Route path="/moviespage" element={<Moviespage />}></Route>
      <Route path="/webseriespage" element={<WebSeriesPage />}></Route>
      <Route path="/newspage" element={<Newspage />}></Route>
      <Route path="/subscription" element={<Buyplan />}></Route>
      <Route path="/subscription/payment" element={<PrivateRoute><Payment /></PrivateRoute>}></Route>

    </Routes>
  );
}

