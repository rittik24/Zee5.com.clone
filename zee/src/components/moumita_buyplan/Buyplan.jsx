import React, { useState } from "react";
import "./Buyplan.css";
import { AiOutlineCheck } from "react-icons/ai";
import { CiPercent } from "react-icons/ci";

// const bgc={background:""}
// const bgcc={background:"#2C2136"}

const Buyplan = () => {
  // const [color,setColor]=useState(bgc)

  // const [preHd,setPreHd]=useState("#2C2136")
  // const [preHd,setPreHd]=useState("")

  // const [preK,setPreK]=useState("#2C2136")

  // style={{backgroundColor:{preHd}}}

  // const handlechange=()=>{
  //   console.log("yes")

  // }
  return (
    <div className="headb">
      <div className="mainb">
        <h1 className="pln">Choose your premium plan</h1>
        <div className="mainbob">
          <div className="boxb">
            {/* 1st */}
            <div className="pre-conb">
              <div>
                <h2>Premium content</h2>
                <p className="pb">
                  Movies, Web Series, TV Shows, Live TV, Downloads
                </p>
              </div>
              <hr />
              <div>
                <h2 className="h2b">Ad-free</h2>
              </div>
              <hr />
              <div>
                <h2 className="h2b">Device</h2>
                <p className="pb">Mobile, TV and Laptop</p>
              </div>
              <div></div>
              <div></div>
            </div>
            {/* second */}
            <div className="iconb">
              <div>
                <h2>Premium HD</h2>
              </div>
              <hr />
              <div>
                <AiOutlineCheck />
              </div>
              <hr />
              <div>
                <AiOutlineCheck />
              </div>
              <hr />
              <div>
                <AiOutlineCheck />
              </div>
              <div></div>
              <div></div>
            </div>
            {/* 3rd */}
            <div className="iconb2">
              <div>
                <h2>Premium 4k</h2>
              </div>
              <hr />
              <div>
                <AiOutlineCheck />
              </div>
              <hr />
              <div>
                <AiOutlineCheck />
              </div>
              <hr />
              <div>
                <AiOutlineCheck />
              </div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="preb">
            <div className="fpre">
              <h3>Premium</h3>
              <h3>$399</h3>

              <h3>3 Months</h3>
            </div>
            <div className="spre">
              <h3>Premium HD</h3>
              <h3>$699</h3>
              <h3>12 Months</h3>
            </div>
            <div className="tpre">
              <h3>Premium 4k</h3>
              <h3>$1499</h3>
              <h3>12 Months</h3>
            </div>
          </div>
          {/* apply */}
          <div className="applyb">
            <CiPercent />
            <p>Apply code</p>
          </div>

          <p style={{ color: "#a4a0a0dc" }}>
            HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability{" "}
          </p>
          <p style={{ color: "#a4a0a0dc" }}>
            subject to your internet service and device capabilities.
          </p>
          <p style={{ color: "#a4a0a0dc" }}>
            {" "}
            Not all content is available in all resolutions. See our Terms of
            Use for more details
          </p>
          <div className="payb">
            <div>
              <p>Pay useing UPI</p>
            </div>
            <button className="btnb">Buy Premium</button>
          </div>
        </div>

        <div></div>
      </div>
      {/* <hr/> */}
      <div className="fotterb">
        <div>
          <h4 className="fotb">
            Copyright © 2022 Zee Entertainment Enterprises Ltd. All rights
            reserved.
          </h4>
        </div>
        <div>
          <h4 className="fotb">
            About Us | Help Center | Privacy Policy | Terms of Use | Preferences
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Buyplan;
