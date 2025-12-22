import { useState } from 'react';
import "./Components.css";
import { Link } from "react-router-dom";
 



export default function Components() {
const [isMenuOpen, setIsMenuOpen] = useState(false);
 

  // function pour le menu burgger
  const handleToggleMenu = () => {
    // Inverse l'état du menu (ouvrir/fermer)
    setIsMenuOpen(!isMenuOpen);
  };

  const telechargerCV = () => {
    const pdfUrl = `${process.env.PUBLIC_URL}/Media/CV-actualisé-12-2025.pdf`;
    // const pdfUrl = 'public/Media/CV-reconversion.pdf';
    window.open(pdfUrl, "_blank");
  }

  // const linkedinUrl = 'https://www.linkedin.com/in/seghir-ouali-nacime/';
  //  function pour ouvrir le lien Linkedin
  const lienLindekin = () => {
    window.open("https://www.linkedin.com/in/seghir-ouali-nacime/", "_blank");
  };
  // function pour ouvrir le lien GitHub
  const lienGitHub = () => {
    window.open("https://github.com/diskala?tab=repositories", "_blank");
  };
  const handleEmailClick = () => {
    const email = "destinataire@example.com";
    const subject = "Sujet du courriel";
    const body = "Corps du courriel";

    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Ouvre la fenêtre de messagerie par défaut avec les informations préremplies
    window.location.href = mailtoUrl;
  };

  // function scroll section
  const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false); // ferme le menu burger
  }
};

  return (
    <>
      <header>
        {/* <i className="fa-solid fa-bars" onClick={handleToggleMenu} style={{ cursor: 'pointer' }}></i> */}

        <div class="mail_tel_reseau">
          <span className="phone">
            {" "}
            <i class="fa-solid fa-phone"></i> (+33) 6.52.78.25.64
          </span>
          <span className="mails" onClick={handleEmailClick}>
            {" "}
            <i class="fa-solid fa-envelope" ></i>{" "}
            seghirouali.nacime@gmail.com
          </span>
          <div className="reseaux">
            {/* <a href={linkedinUrl} target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin" ></i></a> */}
            <i class="fa-brands fa-linkedin" onClick={lienLindekin}></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-github" onClick={lienGitHub}></i>
          </div>
        </div>
        <div className="menuBergeer-nav">
          <i className="fa-solid fa-bars" onClick={handleToggleMenu} style={{ cursor: 'pointer' }}></i>

          <div className={`nav ${isMenuOpen ? "open" : ""}`} >
            <div className="item_nav">
              <Link to="/" class="menu">
                <i class="fa-solid fa-house"></i>
              </Link>{" "}
            </div>
            <div className="item_nav" onClick={()=>scrollToSection("competencesId")}>
              {" "}
              <span class="menu">
                Compétences
              </span> 
               {" "}
            </div>
            <div className="item_nav" onClick={()=>scrollToSection("portfolioId")}>
              <span class="menu">
                Portfolio
              </span>{" "}
            </div>
            <div className="item_nav" onClick={()=>scrollToSection("contactId")}>
              <span class="menu">
                Contact
              </span>
            </div>
            <div className="item_nav" onClick={ telechargerCV }>
              <button class="menu_cv">
                Télécharger CV
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
