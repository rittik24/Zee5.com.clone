// import React, { useState } from "react";
// import "./Buyplan.css";
// import { AiOutlineCheck } from "react-icons/ai";
// import { CiPercent } from "react-icons/ci";
// import { Link } from "react-router-dom";

// const Buyplan = () => {

//   return (
//     <div className="headb">
//       <div className="mainb">
//         <h1 className="pln">Choose your premium plan</h1>
//         <div className="mainbob">
//           <div className="boxb">
//             {/* 1st */}
//             <div className="pre-conb">
//               <div>
//                 <h2>Premium content</h2>
//                 <p className="pb">
//                   Movies, Web Series, TV Shows, Live TV, Downloads
//                 </p>
//               </div>
//               <hr />
//               <div>
//                 <h2 className="h2b">Ad-free</h2>
//               </div>
//               <hr />
//               <div>
//                 <h2 className="h2b">Device</h2>
//                 <p className="pb">Mobile, TV and Laptop</p>
//               </div>
//               <div></div>
//               <div></div>
//             </div>
//             {/* second */}
//             <div className="iconb">
//               <div>
//                 <h2>Premium HD</h2>
//               </div>
//               <hr />
//               <div>
//                 <AiOutlineCheck />
//               </div>
//               <hr />
//               <div>
//                 <AiOutlineCheck />
//               </div>
//               <hr />
//               <div>
//                 <AiOutlineCheck />
//               </div>
//               <div></div>
//               <div></div>
//             </div>
//             {/* 3rd */}
//             <div className="iconb2">
//               <div>
//                 <h2>Premium 4k</h2>
//               </div>
//               <hr />
//               <div>
//                 <AiOutlineCheck />
//               </div>
//               <hr />
//               <div>
//                 <AiOutlineCheck />
//               </div>
//               <hr />
//               <div>
//                 <AiOutlineCheck />
//               </div>
//               <div></div>
//               <div></div>
//             </div>
//           </div>
//           <div className="preb">
//             <div className="fpre">
//               <h3>Premium</h3>
//               <h3>$399</h3>

//               <h3>3 Months</h3>
//             </div>
//             <div className="spre">
//               <h3>Premium HD</h3>
//               <h3>$699</h3>
//               <h3>12 Months</h3>
//             </div>
//             <div className="tpre">
//               <h3>Premium 4k</h3>
//               <h3>$1499</h3>
//               <h3>12 Months</h3>
//             </div>
//           </div>
//           {/* apply */}
//           <div className="applyb">
//             <CiPercent />
//             <p>Apply code</p>
//           </div>

//           <p style={{ color: "#a4a0a0dc" }}>
//             HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability{" "}
//           </p>
//           <p style={{ color: "#a4a0a0dc" }}>
//             subject to your internet service and device capabilities.
//           </p>
//           <p style={{ color: "#a4a0a0dc" }}>
//             {" "}
//             Not all content is available in all resolutions. See our Terms of
//             Use for more details
//           </p>
//           <div className="payb">
//             <div>
//               <p>Pay useing UPI</p>
//             </div>
//             <Link to='/subscription/payment'> <button className="btnb">Buy Premium</button></Link>
   

//           </div>
//         </div>

//         <div></div>
//       </div>
//       {/* <hr/> */}
//       <div className="fotterb">
//         <div>
//           <h4 className="fotb">
//             Copyright © 2022 Zee Entertainment Enterprises Ltd. All rights
//             reserved.
//           </h4>
//         </div>
//         <div>
//           <h4 className="fotb">
//             About Us | Help Center | Privacy Policy | Terms of Use | Preferences
//           </h4>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Buyplan;








import React, { useState } from "react";
import "./Buyplan.css";
import { AiOutlineCheck, AiOutlineCloseSquare } from "react-icons/ai";
import { CiPercent } from "react-icons/ci";
import { Link } from "react-router-dom";

const Buyplan = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

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
            <p >Apply code</p>
            <button style={{backgroundColor:"#8230C6",color:"black",padding:"5px 15px",borderRadius:"0px",marginLeft:"340px"}} className='btn-p , btn-modal' onClick={toggleModal}>code</button>
            {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Enter Code</h2>
            <input type="number" name="" id="" placeholder='enter your code here' className='input-pay' style={{color:"black"}}  />
            {/* <hr /> */}

            <p>.</p>
            <button  onClick={toggleModal} style={{backgroundColor:"#8230C6",color:"black",padding:"5px 10px",borderRadius:"0px"}}>Apply</button>
            {/* <AiOutlineCloseSquare className="close-modal" onClick={toggleModal}/> */}
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
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
            <Link to='/subscription/payment'> <button className="btnb">Buy Premium</button></Link>
   

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
