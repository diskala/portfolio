import React from "react";
import "./Home.css";
import Contact from "../Contact/Contact";
import AutoTypeText from "../../AutoExecute/AutoTexte"; // ce  fichier contient la logique de l'Auto execution d'un texte en boucle
import Portfolio from "../Portfolio/Portfolio";
import Competences from "../Competences/Competences";

export default function Home() {
  // function afin de pouvoir ouvrir le fichier mon CV
  const ouvrirPDF = () => {
    window.open("/Media/CV-Nacime 3.pdf", "_blank");
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
        <div class="image_font">
          <div className="fleche" id="flech" onClick={scroll}>
            {/* <i class="fa-solid fa-arrow-down"></i> */}
            <i class="fa-solid fa-angles-down"></i>
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
            <h1 class="nom">SEGHIR OUALI Nacime</h1>
            <img
              className="photo"
              src={process.env.PUBLIC_URL + "/Media/photo_3.jpg"}
              alt=""
            />
          </div>
        </div>

        <div class="presentation" id="articl">
          <h1>HELLO!</h1>
          <hr />
          <p>
            Bienvenue sur mon portfolio en ligne ! Je suis Nacime, Concepteur
            développeur d'applications Junior et c'est ici que je vous parle de
            mon parcours.
          </p>
          <hr />
          <p>
            {" "}
            Puisque je suis passionné par la programmation, j'ai suivi une
            formation en développement informatique, j'ai acquis des competences
            en HTML,CSS,Javascript et PHP,lors de mon réalisation de plusieurs
            projets à titre personnel j'ai élargi mes compétences en utilisant
            des Frameworks et des bibliothèques Javascript ( Symfony 6, ReactJs
            , NodeJs).
          </p>
          <hr />
          <p>
            {" "}
            Actuellement je suis à la recherche d'un poste de developpeur Full
            stack
          </p>
        </div>

        <div class="envloppe">
          {/* <i class="fa-solid fa-envelope"></i> */}
          <span>Mon CV</span>
          <img
            src={process.env.PUBLIC_URL + "/Media/icon-cv3.png"}
            alt=""
            onClick={ouvrirPDF}
          />
        </div>
        <div class="qualite">
          <div class="qualite1">
            <i class="fa-solid fa-magnifying-glass"></i>
            <h4>Résolution de problèmes</h4>
          </div>

          <div class="qualite2">
            <i class="fa-solid fa-hourglass-half"></i>
            <h4>Patience et persévérance</h4>
          </div>
          <div class="qualite3">
            <i class="fa-solid fa-people-group"></i>
            <h4>Travail en collaboration et esprit d'équipe</h4>
          </div>

          <div class="qualite4">
            <i class="fa-solid fa-sitemap"></i>
            <h4> Adaptaion et organisation</h4>
          </div>

          <div class="qualite5">
            <i class="fa-solid fa-book-open"></i>
            <h4> Curiosité et soif d'apprendre</h4>
          </div>
        </div>

        {/* *********************************************************************** */}
        <hr className="page"></hr>
        <div className="comptences_home">
          <Competences />
        </div>

        <hr className="page"></hr>
        <div className="portfolio_home">
          <Portfolio />
        </div>

        <hr className="page"></hr>
        <div className="contact_home">
          <Contact />
        </div>
      </main>
    </>
  );
}
