import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    
    <footer id="footer">
    <div class="container">
        

        
        <hr style={{height:"0.5px",borderWidth:"0",color:"gray",backgroundColor:"rgb(32, 28, 28)",marginTop: "15px",}}/>
        
        <br/>
        <div class="logDiv">
            
            <div class="logo">
            
            <h4 className='downloadApps'>Download Apps</h4>            
                <a href="https://play.google.com/store/apps/details?id=com.graymatrix.did"><img src="https://www.zee5.com/images/play_store.png?ver=2.50.94"/></a>
                <a href="https://apps.apple.com/in/app/zee5-shows-live-tv-movies/id743691886"><img src="https://www.zee5.com/images/app_store.png?ver=2.50.94"/></a>
            </div>
            <div class="leftlogo">
                <h4>Connect with us</h4>
                
                <a href="https://www.facebook.com/ZEE5/" class="fb"><i class="fa-brands fa-facebook-square"></i></a>
                <a href="https://www.instagram.com/zee5/" class="insta"><i class="fa-brands fa-instagram"></i></a> 
                <a href="https://twitter.com/zee5india" class="twitter"><i class="fa-brands fa-twitter"></i></a> 
                <a href="https://www.youtube.com/channel/UCXOgAl4w-FQero1ERbGHpXQ" class="youtube"><i class="fa-brands fa-youtube"></i></a> 
                
            </div>
        </div>
       
       <div class="about">
        {/* <!-- about --> */}
      
        <p><a href="">About Us</a></p>

        <p>|</p>
        {/* <!-- help center --> */}
        <p><a href="">Help Center</a></p>

        <p>|</p>
        {/* <!-- Privacy policy --> */}
        <p><a href="">Buy Plan</a></p>

        

        </div>
        <div class="row">
            <div class="footer-col">
                <h3>Popular TV Shows</h3>
                
                 
                    <div><a href="https://www.zee5.com/movies/details/kya-meri-sonam-gupta-bewafa-hai/0-0-1z51625">Kumkum Bhagya</a></div>
                    <div><a href="">Kundali Bhagya</a></div>
                    <div><a href="">Bhagya Lakshmi</a></div>
                    <div><a href="">Tujhse Hai Raabta</a></div>
                    <div><a href="">Kyun Rishton Mein Katti Batti</a></div>
                   
                    
                
            </div>
            <div class="footer-col">
             <h3>Premium Movies</h3>
             
                <div><a href="">Kya Meri Sonam Gupta Bewafa</a></div>
                <div><a href="">Helmet</a></div>
                <div><a href="">200 Halla Ho</a></div>
                <div><a href="">14 Phere</a></div>
                <div><a href="">Dial 100</a></div>
             
         </div>
   
         <div class="footer-col">
             <h3>Popular LIVE TV Channels</h3>
             
                <div><a href="">Aaj Tak</a></div>
                   <div><a href="">Zee News</a></div>
                   <div><a href="">Zee Tv HD</a></div>
                   <div><a href="">&TV HD</a></div>
                   <div><a href="">Zee Marathi HD</a></div>
             
         </div>
         <div class="footer-col">
             <h3>Popular Web Series</h3>
             
                   <div><a href="">Sunflower</a></div>
                   <div><a href="">Jeet Ki Zid</a></div>
                   <div><a href="">Biccho Ka Khel</a></div>
                   <div><a href="">State of Seige:26/11</a></div>
                   <div><a href="">Naxalbari</a></div>
             
         </div>
         <div class="footer-col">
             <h3>Bollywood Top Celebrities</h3>
             
                <div><a href="">Sunny Leone</a></div>
                <div><a href="">Disha Patani</a></div>
                <div><a href="">Deepika Padukone</a></div>
                <div><a href="">Salman Khan</a></div>
                <div><a href="">Nora Fatehi</a></div>
                
         </div>
     </div>
    <div class="end">Best viewed on Google Chrome 80+, Microsoft Edge 81+, Mozilla Firefox 75+, Safari 5.1.5+
     Copyright © 2022 Zee Entertainment Enterprises Ltd. All rights reserved.</div>
 </div>
 </footer>
 
  )
}

export default Footer
