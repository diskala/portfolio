import "./Footer.css";
import { Link } from "react-router-dom";
export default function Footer() {
  const linkedinUrl = "https://www.linkedin.com/in/seghir-ouali-nacime/";
  return (
    <div class="container_footer">
      <div className="mot_footer">
        <h5>DÉVELOPPEUR INFORMATIQUE</h5>
        <p className="phrase_footer">
          Développeur Web front & back-end & Webdesigner freelance, je suis à
          votre disposition pour répondre à tout type de projets de création de
          sites internet, de développement spécifique ou d'applications web.
        </p>
      </div>

      <div className="reseaux_sociaux">
        {/* <a href={linkedinUrl} target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin" ></i></a> */}
        <Link to={linkedinUrl}>
          <i class="fa-brands fa-linkedin"></i>
        </Link>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-facebook"></i>
      </div>

      <div className="informations">
        <h4>Seghir Ouali Nacime</h4>
        <p className="mon_adresse"> 55 Rue de Paris 95130 Franconville</p>
        <p className="phone">
          {" "}
          <i class="fa-solid fa-phone"></i> (+33) 6.52.78.25.64
        </p>
        <p className="mails">
          {" "}
          <i class="fa-solid fa-envelope"></i> seghir.nacime@protonmail.com
        </p>
      </div>
    </div>
  );
}
