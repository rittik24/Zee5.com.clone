import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import "./Home.css";
import { Button } from "@chakra-ui/button";
import Carousel from "react-multi-carousel";

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

function CarouselDemo({ data }) {
    let { Id } = useParams();

    let temp = data.filter((item) => {
        return item.id === Number(Id);
    })
    console.log(temp);



    return (
        <div>
            <div className="demotrailer-container">
                <div className="det1">
                    <h1 style={{ textAlign: "left", fontSize: "2rem" }}>You are watching a trailer</h1>
                    {temp.map((item) => {
                        return (
                            <ReactPlayer key={item.id}
                                width="100%"
                                height="700px"
                                controls
                                style={{ marginTop: "10px" }}
                                url={item.trailer}
                            />
                        )
                    })}

                    {temp.map((item) => {
                        return (
                            <h1 style={{ textAlign: "left", fontSize: "2rem", marginTop: "15px" }}>{item.title}</h1>
                        )
                    })}

                    <div style={{ display: "flex", gap: "10px", marginTop: "15px" }}>
                        <div style={{ width: "100px", height: "100px", display: "flex", justifyContent: "center", alignItems: "center", background: "linear-gradient(270deg,#170e40 22.3%,#3b1c81 64.31%)" }}>
                            <h1 te>Share</h1>
                        </div>
                        <div style={{ width: "100px", height: "100px", display: "flex", justifyContent: "center", alignItems: "center", background: "linear-gradient(270deg,#170e40 22.3%,#3b1c81 64.31%)" }}>
                            <h1>Watchlist</h1>
                        </div>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "15px", textAlign: "left", fontSize: "1.3rem", marginTop: "15px" }}>
                        <h3>Audio Languages: Hindi, English</h3>
                        <h3>Subtitles: English</h3>
                    </div>

                    {temp.map((item) => {
                        return (
                            <h2 style={{ textAlign: "left", fontSize: "1.3rem", marginTop: "15px" }}>{item.description}</h2>
                        )
                    })}
                </div>
                <div className="det2">
                    <h1 style={{ textAlign: "left", fontSize: "2rem" }}>Some More References</h1>
                    <div style={{ display: "flex", gap: "20px" }}>
                        <div style={{ marginTop: "15px" }}>
                            <div className='dummy-products'>
                                <img src="https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5233652/portrait/1920x77080f67bc07f5b44c590fba24494b638ac.jpg" alt="dum1" />
                                <div className='overview'>
                                    <h2 className='trend-title'>Big Octopus</h2>
                                    <h3>Summary</h3>
                                    The owner of a small shop gets entangled in a conspiracy involving genetic experiments when he catches a tiny mutated octopus. Things go haywire when the mutations turn the octopus into a giant kaiju.
                                </div>
                            </div>
                        </div>
                        <div style={{ marginTop: "15px" }}>
                            <div className='dummy-products'>
                                <img src="https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5258273/portrait/1920x7706a2fb486e5af4b5dae5d2481e4ddffdb.jpg" alt="dum1" />
                                <div className='overview'>
                                    <h2 className='trend-title'>King of Serpent</h2>
                                    <h3>Summary</h3>
                                    When Chen Zheng and his friends go to King Serpent Island to collect data on snakes, they encounter evil snake catchers led by Jin Laosi. Will Chen Zheng be able to save the island and its snakes?
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: "flex", gap: "20px" }}>
                        <div style={{ marginTop: "15px" }}>
                            <div className='dummy-products'>
                                <img src="https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5233652/portrait/1920x77080f67bc07f5b44c590fba24494b638ac.jpg" alt="dum1" />
                                <div className='overview'>
                                    <h2 className='trend-title'>Big Octopus</h2>
                                    <h3>Summary</h3>
                                    The owner of a small shop gets entangled in a conspiracy involving genetic experiments when he catches a tiny mutated octopus. Things go haywire when the mutations turn the octopus into a giant kaiju.
                                </div>
                            </div>
                        </div>
                        <div style={{ marginTop: "15px" }}>
                            <div className='dummy-products'>
                                <img src="https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5258273/portrait/1920x7706a2fb486e5af4b5dae5d2481e4ddffdb.jpg" alt="dum1" />
                                <div className='overview'>
                                    <h2 className='trend-title'>King of Serpent</h2>
                                    <h3>Summary</h3>
                                    When Chen Zheng and his friends go to King Serpent Island to collect data on snakes, they encounter evil snake catchers led by Jin Laosi. Will Chen Zheng be able to save the island and its snakes?
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: "flex", gap: "20px" }}>
                        <div style={{ marginTop: "15px" }}>
                            <div className='dummy-products'>
                                <img src="https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5233652/portrait/1920x77080f67bc07f5b44c590fba24494b638ac.jpg" alt="dum1" />
                                <div className='overview'>
                                    <h2 className='trend-title'>Big Octopus</h2>
                                    <h3>Summary</h3>
                                    The owner of a small shop gets entangled in a conspiracy involving genetic experiments when he catches a tiny mutated octopus. Things go haywire when the mutations turn the octopus into a giant kaiju.
                                </div>
                            </div>
                        </div>
                        <div style={{ marginTop: "15px" }}>
                            <div className='dummy-products'>
                                <img src="https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5258273/portrait/1920x7706a2fb486e5af4b5dae5d2481e4ddffdb.jpg" alt="dum1" />
                                <div className='overview'>
                                    <h2 className='trend-title'>King of Serpent</h2>
                                    <h3>Summary</h3>
                                    When Chen Zheng and his friends go to King Serpent Island to collect data on snakes, they encounter evil snake catchers led by Jin Laosi. Will Chen Zheng be able to save the island and its snakes?
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='trend-container'>
                <h1 style={{ textAlign: "left", fontSize: "2rem", fontWeight: "bold" }}>Popular & Trending</h1>
                <Carousel swipeable={true} responsive={responsive}>
                    {data.map((item) => {
                        return (
                            <div key={item.id} className='trend-products'>
                                <img src={item.poster} alt={item.title} />
                                <div className='overview'>
                                    <div className='back'>
                                        <h2 className='trend-title'>{item.title}</h2>
                                        <Button>Watch Trailer</Button>
                                    </div>
                                    <h3>Summary</h3>
                                    {item.description}
                                </div>
                            </div>
                        )
                    })}
                </Carousel>
            </div>
        </div>

    )
}

export default CarouselDemo;