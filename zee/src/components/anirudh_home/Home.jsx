import React, { useState, useEffect } from 'react';
import "./Home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';


const Home = () => {
  const settings1 = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  let settings2 = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    gap: "20px",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

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
  }

  useEffect(() => {
    fetchdata1()
  }, [])

  return (
    <div>
      <div style={{ width: "96%", margin: "auto", marginTop: "32px" }}>
        <Slider {...settings1}>
          {carousel.map((item) => (
            <img key={item.id} className="slide1" src={item.poster} alt={item.title} />
          ))}
        </Slider>
      </div>


      <div className='trend-container' >
      <h1 style={{textAlign: "left"}}>Trending Near You</h1>
        <Slider {...settings2}>
          {trending.map((item) => {
            return (
              <div key={item.id} className='trend-products'>
                <img src={item.poster} alt={item.title} />
                {/* <div className='trend-title'>
                  <h2>{item.title}</h2>
                </div> */}
                <div className='overview'>
                  <h3>Summary</h3>
                  {item.description}
                </div>
              </div>
            )
          })}
        </Slider>
      </div>

    </div>
  )
}

export default Home