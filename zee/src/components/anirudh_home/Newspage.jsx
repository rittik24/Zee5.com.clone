import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./Home.css";

const slide2 = [
    { id: 1, url: "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-101-externalli_986487608/cover/zee24taas192021e804577a404f70a7f6adcb572188d8.jpg", alt: "s1" },
    { id: 2, url: "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-101-10z5121869/cover/tv9marathi1920f96c070cc0f843b1a6bcab3935eed271.jpg", alt: "s2" },
    { id: 3, url: "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-101-externall_1480997069/cover/aajtak1920desktop1d4ba0cf87de84d0396fbee399fe5e04e.jpg", alt: "s3" },
    { id: 4, url: "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-101-10z5117550/cover/indiatoday1920desktop15178408310704a8888aafd3a27ca363a.jpg", alt: "s4" },
    { id: 5, url: "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-101-externall_1511339173/cover/zeenews1920desktop1d5fed3036da64a3a8579889566bebfe0.jpg", alt: "s5" },
    { id: 6, url: "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-101-externalli_172926323/cover/abpmajha1920d79ec796f17e4741834d411491d096ad.jpg", alt: "s6" },
    { id: 7, url: "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-101-externall_1904997942/cover/wion1920desktop5c86f7211d564959afe6ada3a1e13f41.jpg", alt: "s7" }
];

const slide3 = [
    { id: 1, url: "https://akamaividz2.zee5.com/image/upload/w_451,h_254,c_scale,f_webp,q_auto:eco/resources/0-9-aajtak/list/aajtak11705bd3799ece9d4491b87ba04a2c57e78e.jpg", alt: "Aaj Tak" },
    { id: 2, url: "https://akamaividz2.zee5.com/image/upload/w_451,h_254,c_scale,f_webp,q_auto:eco/resources/0-9-zeenews/list/zeenews1170f2ce73fb97a048d494b94baf12db0efa.jpg", alt: "Zee News" },
    { id: 3, url: "https://akamaividz2.zee5.com/image/upload/w_451,h_254,c_scale,f_webp,q_auto:eco/resources/0-9-indiatoday/list/indiatodayrajeevsardesdai11700e203579951e458ea4e88b2935bb3d1a.jpg", alt: "India Today" },
    { id: 4, url: "https://akamaividz2.zee5.com/image/upload/w_451,h_254,c_scale,f_webp,q_auto:eco/resources/0-9-257/list/tv9marathi11706b03ecf435dc4ed4af0dd824e7cad4a4.jpg", alt: "TV9 Marathi" },
    { id: 5, url: "https://akamaividz2.zee5.com/image/upload/w_451,h_254,c_scale,f_webp,q_auto:eco/resources/0-9-zeebusiness/list/zeebusiness117089cf9de2406d4ceeaaa577c12734ede5.jpg", alt: "Zee Business" },
    { id: 6, url: "https://akamaividz2.zee5.com/image/upload/w_451,h_254,c_scale,f_webp,q_auto:eco/resources/0-9-wion/list/wion1170dd5dc312ad6b45a5b49424a5323304df.jpg", alt: "WION" },
    { id: 7, url: "https://akamaividz2.zee5.com/image/upload/w_451,h_254,c_scale,f_webp,q_auto:eco/resources/0-9-398/list/abpnews117034ca91a3f47c4327a7ae9bfa6be693a6.jpg", alt: "ABP News" },
    { id: 8, url: "https://akamaividz2.zee5.com/image/upload/w_451,h_254,c_scale,f_webp,q_auto:eco/resources/0-9-207/list/e241440aef5cb4e7bf242b5be599298be7f5b2a4554686f4b1c4816b35a20cd38d2393a.jpg", alt: "E 24" },
    { id: 9, url: "https://akamaividz2.zee5.com/image/upload/w_451,h_254,c_scale,f_webp,q_auto:eco/resources/0-9-272/list/indianews1170cedcc74fba3e4b75b9824e00a1299e6c.jpg", alt: "India News" },
    { id: 10, url: "https://akamaividz2.zee5.com/image/upload/w_451,h_254,c_scale,f_webp,q_auto:eco/resources/0-9-170/list/newsnation117080739cd3b19243c5aa39196f8a85db04.jpg", alt: "News Nation" }
];

