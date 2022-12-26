import React, { useState, useEffect } from 'react';
import "./Home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const latestHindi = [
  { id: 1, src: "https://akamaividz2.zee5.com/image/upload/w_522,h_294,c_scale,f_webp,q_auto:eco/resources/0-1-6z5267210/list/00000190fbb043458b1343a5bafa962771b4e7a1.jpg", alt: "Arjun Plans to Malign Risabh" },
  { id: 2, src: "https://akamaividz2.zee5.com/image/upload/w_522,h_294,c_scale,f_webp,q_auto:eco/resources/0-1-6z5267040/list/0000014430bf757336ab4cf0a540c89b16abfa4e.jpg", alt: "Risabh Defends Lakshmi" },
  { id: 3, src: "https://akamaividz2.zee5.com/image/upload/w_522,h_294,c_scale,f_webp,q_auto:eco/resources/0-1-6z5267046/list/000002510b18c93a468b47a0b20a2be64d5d2d06.jpg", alt: "Ranbeer Make Prachi Jealous" },
  { id: 4, src: "https://akamaividz2.zee5.com/image/upload/w_522,h_294,c_scale,f_webp,q_auto:eco/resources/0-1-6z5267179/list/0000019648d67fb6f9f841c4a91ea17f1a43f8b1.jpg", alt: "Main Hoon Aparajita" },
  { id: 5, src: "https://akamaividz2.zee5.com/image/upload/w_522,h_294,c_scale,f_webp,q_auto:eco/resources/0-1-6z5267087/list/00000124d62e585960124c4894d61a05affb15d8.jpg", alt: "Pyar Ka Phela Naam" },
];

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1199, min: 800 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 800, min: 440 },
    items: 2
  },
  smallmobile: {
    breakpoint: { max: 439, min: 0 },
    items: 1
  }
};

const responsive2 = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1199, min: 1000 },
    items: 4
  },
  mobile: {
    breakpoint: { max: 999, min: 600 },
    items: 3
  },
  smallmobile: {
    breakpoint: { max: 599, min: 451 },
    items: 2
  },
  extrasmallmobile: {
    breakpoint: { max: 450, min: 0 },
    items: 1
  }
};

const responsive3 = {
  desktop: {
    breakpoint: { max: 3000, min: 1001 },
    items: 2
  },
  smobile: {
    breakpoint: { max: 1000, min: 0 },
    items: 1
  }
};

const Languages = [
  { id: 1, url: "https://akamaividz2.zee5.com/image/upload/w_522,h_294,c_scale,f_webp,q_auto:eco/resources/0-8-3z5258169/list/teluguplatformlanguage1170x65823112022653f2fbb4e034f758f686e45668b99b9.jpg", alt: "Telugu" },
  { id: 2, url: "https://akamaividz2.zee5.com/image/upload/w_522,h_294,c_scale,f_webp,q_auto:eco/resources/0-8-7867/list/hindiplatformlanguage1170x6582311202203e26e248020439b8dc58995141d5dc0.jpg", alt: "Hindi" },
  { id: 3, url: "https://akamaividz2.zee5.com/image/upload/w_522,h_294,c_scale,f_webp,q_auto:eco/resources/0-8-3z5258171/list/tamilplatformlanguage1170x65823112022b2e3147c0e17403f82252c73e96ceb65.jpg", alt: "Tamil" },
  { id: 4, url: "https://akamaividz2.zee5.com/image/upload/w_522,h_294,c_scale,f_webp,q_auto:eco/resources/0-8-3z5258170/list/kannadaplatformlanguage1170x65823112022518dadc786404465ae31319ac3972bec.jpg", alt: "Kannada" },
  { id: 5, url: "https://akamaividz2.zee5.com/image/upload/w_522,h_294,c_scale,f_webp,q_auto:eco/resources/0-8-3z5258172/list/malayalamplatformlanguage1170x658231120224d69f51f3159440bb1ab3f8dbf0ab244.jpg", alt: "Malayalam" },
  { id: 6, url: "https://akamaividz2.zee5.com/image/upload/w_522,h_294,c_scale,f_webp,q_auto:eco/resources/0-8-7868/list/marathiplatformlanguage1170x65823112022cb6ff097c68f49d88b682944329fafde.jpg", alt: "Marathi" },
  { id: 7, url: "https://akamaividz2.zee5.com/image/upload/w_522,h_294,c_scale,f_webp,q_auto:eco/resources/0-8-3z5258059/list/banglaplatformlanguage1170x658231120227dac5b1b32cb470897010b60e26c941a.jpg", alt: "Bangla" },
  { id: 8, url: "https://akamaividz2.zee5.com/image/upload/w_522,h_294,c_scale,f_webp,q_auto:eco/resources/0-8-3z5258242/list/englishplatformlanguage1170x6582311202242ee48687e884c12a20c9d8acfba9061.jpg", alt: "English" },
  { id: 9, url: "https://akamaividz2.zee5.com/image/upload/w_522,h_294,c_scale,f_webp,q_auto:eco/resources/0-8-7888/list/punjabiplatformlanguage1170x65823112022f61c71c7475249a780dc6e498eb9a016.jpg", alt: "Punjabi" },
  { id: 10, url: "https://akamaividz2.zee5.com/image/upload/w_522,h_294,c_scale,f_webp,q_auto:eco/resources/0-8-3z5258063/list/bhojpuriplatformlanguage1170x65823112022e41b01c7be054248b93aaa4b8315f676.jpg", alt: "Bhojpuri" },
  { id: 11, url: "https://akamaividz2.zee5.com/image/upload/w_522,h_294,c_scale,f_webp,q_auto:eco/resources/0-8-3z5258064/list/odiaplatformlanguage1170x65823112022216ccbdac70f4830b5605b5c320cbed9.jpg", alt: "Odia" }
];

