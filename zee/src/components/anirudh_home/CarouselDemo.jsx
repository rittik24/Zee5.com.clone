import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import "./Home.css";

function CarouselDemo({ data }) {
    let { Id } = useParams();

    let temp = data.filter((item) => {
        return item.id === Number(Id);
    })
    console.log(temp);



    return (
        <div className="det-container">
            <div className="det-part1">
                <h1 style={{ textAlign: "left", paddingLeft: "35px", fontSize: "2rem" }}>You are watching a trailer</h1>
                {temp.map((item) => {
                    return (
                        <ReactPlayer key={item.id}
                            width="100%"
                            height="700px"
                            controls
                            style={{ padding: "35px", marginTop: "10px" }}
                            url={item.trailer}
                        />
                    )
                })}

                {temp.map((item) => {
                    return (
                        <h1 style={{ textAlign: "left", paddingLeft: "35px", fontSize: "2rem", marginTop: "15px" }}>{item.title}</h1>
                    )
                })}

                <div style={{ display: "flex", gap: "10px", paddingLeft: "35px", marginTop: "15px" }}>
                    <div style={{ width: "100px", height: "100px", display: "flex", justifyContent: "center", alignItems: "center", background: "linear-gradient(270deg,#170e40 22.3%,#3b1c81 64.31%)" }}>
                        <h1 te>Share</h1>
                    </div>
                    <div style={{ width: "100px", height: "100px", display: "flex", justifyContent: "center", alignItems: "center", background: "linear-gradient(270deg,#170e40 22.3%,#3b1c81 64.31%)" }}>
                        <h1>Watchlist</h1>
                    </div>
                </div>

                <div style={{display:"flex", flexDirection:"column", gap:"15px", textAlign: "left", paddingLeft: "35px", fontSize: "1.3rem", marginTop: "15px"}}>
                    <h3>Audio Languages: Hindi, English</h3>
                    <h3>Subtitles: English</h3>
                </div>

                {temp.map((item) => {
                    return (
                        <h2 style={{ textAlign: "left", paddingLeft: "35px", fontSize: "1.3rem", marginTop: "15px" }}>{item.description}</h2>
                    )
                })}
            </div>
            <div className="det-part2">
                <h1 style={{ textAlign: "left", paddingLeft: "35px", fontSize: "2rem" }}>Some More References</h1>
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
    )
}

export default CarouselDemo;