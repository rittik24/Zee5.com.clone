import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./Home.css";

const slide2 = [
    { id: 1, url: "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-6-4z5199975/cover/1920x7700b1f9a5596a848a493f7bd6a3d226928.jpg", alt: "s1" },
    { id: 2, url: "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-6-3348/cover/1920x770385568547.jpg", alt: "s2" },
    { id: 3, url: "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-8-1627/cover/1920x770be0f1fca94b74a5f9923d3a05127760734ecb765bc084732b533585fb4568be5.jpg", alt: "s3" },
    { id: 4, url: "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-6-4z5230436/cover/1920x770ac642b6d516f4a958c44cb56912a306cb137ff41ad1c409e86f0a9b4f733a023.jpg", alt: "s4" },
    { id: 5, url: "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-6-2176/cover/1920x770566e9b9990cd4b44a9c7a06ddd7a338d.jpg", alt: "s5" },
    { id: 6, url: "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-6-4z5173774/cover/1920x7706e8d8d70922c434c94dd09c14ccc5d5b.jpg", alt: "s6" },
    { id: 7, url: "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-6-2370/cover/1920x770a94a27dafbe843889985e57f05578452d666a1c619ef4410b182686d33f158b5.jpg", alt: "s7" }
];

const slide3 = [
    { id: 1, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-4z5199975/portrait/1920x7700b1f9a5596a848a493f7bd6a3d226928.jpg", alt: "dm1" },
    { id: 2, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-4z5245891/portrait/1920x770ab59b4019e934793a65158a1e008b40e.jpg", alt: "dm2" },
    { id: 3, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-4z5246228/portrait/1920x7702c9b1a467ac54bb88d1d10ea40cde7c6fe2aceea54f149968b56565141ff844f.jpg", alt: "dm3" },
    { id: 4, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-4z5230436/portrait/1920x770ac642b6d516f4a958c44cb56912a306cb137ff41ad1c409e86f0a9b4f733a023.jpg", alt: "dm4" },
    { id: 5, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-4z5173774/portrait/1920x7706e8d8d70922c434c94dd09c14ccc5d5b.jpg", alt: "dm5" },
    { id: 6, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-4z5193948/portrait/1920x7704ba850de7a8a410cb16fa2d7468d3e77.jpg", alt: "dm6" },
    { id: 7, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-4z5192239/portrait/1920x770a78be5fdc4ef469fa04a1dbeaa702c2e.jpg", alt: "dm7" },
    { id: 8, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-2176/portrait/1920x770566e9b9990cd4b44a9c7a06ddd7a338d.jpg", alt: "dm8" },
    { id: 9, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-4z5145215/portrait/1920x770abf42130d9cf41dab2bf9e648cf3193b4100d873cc6547a8a4a4c92739160b3f.jpg", alt: "dm9" },
    { id: 10, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-1298/portrait/1920x770965ee5a2fa074700a518bc88706bdcfa.jpg", alt: "dm10" }
];

const slide4 = [
    { id: 1, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-4z587408/portrait/1920x770195db875fe204fa4afe115764b5dc00ba004028948aa4211b107faed649301d7.jpg", alt: "s1" },
    { id: 2, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-3064/portrait/1920x770f6f1d5315e9145808275b6b69e6572f7.jpg", alt: "s2" },
    { id: 3, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-2922/portrait/1920x77049928193.jpg", alt: "s3" },
    { id: 4, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-1290/portrait/061290incover.jpg", alt: "s4" },
    { id: 5, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-1558/portrait/061558incover.jpg", alt: "s5" },
    { id: 6, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-4z5199975/portrait/1920x7700b1f9a5596a848a493f7bd6a3d226928.jpg", alt: "s6" },
    { id: 7, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-1741/portrait/061741incover.jpg", alt: "s7" },
    { id: 8, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-4z5193948/portrait/1920x7704ba850de7a8a410cb16fa2d7468d3e77.jpg", alt: "s8" },
    { id: 9, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-1258/portrait/061258incover517104826.jpg", alt: "s9" },
    { id: 10, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-2007/portrait/062007incover1527602585.jpg", alt: "s10" },
    { id: 11, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-3029/portrait/063029incover83682024583685789567ca29344c3afa58ccd14134d56.jpg", alt: "s11" },
    { id: 12, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-2070/portrait/062070incover256016612.jpg", alt: "s12" }
];

const slide5 = [
    { id: 1, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-4z5250959/portrait/1920x7709419fa306cbc42f187285a123b6629b3.jpg", alt: "Kundali Bhagaya" },
    { id: 2, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-2211/portrait/062211incover.jpg", alt: "Bhagya Laksmi" },
    { id: 3, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-2356/portrait/1920x770ffdfc616c75840cf95545cd67e3476d6e2fb2ce4623c4ebaa29b36ba97edf983.jpg", alt: "Kumkum Bhagya" },
    { id: 4, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-2135/portrait/062135incover.jpg", alt: "Aparijita" },
    { id: 5, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-2135/portrait/062135incover.jpg", alt: "Radha Mohan" },
    { id: 6, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-3038/portrait/1920x770v2890663693.jpg", alt: "Mith" },
    { id: 7, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-4z5130773/portrait/1920x7708e0b2f3ad3bb45b8be8b3073d20fb1aa.jpg", alt: "Bhabhiji Ghar par hai" },
    { id: 8, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-1868/portrait/1920x770896883901.jpg", alt: "Ma Laksmi" },
    { id: 9, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-3190/portrait/063190incover1678523341.jpg", alt: "Mahanayak" },
    { id: 10, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-2257/portrait/1920x770in298403941.jpg", alt: "Happu ki Ultan Paltan" },
    { id: 11, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-3015/portrait/1920x770aa1fb3f70e904781934e4f53df3fe526.jpg", alt: "Kundali Bhagya" },
    { id: 12, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-3502/portrait/1920x77096c3c9d32c6946bb933bef0e7463b7af.jpg", alt: "Bhagya Laksmi" },
    { id: 13, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-2457/portrait/062457incover.jpg", alt: "Kumkum Bhagya" },
    { id: 14, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-3299/portrait/063299incover.jpg", alt: "Mith" }
];

const languages = [
    { id: 1, url: "https://akamaividz2.zee5.com/image/upload/platform/lang/hindi.jpg", alt: "Hindi" },
    { id: 2, url: "https://akamaividz2.zee5.com/image/upload/platform/lang/marathi.jpg", alt: "Marathi" },
    { id: 3, url: "https://akamaividz2.zee5.com/image/upload/platform/lang/tamil.jpg", alt: "Tamil" },
    { id: 4, url: "https://akamaividz2.zee5.com/image/upload/platform/lang/telugu.jpg", alt: "Telugu" },
    { id: 5, url: "https://akamaividz2.zee5.com/image/upload/platform/lang/bengali.jpg", alt: "Bengali" },
    { id: 6, url: "https://akamaividz2.zee5.com/image/upload/platform/lang/kannada.jpg", alt: "Kannada" },
    { id: 7, url: "https://akamaividz2.zee5.com/image/upload/platform/lang/malayalam.jpg", alt: "Malayalam" },
    { id: 8, url: "https://akamaividz2.zee5.com/image/upload/platform/lang/punjabi.jpg", alt: "Punjabi" },
    { id: 9, url: "https://akamaividz2.zee5.com/image/upload/platform/lang/odia.jpg", alt: "Odia" },
    { id: 10, url: "https://akamaividz2.zee5.com/image/upload/platform/lang/bhojpuri.jpg", alt: "Bhojpuri" },
    { id: 11, url: "https://akamaividz2.zee5.com/image/upload/platform/lang/gujrati.jpg", alt: "Gujarati" },
    { id: 12, url: "https://akamaividz2.zee5.com/image/upload/platform/lang/english.jpg", alt: "English" }
]

const Genere = [
    {id : 1, url: "https://akamaividz2.zee5.com/image/upload/platform/tvshow/romantic.jpg", alt: "Romantic"},
    {id : 2, url: "https://akamaividz2.zee5.com/image/upload/platform/tvshow/reality.jpg", alt: "Reality"},
    {id : 3, url: "https://akamaividz2.zee5.com/image/upload/platform/Tvshow/Mythology-genre.jpg", alt: "Mythology"},
    {id : 4, url: "https://akamaividz2.zee5.com/image/upload/platform/Tvshow/Horror-genre.jpg", alt: "Horror"},
    {id : 5, url: "https://akamaividz2.zee5.com/image/upload/platform/Tvshow/Supernatural-genre.jpg", alt: "Supernatural"},
    {id : 6, url: "https://akamaividz2.zee5.com/image/upload/platform/Tvshow/Devotional-genre.jpg", alt: "Devotional"},
    {id : 7, url: "https://akamaividz2.zee5.com/image/upload/platform/Tvshow/Comedy-genre.jpg", alt: "Comedy"},
    {id : 8, url: "https://akamaividz2.zee5.com/image/upload/platform/Tvshow/Crime-genre.jpg", alt: "Crime"},
    {id : 9, url: "https://akamaividz2.zee5.com/image/upload/platform/tvshow/chat.jpg", alt: "Chat"},
    {id : 10, url: "https://akamaividz2.zee5.com/image/upload/platform/Tvshow/Thriller-genre.jpg", alt: "Thriller"},
    {id : 11, url: "https://akamaividz2.zee5.com/image/upload/platform/Tvshow/Suspense-genre.jpg", alt: "Suspense"},
    {id:12, url: "https://akamaividz2.zee5.com/image/upload/platform/Tvshow/Fantasy-genre.jpg", alt:"Fantasy"},
    {id:13, url: "https://akamaividz2.zee5.com/image/upload/platform/Tvshow/Drama-genre.jpg", alt:"Drama"},
    {id:14, url: "https://akamaividz2.zee5.com/image/upload/platform/Tvshow/Family-genre.jpg", alt:"Family"}
]

function WebSeriesPage() {
    const settings1 = {
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 2000,
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

    const responsive = {
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
            breakpoint: { max: 999, min: 800 },
            items: 3
        },
        smallmobile: {
            breakpoint: { max: 799, min: 550 },
            items: 2
        },
        extrasmall: {
            breakpoint: { max: 549, min: 300 },
            items: 1
        }
    };


    return (
        <div>
            <div style={{ width: "90%", margin: "auto", marginTop: "32px" }}>
                <Slider {...settings1}>
                    {slide2.map((item) => (
                        <img key={item.id} className="slide1" src={item.url} alt={item.alt} />
                    ))}
                </Slider>
            </div>

            <div className='trend-container'>
                <h1 style={{ textAlign: "left", fontSize: "2rem", fontWeight: "bold" }}>Top 10 Web Series</h1>
                <Carousel swipeable={true} responsive={responsive}>
                    {slide3.map((item) => {
                        return (
                            <div key={item.id} className='tvshow-products'>
                                <img src={item.url} alt={item.alt} />
                            </div>
                        )
                    })}
                </Carousel>
            </div>

            <div className="trend-container">
                <h1 style={{ textAlign: "left", fontSize: "2rem", fontWeight: "bold" }}>Nail Biting Thrillers</h1>
                <Carousel swipeable={true} responsive={responsive}>
                    {slide4.map((item) => {
                        return (
                            <div key={item.id} className='tvshow-products'>
                                <img src={item.url} alt={item.alt} />
                            </div>
                        )
                    })}
                </Carousel>
            </div>

            <div className='trend-container'>
                <h1 style={{ textAlign: "left", fontSize: "2rem", fontWeight: "bold" }}>Available In Different Languages</h1>
                <Carousel swipeable={true} responsive={responsive2}>
                    {languages.map((item) => {
                        return (
                            <div key={item.id} className="lang">
                                <img src={item.url} alt={item.alt} />
                            </div>
                        )
                    })}
                </Carousel>
            </div>

            <div className='trend-container'>
                <h1 style={{ textAlign: "left", fontSize: "2rem", fontWeight: "bold" }}>Browse By Genre</h1>
                <Carousel swipeable={true} responsive={responsive2}>
                    {Genere.map((item) => {
                        return (
                            <div key={item.id} className="lang">
                                <img src={item.url} alt={item.alt} />
                            </div>
                        )
                    })}
                </Carousel>
            </div>

            <div className="trend-container">
                <h1 style={{ textAlign: "left", fontSize: "2rem", fontWeight: "bold" }}>The Ultimate Romance</h1>
                <Carousel swipeable={true} responsive={responsive}>
                    {slide5.map((item) => {
                        return (
                            <div key={item.id} className='tvshow-products'>
                                <img src={item.url} alt={item.alt} />
                            </div>
                        )
                    })}
                </Carousel>
            </div>
        </div>
    )
}

export default WebSeriesPage;