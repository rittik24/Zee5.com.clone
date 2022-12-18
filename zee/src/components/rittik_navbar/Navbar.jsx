import React, { useContext, useState } from 'react'
import { authContext } from '../../routs/AuthContext';
import {
  Box, Text, Flex, Button, Drawer, DrawerOverlay, DrawerContent,
  DrawerHeader, DrawerBody, useDisclosure
} from "@chakra-ui/react"
import "./navbar.css";
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi"


const admin= [
  {
    "id": 1,
    "type": "admin",
    "_firstName": "Aniket",
    "_lastName": "Pandey",
    "email": "aniket.pandey@zee.com",
    "token": "admin0001"
  },
  {
    "id": 2,
    "type": "admin",
    "_firstName": "Anirudha",
    "_lastName": "Mandal",
    "email": "anirudha.mandal@zee.com",
    "token": "admin0002"
  },
  {
    "id": 3,
    "type": "admin",
    "_firstName": "Moumita",
    "_lastName": "Das",
    "email": "moumita.das@zee.com",
    "token": "admin0003"
  },
  {
    "id": 4,
    "type": "admin",
    "_firstName": "Ritik",
    "_lastName": "Haldar",
    "email": "ritik.haldar@zee.com",
    "token": "admin0004"
  },
  {
    "id": 5,
    "type": "admin",
    "_firstName": "Sajjan",
    "_lastName": "Kumar",
    "email": "sajjan.kumar@zee.com",
    "token": "admin0005"
  }
]


function Navbar() {
  const [barsIcon, setBarsIcon] = useState("block");
  const [navs, setNavs] = useState("none");
  const { isOpen, onOpen, onClose } = useDisclosure()
  const {state, handlelogout} = useContext(authContext);

  // console.log(change, token)
  
  function bars() {
    setBarsIcon("none");
    setNavs("flex");

  }
  function close() {
    setNavs("none");
    setBarsIcon("block");
  }
  
  // change.includes("zee");

  return (
    <div className="navv">

      <div className='imgg'>
        <Link to='./'> <img src="https://scontent.fccu31-1.fna.fbcdn.net/v/t39.30808-6/319993825_849692672750825_2848840103300883038_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=Y5_7UGjMX9YAX_M-29r&_nc_ht=scontent.fccu31-1.fna&oh=00_AfC_kaxOBf8ldOkfYRVxDKnM7kirUAFSgeGXhTb-noANvw&oe=639DFE06" alt="ZeeApp Logo" className="nav-logo" /></Link>
      </div>
      <div className='navv-linkss' id="navv-links">
        <Link to='/'><h4>Home</h4></Link>
        <Link to='/tvshows'><h4>TV Shows</h4></Link>
        <Link to='/moviespage'><h4>Movies</h4></Link>
        <Link to='/webseriespage'><h4>Web Series</h4></Link>
        <Link to='/newspage'><h4>News</h4></Link>
      </div>
      <div className='navv-linkss' id="navv-link">
        <div className='input-div'>
          <i className="fas fa-search"></i>
          <input type="text" placeholder='Search for Movies ,Shows etc..' />
        </div>
        <i className="fas fa-download"></i>

        <Box className="NavbarSecondPartV-Lan" ><Flex><Text>A</Text><Text className="NavbarSecondPartV-LanHindi">अ</Text></Flex> </Box>
        {state.isAuth == false ? null: state.token.includes("zee") ? <Link to='/admindashboard'> <button className='admin-button'>ADMIN</button></Link> :
        <Link to='/userdashboard'> <button className='admin-button'>USER</button></Link> } 
      
        
          {state.isAuth == true ? <Link to='/login'><button className='login-button' onClick={handlelogout}>LOGOUT</button></Link> : <Link to='/login'><button className='login-button'>LOGIN </button></Link> }
        
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
  )
}

export default Navbar;