const slide4 = [
    { id: 1, url: "https://akamaividz2.zee5.com/image/upload/w_451,h_254,c_scale,f_webp,q_auto:eco/resources/0-0-newsauto_pn0su1tl7fc0/list/00000002largee4619d9a49344bea98da73815ce6cceb.jpg", alt: "Congress attacks PM Modi over Tawang Clash, Asks 7 Questions" },
    { id: 2, url: "https://akamaividz2.zee5.com/image/upload/w_451,h_254,c_scale,f_webp,q_auto:eco/resources/0-0-newsauto_271hvo0pdlrg/list/chinasixteenninelarge70ce2bdf1fb44590914f76ef323ea50e.jpg", alt: "tawang clash china itself is trapped in cycle of cleverness what is going on in jinping mind" },
    { id: 3, url: "https://akamaividz2.zee5.com/image/upload/w_451,h_254,c_scale,f_webp,q_auto:eco/resources/0-0-newsauto_5gipq3uo2jc0/list/anuragthakur1914259455large7a134949533e4342a07a9b7f6c78b9bc.jpg", alt: "राहुल गांधी के Tawang वाले बयान पर अनुराग ठाकुर का पलटवार |" },
    { id: 4, url: "https://akamaividz2.zee5.com/image/upload/w_451,h_254,c_scale,f_webp,q_auto:eco/resources/0-0-newsauto_bd1va690kdi0/list/tawangclash1372220022large70cc20d54d1040309df2d779776effb6.jpg", alt: "झूठ की राजनीति लंबे वक्त तक नहीं चलती : राजनाथ सिंह |" },
    { id: 5, url: "https://akamaividz2.zee5.com/image/upload/w_451,h_254,c_scale,f_webp,q_auto:eco/resources/0-0-newsauto_621b3f302j10/list/indochina1016604463largef6f103077c344ae0bf56cf4f232bcc29.jpg", alt: "डोकलाम के पास China कर रहा है निर्माण : मल्लिकार्जुन खड़गे |" },
    { id: 6, url: "https://akamaividz2.zee5.com/image/upload/w_451,h_254,c_scale,f_webp,q_auto:eco/resources/0-0-newsauto_4t68c1ld3ej0/list/indiachinaclashsixteennine0large94d206efca2b4c268489b1cc929f5a02.jpg", alt: "India china clash situation of stress in country due to this and political ruckus after rahul gandhi statement" },
    { id: 7, url: "https://akamaividz2.zee5.com/image/upload/w_451,h_254,c_scale,f_webp,q_auto:eco/resources/0-0-newsauto_6fgnhmvvff40/list/indochina4742321415large140e56edac424f8987a73e6646dc91f4.jpg", alt: "CM योगी का राहुल गांधी पर बड़ा हमला | Indo-China Clash |" },
    { id: 8, url: "https://akamaividz2.zee5.com/image/upload/w_451,h_254,c_scale,f_webp,q_auto:eco/resources/0-0-newsauto_1h4batlh9fa0/list/tawang2sixteenninelargebc6cb85720054427beb8c82f2d4c6848.jpg", alt: "BJP vs Congress over china clash in tawang how much weightage there in rahul gandhi questions" },
    { id: 9, url: "https://akamaividz2.zee5.com/image/upload/w_451,h_254,c_scale,f_webp,q_auto:eco/resources/0-0-newsauto_ien00sf2rts0/list/copyofvideothumbnails20221217t141501large3ec59f6445604f648c016e793407cb15.jpg", alt: "Kiren Rijiju tweets picture of Yangtse after Tawang clash Met army" },
    { id: 10, url: "https://akamaividz2.zee5.com/image/upload/w_451,h_254,c_scale,f_webp,q_auto:eco/resources/0-0-newsauto_4849k8hen2p0/list/2022121720bzZLZ3fthumbnail350x26370large44182061be364495aa6733c942088f99.jpg", alt: "“We support Indian Army…” Tawang locals after India-China border clash" }
];