const rent = [
  { id: 1, url: "https://akamaividz2.zee5.com/image/upload/w_508,h_286,c_scale,f_webp,q_auto:eco/resources/0-0-1z5234572/list/1170x658withlogo24b333694acb425e80ed532a1ee94469.jpg", title: "Spider-Man: No Way Home The Extended Version", type: "Adventure", hrs: "2h 29m" },
  { id: 2, url: "https://akamaividz2.zee5.com/image/upload/w_508,h_286,c_scale,f_webp,q_auto:eco/resources/0-0-1z5214599/list/1170x658withlogof65c0a6f484e4151a7336f67cd7b8da0.jpg", title: "Jurassic World Dominion", type: "Sci-Fi", hrs: "2h 20m" },
  { id: 3, url: "https://akamaividz2.zee5.com/image/upload/w_508,h_286,c_scale,f_webp,q_auto:eco/resources/0-0-1z5261867/list/ImageTitle450e3fa504774412943186baf00bdb6e.jpg", title: "Beast", type: "Adventure", hrs: "1h 28m" },
  { id: 4, url: "https://akamaividz2.zee5.com/image/upload/w_508,h_286,c_scale,f_webp,q_auto:eco/resources/0-0-1z5163808/list/1170x658withlogo9069e7913f174d439093530667c76e49.jpg", title: "Morbius", type: "Action", hrs: "1h 39m" },
  { id: 5, url: "https://akamaividz2.zee5.com/image/upload/w_508,h_286,c_scale,f_webp,q_auto:eco/resources/0-0-1z5214627/list/1170x658withlogo530f03e3c0b04efd8d890ebdd8b3dde5.jpg", title: "Bullet Train", type: "Action", hrs: "2h 1m" },
  { id: 6, url: "https://akamaividz2.zee5.com/image/upload/w_508,h_286,c_scale,f_webp,q_auto:eco/resources/0-0-1z5269848/list/1170x658withlogob80578802284405e90f6f2964f7b226d.jpg", title: "Strong Fathers, Strong Daughters", type: "Drama", hrs: "1h 30min" }
]

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
    <div>
      <div style={{ width: "90%", margin: "auto", marginTop: "32px" }}>
        <Slider {...settings1}>
          {carousel.map((item) => (
            <div key={item.id}>
              <Link  to={`/Carousel/${item.id}`}><img className="slide1" src={item.poster} alt={item.title} /></Link>
            </div> 
          ))}
        </Slider>
      </div>


      <div className='trend-container' >
        <h1 style={{ textAlign: "left", fontSize: "2rem", fontWeight: "bold" }}>Trending Near You</h1>
        <Carousel swipeable={true} responsive={responsive}>
          {trending.map((item) => {
            return (
              <div key={item.id} className='trend-products'>
                <img src={item.poster} alt={item.title} />
                
                <div className='overview'>
                  <div className='back'>
                    <h2 className='trend-title'>{item.title}</h2>
                    <Link to={`/trendingdemo/${item.id}`}><Button>Watch Trailer</Button></Link>
                  </div>
                  <h3>Summary</h3>
                  {item.description}
                </div>
              </div>
            )
          })}
        </Carousel>
      </div>

      <div className='trend-container'>
        <h1 style={{ textAlign: "left", fontSize: "2rem", fontWeight: "bold" }}>Top Movies in India</h1>
        <Carousel swipeable={true} responsive={responsive}>
          {movies.map((item) => {
            return (
              <div key={item.id} className='trend-products'>
                <img src={item.poster} alt={item.title} />
                <div className='overview'>
                  <div className='back'>
                    <h2 className='trend-title'>{item.title}</h2>
                    <Link to={`/moviedemo/${item.id}`}><Button>Watch Trailer</Button></Link>
                  </div>
                  <h3>Summary</h3>
                  {item.description}
                </div>
              </div>
            )
          })}
        </Carousel>
      </div>

      <div className='trend-container'>
        <h1 style={{ textAlign: "left", fontSize: "2rem", fontWeight: "bold" }}>Latest Hindi Episodes Free</h1>
        <Carousel swipeable={true} responsive={responsive2}>
          {latestHindi.map((item) => {
            return (
              <div key={item.id} className="latest1">
                <img src={item.src} alt={item.alt} />
                <div style={{ textAlign: "left", marginTop: "3px", padding: "10px", backgroundColor:"#fff" }}>
                  <h4 style={{ fontWeight: "600" }}>{item.alt}</h4>
                  <h5 style={{ fontWeight: "600" }}>Watch</h5>
                </div>
              </div>
            )
          })}
        </Carousel>
      </div>

      <div className='trend-container'>
        <h1 style={{ textAlign: "left", fontSize: "2rem", fontWeight: "bold" }}>Popular Dramas in India</h1>
        <Carousel swipeable={true} responsive={responsive}>
          {dramas.map((item) => {
            return (
              <div key={item.id} className='trend-products'>
                <img src={item.poster} alt={item.title} />
                <div className='overview'>
                  <div className='back'>
                    <h2 className='trend-title'>{item.title}</h2>
                    <Link to={`/dramademo/${item.id}`}><Button>Watch Trailer</Button></Link>
                  </div>
                  <h3>Summary</h3>
                  {item.description}
                </div>
              </div>
            )
          })}
        </Carousel>
      </div>

      <div className='trend-container'>
        <h1 style={{ textAlign: "left", fontSize: "2rem", fontWeight: "bold" }}>Available In Different Languages</h1>
        <Carousel swipeable={true} responsive={responsive2}>
          {Languages.map((item) => {
            return (
              <div key={item.id} className="lang">
                <img src={item.url} alt={item.alt} />
              </div>
            )
          })}
        </Carousel>
      </div>

      <div className='trend-container'>
        <h1 style={{ textAlign: "left", fontSize: "2rem", fontWeight: "bold" }}>Popular Dramas in India</h1>
        <Carousel swipeable={true} responsive={responsive}>
          {webSeries.map((item) => {
            return (
              <div key={item.id} className='trend-products'>
                <img src={item.poster} alt={item.title} />
                <div className='overview'>
                  <div className='back'>
                    <h2 className='trend-title'>{item.title}</h2>
                    <Link to={`/webseriesdemo/${item.id}`}><Button>Watch Trailer</Button></Link>
                  </div>
                  <h3>Summary</h3>
                  {item.description}
                </div>
              </div>
            )
          })}
        </Carousel>
      </div>

      <div className='trend-container'>
        <h1 style={{ textAlign: "left", fontSize: "2rem", fontWeight: "bold" }}>Rent & Watch</h1>
        <Carousel swipeable={true} responsive={responsive3}>
          {rent.map((item) => {
            return (
              <div key={item.id} className="rent-watch">
                <img src={item.url} alt={item.title} />
                <div style={{ textAlign: "left", marginTop: "3px", padding: "10px", display: "flex", flexDirection: "column", background: "linear-gradient(270deg,#170e40 22.3%,#3b1c81 64.31%,#49104a)" }}>
                  <h3>{item.title}</h3>
                  <div >
                    <ul style={{ display: "flex", gap: "10px", listStyle:"none" }}>
                      <li>Type: {item.type}</li>
                      <li>Duration: {item.hrs}</li>
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </Carousel>
      </div>

    </div>
  )
}

export default Home