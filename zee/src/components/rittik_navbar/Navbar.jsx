import React, { useContext, useEffect, useState } from 'react'
import { authContext } from '../../routs/AuthContext';
import {
  Box, Text, Flex, Button, Drawer, DrawerOverlay, DrawerContent, DrawerBody, useDisclosure
} from "@chakra-ui/react"
import "./navbar.css";
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import zeelogo from "../../images/ZEEAPP.png"
import axios from 'axios';


function Navbar() {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const { state, handlelogout } = useContext(authContext);
  const [inputval, setInputval] = useState("");
  const [change, setChange] = useState([]);
  const [dis, setDis] = useState(false);
  // console.log(change, token)
  // console.log(change)
  const handleChange = (e) => {
    setInputval(e.target.value)
    setDis(false)
  }

  const fetchdata1 = () => {
    axios.get('https://mockdata.onrender.com/SearchData')
      .then((res) => setChange(res.data));
  }

  useEffect(() => {
    fetchdata1()
  }, []);

  const handleNone = () => {
    setDis(true);
    setInputval("");
  }


  return (
    <>
      <div className="navv">

        <div className='imgg'>
          <Link to='./'> <img src={zeelogo} alt="ZeeApp Logo" className="nav-logo" /></Link>
        </div>
        <div className='navv-links' id="navv-links">
          <Link to='/'><h4>Home</h4></Link>
          <Link to='/tvshows'><h4>TV Shows</h4></Link>
          <Link to='/moviespage'><h4>Movies</h4></Link>
          <Link to='/webseriespage'><h4>Web Series</h4></Link>
          <Link to='/newspage'><h4>News</h4></Link>
        </div>

        <div className='input-div'>
          {/* <i className="fas fa-search"></i> */}
          <input type="text" placeholder='Search for Movies ,Shows etc..' onChange={(e) => handleChange(e)} value={inputval} />

        </div>

        <div className='navv-linkss' id="navv-link">

          {/* <i className="fas fa-download"></i> */}

          <Box className="NavbarSecondPartV-Lan" ><Flex><Text>A</Text><Text className="NavbarSecondPartV-LanHindi">अ</Text></Flex> </Box>
          {state.isAuth === false ? null : state.token.includes("zee") ? <Link to='/admindashboard'> <button className='admin-button'>ADMIN</button></Link> :
            <Link to='/userdashboard'> <button className='admin-button'>USER</button></Link>}


          {state.isAuth === true ? <Link to='/login'><button className='login-button' onClick={handlelogout}>LOGOUT</button></Link> : <Link to='/login'><button className='login-button'>LOGIN </button></Link>}

          <Link to='/subscription'><button className='buy-button'>BUY PLAN</button></Link>
        </div>

        <div className='hum'>
          <Flex alignItems="center" className="hum-Menu" >
            <Button colorScheme='blue' onClick={onOpen}>
              <GiHamburgerMenu />
            </Button>
            <Drawer placement={"right"} onClose={onClose} isOpen={isOpen} >
              <DrawerOverlay />
              <DrawerContent >
                {/* <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader> */}
                <DrawerBody bgColor={"rgb(15,6,23)"} color={"white"} display={"grid"} gap={"10px"} className='hum-link'>
                  <Link to="./"> <p>HOME</p></Link>
                  <Link to="./tvshows"><p>TV Shows</p></Link>
                  <Link to="./moviespage"> <p>Movies</p></Link>
                  <Link to="./webseriespage"> <p>Web Series</p></Link>
                  <Link to="./newspage"> <p>News</p></Link>
                  <Link to="./subscription"><p>Plan</p></Link>
                  <Link to="./About"><p>About Us</p></Link>
                  <p>Settings</p>
                  <p>Help Centre</p>
                  <p>Privecy Policy</p>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </Flex>
        </div>
      </div>
      {inputval && <div className='search-result' style={{ display: dis === true ? 'none' : '' }} >
        {change && change.filter(el => el.title.toLowerCase().includes(inputval.toLowerCase())).map(ele => <Link to={`/Search/${ele.id}`}><p onClick={handleNone} style={{ padding: "10px" }}>{ele.title}</p></Link>)}
      </div>}
    </>
  )
}

export default Navbar;