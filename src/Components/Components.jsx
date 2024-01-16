import React from "react"
import { useState } from "react"
import './Components.css'
import { Link } from "react-router-dom"
export default function Components(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // function pour le menu burgger
    const handleToggleMenu = () => {
        // Inverse l'état du menu (ouvrir/fermer)
        setIsMenuOpen(!isMenuOpen);
      };
      
      // const linkedinUrl = 'https://www.linkedin.com/in/seghir-ouali-nacime/';
      
      const lienLindekin =()=>{
        window.open("https://www.linkedin.com/in/seghir-ouali-nacime/" , "_blank")
      }

    return(

      <>
     <header>
        <i  className="fa-solid fa-bars"  onClick={handleToggleMenu}  ></i>

        <div class="mail_tel_reseau">
        <span className="phone"> <i class="fa-solid fa-phone"></i> (+33) 6.52.78.25.64</span> 
        <span className="mails"> <i class="fa-solid fa-envelope"></i>  seghir.nacime@protonmail.com</span>
        <div className="reseaux">
          {/* <a href={linkedinUrl} target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin" ></i></a> */}
          <i class="fa-brands fa-linkedin" onClick={lienLindekin}></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-facebook"></i>
        </div>
        </div>
        
        <div className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <div className="item_nav"><Link to="/" class="menu"><i class="fa-solid fa-house"></i></Link> </div> 
          <div className="item_nav"> <Link to="/competences" class="menu">Compétences</Link> </div>
          <div className="item_nav"><Link to="/portfolio" class="menu">Portfolio</Link> </div> 
          <div className="item_nav"><Link to="/contact" class="menu">Contact</Link></div>  
        </div>
     </header>
    
     </>


    )
    
}