const slide5 = [
    { id: 1, url: "https://akamaividz2.zee5.com/image/upload/w_451,h_254,c_scale,f_webp,q_auto:eco/resources/0-0-newsauto_3e4a0126askg/list/00000002largedd18d5c4225e4236be1a965234ef9885.jpg", alt: "Ukraine works to restore power after Russian missiles batter grid" },
    { id: 2, url: "https://akamaividz2.zee5.com/image/upload/w_451,h_254,c_scale,f_webp,q_auto:eco/resources/0-0-newsauto_5i2nbh8bm9g0/list/december17v33indianewslargeb4e17b08171447f3b7a7f3fe2369bece.jpg", alt: "Russia Ukraine war continues for last 10 months" },
    { id: 3, url: "https://akamaividz2.zee5.com/image/upload/w_451,h_254,c_scale,f_webp,q_auto:eco/resources/0-0-newsauto_6894k6k6aui0/list/ukrainattack6887975620largeefa0b153704c4d3cae7f8c6b6bf77982.jpg", alt: "Ukraine पर बड़े हमले की तैयारी में पुतिन | War News |" },
    { id: 4, url: "https://akamaividz2.zee5.com/image/upload/w_451,h_254,c_scale,f_webp,q_auto:eco/resources/0-0-newsauto_5p0sqsbrqb10/list/muktabold20221217t235754large0e299dc3b6d84feabf18dd0b11f0578c.jpg", alt: "Dragon's fort will be destroyed by Hasimara airbase Rafael is on alert mode" },
    { id: 5, url: "https://akamaividz2.zee5.com/image/upload/w_451,h_254,c_scale,f_webp,q_auto:eco/resources/0-0-newsauto_60fmm2egrlp0/list/2b1cc889595e1099516ecf7bda2511751671243202570470originallargee2fc42335e7a471aa4042ab08e229d46.jpg", alt: "Pakistan does not have food grains to threaten nuclear attack: Bilawal On Modi" },
    { id: 6, url: "https://akamaividz2.zee5.com/image/upload/w_451,h_254,c_scale,f_webp,q_auto:eco/resources/0-0-newsauto_7rn3e3u2cls0/list/2022121784thumbnail350x26370largebfedbdf43127484397d442869e7df7ff.jpg", alt: "DRDO-upgraded Agni missiles can now strike targets beyond 7,000 kms" },
    { id: 7, url: "https://akamaividz2.zee5.com/image/upload/w_451,h_254,c_scale,f_webp,q_auto:eco/resources/0-0-newsauto_478l1qf9c7c0/list/muktabold90sixteenninelarge15af3eb79d6d4bada1799c6653629d87.jpg", alt: "Will the film be a hit due to controversies and what is the two edged sword of Boycott see Kavi Sammelan" },
    { id: 8, url: "https://akamaividz2.zee5.com/image/upload/w_451,h_254,c_scale,f_webp,q_auto:eco/resources/0-0-newsauto_6jr7483s92n0/list/gnt10sixteenninelargec8d5ff9ac7484c9b8cd4542e4e5265e0.jpg", alt: "India conducts night trial of Agni-5 nuclear ballistic missile" },
    { id: 9, url: "https://akamaividz2.zee5.com/image/upload/w_451,h_254,c_scale,f_webp,q_auto:eco/resources/0-0-newsauto_2f9t0h999ldg/list/amitsixteenninelargee5dd0b6240fc4fe299ccff78b16a4a61.jpg", alt: "amit shah meeting in kolkata related to interstate trade smuggling issue" },
    { id: 10, url: "https://akamaividz2.zee5.com/image/upload/w_451,h_254,c_scale,f_webp,q_auto:eco/resources/0-0-newsauto_6uff7okqqos0/list/UUDAb1Zd1sy3bt4kwlargef925857a18994c988199a83c81f16319.jpg", alt: "Smriti Irani briefs LS on children schemes" },
    { id: 11, url: "https://akamaividz2.zee5.com/image/upload/w_451,h_254,c_scale,f_webp,q_auto:eco/resources/0-0-newsauto_6embc5bu7pt0/list/newspath20sixteenninelarge00113684dbc14405becfb14aa0d75196.jpg", alt: "Elderly man narrowly escaping a road accident inPowai area of Mumbai Latest News Viral Video" },
    { id: 12, url: "https://akamaividz2.zee5.com/image/upload/w_451,h_254,c_scale,f_webp,q_auto:eco/resources/0-0-newsauto_59s2almng570/list/newspath9sixteenninelarge091a3282d6204347a05674defe231fb1.jpg", alt: "The difficulties of former Prime Minister of Pakistan Imran Khan increased" },
    { id: 13, url: "https://akamaividz2.zee5.com/image/upload/w_451,h_254,c_scale,f_webp,q_auto:eco/resources/0-0-newsauto_2q48sc1qq8d0/list/muktabold77sixteenninelarge3788bb25f6a24f66a31ac0deb0eda71f.jpg", alt: "In Karnal a farmer quit his job and set up a guava orchard now earning lakhs" },
    { id: 14, url: "https://akamaividz2.zee5.com/image/upload/w_451,h_254,c_scale,f_webp,q_auto:eco/resources/0-0-newsauto_7d6sj4c79j40/list/agnisixteenninelargebf3f627a89404b28b7e47bb64fb2db0a.jpg", alt: "Night trial of Agni 5 ballistic missile Know all about it" }
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
];

