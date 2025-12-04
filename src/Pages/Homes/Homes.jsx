import "./Homes.css";
import Contact from "../Contact/Contact";
import AutoTypeText from "../../AutoExecute/AutoTexte"; // ce  fichier contient la logique de l'Auto execution d'un texte en boucle
import Portfolio from "../Portfolio/Portfolio";
import Competences from "../Competences/Competences";
import { useRef } from "react";

export default function Homes() {
  // function afin de pouvoir ouvrir le fichier mon CV
  const pdfRef = useRef(null);
  const scrollDivine = () => {
    if (pdfRef.current) {
      pdfRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  const ouvrirPDF = () => {
    const pdfUrl = `${process.env.PUBLIC_URL}/Media/CV-reconversion-Nacime.pdf`;
    // const pdfUrl = 'public/Media/CV-reconversion.pdf';
    window.open(pdfUrl, "_blank");
  };

  

  //  function pour pouvoir scroller directement sur l'article choisi
  const scroll = () => {
    const defile = document.getElementById("articl");
    if (defile) {
      // Faire défiler l'élément dans la zone d'affichage de manière fluide
      defile.scrollIntoView({ behavior: "smooth" });
    }
  };
  // un variable qui contient une phrase autoText
  const sampleText = " CONCEPTEUR DÉVELOPPEUR D'APPLICATIONS ";

  return (
    <>
      <main>
        <div className="image_font">
          <div className="fleche" id="flech" onClick={scroll}>
            {/* <i class="fa-solid fa-arrow-down"></i> */}
            <i className="fa-solid fa-angles-down"></i>
          </div>

          <img
            className="media"
            src={process.env.PUBLIC_URL + "/Media/picNave4.jpg"}
            alt=""
          />
          <div className="autoExecute">
            <AutoTypeText text={sampleText} />
          </div>

          <div className="nom_photo">
            <h1 className="nom">SEGHIR OUALI Nacime</h1>
            <img
              className="photo"
              src={process.env.PUBLIC_URL + "/Media/photo_3.jpg"}
              alt=""
              
            />
          </div>
        </div>

        <div className="presentation" id="articl">
          <h1>HELLO!</h1>
          <hr />
          <p>
            Bienvenue sur mon portfolio en ligne ! Je suis Nacime, Concepteur
            développeur d'applications  Passionné par la création de solutions digitales innovantes,
             je mets mes compétences au service de projets ambitieux.
          </p>
          <hr />
          <p>
            {" "}
            Formé au développement informatique, j'ai acquis une expertise solide en 
             JavaScript, TypeScript, PHP, HTML, CSS,. À travers mes projets personnels, 
             j'ai approfondi mes connaissances avec les frameworks modernes comme Symfony 6,
            ReactJS et NodeJS, NextJs.
          </p>
          <hr />
          <p>
            {" "}
            Je recherche activement un poste de Développeur Full Stackoù je pourrai contribuer
            à des projets stimulants et continuer à progresser.
          </p>
        </div>

        <div className="envloppe">
          {/* <i class="fa-solid fa-envelope"></i> */}
          <span  onClick={ouvrirPDF} className="telecharge-cv"> <i className="fas fa-download"></i> Télécharger CV</span>
          <img
            src={process.env.PUBLIC_URL + "/Media/icon-cv3.png"}
            alt=""
            onClick={ouvrirPDF}
          />
        </div>
        <div class="qualite">
          <h1>Mes Atouts & Qualités</h1>
          <div className="qualites_container">
          <div className="qualite-item">
            <i className="fa-solid fa-magnifying-glass"></i>
            <h4>Résolution de problèmes</h4>
          </div>

           <div className="qualite-item">
            <i className="fa-solid fa-hourglass-half"></i>
            <h4>Patience et persévérance</h4>
          </div>
           <div className="qualite-item">
            <i className="fa-solid fa-people-group"></i>
            <h4>Travail en collaboration et esprit d'équipe</h4>
          </div>

           <div className="qualite-item">
            <i className="fa-solid fa-sitemap"></i>
            <h4> Adaptaion et organisation</h4>
          </div>

           <div className="qualite-item">
            <i className="fa-solid fa-book-open"></i>
            <h4> Curiosité et soif d'apprendre</h4>
          </div>
          </div>
        </div>

        {/* /*************************************************************** */ }
        {/* Bouton retour en haut */}
        <button 
          className="back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{position:"fixed"}}
        >
          <i className="fas fa-chevron-up"></i>
        </button>

        {/* *********************************************************************** */}
        <hr className="page"></hr>
        <div className="comptences_home" id="competencesId"  >
          <Competences />
        </div>

        <hr className="page"></hr>
        <div className="portfolio_home" id="portfolioId">
          <Portfolio />
        </div>

        <hr className="page"></hr>
        <div className="contact_home" id ="contactId"  >
          <Contact />
        </div>
      </main>
    </>
  );
}
