import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./Home.css";

const slide2 = [
    { id: 1, url: "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-0-1z5250012/cover/1920x770541441bea82b4c5ebb5e50fdf65b1486.jpg", alt: "s1" },
    { id: 2, url: "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-0-1z5259649/cover/1920x770c85c702415cb46fdbc2b704334a1222dbbbea06f09544107aae2e3dc55b58b3e.jpg", alt: "s2" },
    { id: 3, url: "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-0-1z5254708/cover/1920x77088754fa6d1384d259444f7d1d4b00a33.jpg", alt: "s3" },
    { id: 4, url: "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-0-1z51248/cover/1920x77014c02c5fa1a34847ae30a271fb74d329.jpg", alt: "s4" },
    { id: 5, url: "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-0-1z5266343/cover/1920x770adfe1ea302d644f69d29804dae8b13b1.jpg", alt: "s5" },
    { id: 6, url: "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-0-1z5270102/cover/1920x770e05f65413eaa40fb83c99ab74902c091.jpg", alt: "s6" },
    { id: 7, url: "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-0-1z5228525/cover/1920x77069dfde7f955d4ef69e73c3b682aa636b.jpg", alt: "s7" }
];

const slide3 = [
    { id: 1, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5264082/portrait/1920x77013997b45a7b54db3852c885ad51bf387.jpg", alt: "dm1" },
    { id: 2, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5228525/portrait/1920x77069dfde7f955d4ef69e73c3b682aa636b.jpg", alt: "dm2" },
    { id: 3, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5227565/portrait/1920x7704ce388d5a6e74dac8ad9255657da588f.jpg", alt: "dm3" },
    { id: 4, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5133458/portrait/1920x770a5ecb708ec774b84908c61e05e3625e9.jpg", alt: "dm4" },
    { id: 5, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5254708/portrait/1920x77088754fa6d1384d259444f7d1d4b00a33.jpg", alt: "dm5" },
    { id: 6, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5270168/portrait/1920x770cc8ed4836bfd4162a874ef5454d1b275.jpg", alt: "dm6" },
    { id: 7, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5250530/portrait/1920x770129e19e854434fa98ff8734cfc2d6d32670f87db468e4c03bd9511d3b0347094.jpg", alt: "dm7" },
    { id: 8, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5262105/portrait/1920x7702811233e91004a88aa695db00e22d575.jpg", alt: "dm8" },
    { id: 9, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5270157/portrait/1920x770c89fb54b72874249a31e7a37f1192fcc.jpg", alt: "dm9" },
    { id: 10, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5133622/portrait/1920x7705ef1215cc2984b548b3356566bf54c3d9e3d4a78407d4579938e19522c963b86.jpg", alt: "dm10" },
    { id: 11, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5227125/portrait/1920x770a68536cd3f1049089c07fab87c76482d.jpg", alt: "dm11" },
    { id: 12, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5146416/portrait/1920x7708dc79580826949a992f2b011b0e50f28.jpg", alt: "dm12" }
];

const slide4 = [
    { id: 1, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-1-6z5269873/portrait/1920x7705fe57b7a8636474a9a91e87402f84311.jpg", alt: "s1" },
    { id: 2, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5250012/portrait/1920x770541441bea82b4c5ebb5e50fdf65b1486.jpg", alt: "s2" },
    { id: 3, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5266343/portrait/1920x770adfe1ea302d644f69d29804dae8b13b1.jpg", alt: "s3" },
    { id: 4, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5262281/portrait/1920x770351c3aee7e8647d992183f33893962d1.jpg", alt: "s4" },
    { id: 5, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5261867/portrait/1920x770175cf3284e644bd48472ec218aaaddda.jpg", alt: "s5" },
    { id: 6, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-4z5246228/portrait/1920x7702c9b1a467ac54bb88d1d10ea40cde7c6fe2aceea54f149968b56565141ff844f.jpg", alt: "s6" },
    { id: 7, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5266008/portrait/1920x770c20c6d9a8c2e4723a4ff1a9be4556424.jpg", alt: "s7" },
    { id: 8, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5262187/portrait/1920x77087185ac0b16546aeada234b1aed066ba.jpg", alt: "s8" },
    { id: 9, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5262283/portrait/1920x7709a2c3520660648989b17c5188c894be2d45e9eee801544d5801688378a5aa4aa.jpg", alt: "s9" },
    { id: 10, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5262216/portrait/1920x770e28feaad70594dba87add2092ef149da.jpg", alt: "s10" },
    { id: 11, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5261980/portrait/1920x770302bdd4b2cca4ca29bb203485ad48e16.jpg", alt: "s11" },
    { id: 12, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-4z5230436/portrait/1920x770ac642b6d516f4a958c44cb56912a306cb137ff41ad1c409e86f0a9b4f733a023.jpg", alt: "s12" }
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

function Moviespage() {
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
                <h1 style={{ textAlign: "left", fontSize: "2rem", fontWeight: "bold" }}>Zee Movie Shows</h1>
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
                <h1 style={{ textAlign: "left", fontSize: "2rem", fontWeight: "bold" }}>Latest and Upcoming</h1>
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
                <h1 style={{ textAlign: "left", fontSize: "2rem", fontWeight: "bold" }}>Watch Free | ZEE5 Manoranjan Festival</h1>
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
        </div>
    )
}

export default Moviespage;