function Newspage() {
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
                <h1 style={{ textAlign: "left", fontSize: "2rem", fontWeight: "bold" }}>Free Live News Channel</h1>
                <Carousel swipeable={true} responsive={responsive2}>
                    {slide3.map((item) => {
                        return (
                            <div key={item.id} className="latest1">
                                <img src={item.url} alt={item.alt} />
                                <div style={{ textAlign: "left", marginTop: "3px", padding: "10px", backgroundColor: "#fff" }}>
                                    <h4 style={{ fontWeight: "600" }}><b>{item.alt}</b></h4>
                                    <h5 style={{ fontWeight: "600" }}>Watch</h5>
                                </div>
                            </div>
                        )
                    })}
                </Carousel>
            </div>

            <div className='trend-container'>
                <h1 style={{ textAlign: "left", fontSize: "2rem", fontWeight: "bold" }}>Indo-China Arunachal border clash</h1>
                <Carousel swipeable={true} responsive={responsive2}>
                    {slide4.map((item) => {
                        return (
                            <div key={item.id} className="news1">
                                <img src={item.url} alt={item.alt} />
                                <div style={{ textAlign: "left", marginTop: "3px", padding: "10px", backgroundColor: "#fff" }}>
                                    <p style={{ fontWeight: "600" }}>{item.alt}</p>
                                </div>
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
                <h1 style={{ textAlign: "left", fontSize: "2rem", fontWeight: "bold" }}>Editor's Choice</h1>
                <Carousel swipeable={true} responsive={responsive2}>
                    {slide5.map((item) => {
                        return (
                            <div key={item.id} className="news1">
                                <img src={item.url} alt={item.alt} />
                                <div style={{ textAlign: "left", marginTop: "3px", padding: "10px", backgroundColor: "#fff" }}>
                                    <p style={{ fontWeight: "600" }}>{item.alt}</p>
                                </div>
                            </div>
                        )
                    })}
                </Carousel>
            </div>
        </div>
    )
}

export default Newspage;