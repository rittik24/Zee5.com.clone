import React, { useEffect, useState } from 'react'

import { Box, Text, Flex } from "@chakra-ui/react"
import "./navbar.css"
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi"
import "./navbar.css"
import { Link } from 'react-router-dom'





function Navbar() {
  const [barsIcon, setBarsIcon] = useState("block");
  const [navs, setNavs] = useState("none");

  function bars() {
    setBarsIcon("none");
    setNavs("flex");

  }
  function close() {
    setNavs("none");
    setBarsIcon("block");
  }

  return (
    <div className="navv">
      <div className='navv-linkss' id="navv-links">
        <div className='imgg'>
          <img src="https://scontent.fccu31-1.fna.fbcdn.net/v/t39.30808-6/319993825_849692672750825_2848840103300883038_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=Y5_7UGjMX9YAX_M-29r&_nc_ht=scontent.fccu31-1.fna&oh=00_AfC_kaxOBf8ldOkfYRVxDKnM7kirUAFSgeGXhTb-noANvw&oe=639DFE06" alt="ZeeApp Logo" className="nav-logo" />
        </div>
        <Link to='/'><h4>Home</h4></Link>
        <Link to='/zee5/TVshows'><h4>TV Shows</h4></Link>
        <Link to='/zee5/Movies'><h4>Movies</h4></Link>
        <Link to='/zee5/Web-series'><h4>Web Series</h4></Link>
        <Link to='/zee5/News'><h4>News</h4></Link>
      </div>
      <div className='navv-linkss' id="navv-link">
        <div className='input-div'>
          <i class="fas fa-search"></i>
          <input type="text" placeholder='Search for Movies ,Shows etc..' />
        </div>
        <i class="fas fa-download"></i>

        <Box className="NavbarSecondPartV-Lan" ><Flex><Text>A</Text><Text className="NavbarSecondPartV-LanHindi">अ</Text></Flex> </Box>
         <button className='admin-button'>ADMIN</button>
        <button className='login-button'>LOGIN</button>
        <button className='buy-button'>BUY PLAN</button>
        <Flex alignItems="center" className="NavbarSecondPartV-Menu" ><GiHamburgerMenu size={"20"} /></Flex>
        
      </div>


     
    </div>
  )
}

export default Navbar;