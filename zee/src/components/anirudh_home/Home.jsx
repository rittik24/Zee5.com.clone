import React from 'react';
import "./Home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides1 = [
  {
    url: "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-0-1z5250012/cover/1920x770541441bea82b4c5ebb5e50fdf65b1486.jpg",
    alt: "one"
  },
  {
    url: "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-0-1z5264517/cover/1920x770618f9da3dbd54edcac6cd320187bf1f2e6966885630a401fb3ed9fc393b63bbd.jpg",
    alt: "two"
  },
  {
    url: "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-0-1z5259649/cover/1920x770c85c702415cb46fdbc2b704334a1222d.jpg",
    alt: "three"
  },
  {
    url: "https://akamaividz2.zee5.com/image/upload/w_899,h_506,c_scale,f_webp,q_auto:eco/resources/0-6-4z5199975/app_cover/1440x810d24028bfaafa417d9ef3a5668186ba02.jpg",
    alt: "four"
  },
  {
    url: "https://akamaividz2.zee5.com/image/upload/w_899,h_506,c_scale,f_webp,q_auto:eco/resources/0-6-366/app_cover/1440x810671bbd9b62df45bcb7801c9b6e11cac0.jpg",
    alt: "five"
  },
  {
    url: "https://akamaividz2.zee5.com/image/upload/w_899,h_506,c_scale,f_webp,q_auto:eco/resources/0-6-3392/app_cover/1440x8102a557f472d8447feb0fbb6f82cddd65c.jpg",
    alt: "six"
  }
]

const Home = () => {
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div>
      <div style={{ width: "90%", margin: "auto", marginTop: "32px" }}>
        <Slider {...settings}>
          {slides1.map((item) => (
            <img className="slide1" src={item.url} alt={item.alt} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Home