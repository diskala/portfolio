import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: "fa-linkedin",
      url: "https://www.linkedin.com/in/seghir-ouali-nacime/",
      color: "#0077B5"
    },
    {
      name: "GitHub",
      icon: "fa-github",
      url: "https://github.com/diskala?tab=repositories",
      color: "#333333"
    },
    {
      name: "Email",
      icon: "fa-envelope",
      url: "mailto:discarsluxe@gmail.com",
      color: "#EA4335"
    },
    {
      name: "Twitter",
      icon: "fa-twitter",
      url: "https://twitter.com",
      color: "#1DA1F2"
    }
  ];

  const footerLinks = [
    {
      title: "Navigation",
      links: [
        { name: "Accueil", path: "/" },
        { name: "Compétences", path: "/competences" },
        { name: "Portfolio", path: "/portfolio" },
        { name: "Contact", path: "/contact" }
      ]
    },
    {
      title: "Services",
      links: [
        { name: "Développement Web" },
        { name: "Applications React" },
        { name: "Sites Responsive" },
        { name: "Maintenance" }
      ]
    },
    {
      title: "Technologies",
      links: [
        { name: "React.js" },
        { name: "Node.js" },
        { name: "Symfony" },
        { name: "JavaScript" }
      ]
    }
  ];

  const handleEmailClick = () => {
    window.open("mailto:discarsluxe@gmail.com", "_blank");
  };

  const handlePhoneClick = () => {
    window.open("tel:+33652782564", "_blank");
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Section principale */}
        <div className="footer-main">
          {/* À propos */}
          <div className="footer-about">
            <div className="footer-logo">
              <span className="logo-text">NSO</span>
              <span className="logo-subtitle">Développeur</span>
            </div>
            <p className="footer-description">
              Développeur Full Stack passionné, je crée des solutions web 
              modernes et performantes. Spécialisé en React, Node.js et Symfony, 
              je transforme vos idées en réalité digitale.
            </p>
            
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  title={social.name}
                  style={{ '--social-color': social.color }}
                >
                  <i className={`fab ${social.icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Liens rapides */}
          <div className="footer-links">
            {footerLinks.map((section, index) => (
              <div key={index} className="links-section">
                <h4 className="links-title">{section.title}</h4>
                <ul className="links-list">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      {link.path ? (
                        <Link to={link.path} className="footer-link">
                          {link.name}
                        </Link>
                      ) : (
                        <span className="footer-link-text">{link.name}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div className="footer-contact">
            <h4 className="contact-title">Contact</h4>
            <div className="contact-info">
              <div 
                className="contact-item" 
                onClick={handlePhoneClick}
                style={{ cursor: 'pointer' }}
              >
                <div className="contact-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="contact-details">
                  <span className="contact-label">Téléphone</span>
                  <span className="contact-value">(+33) 6.52.78.25.64</span>
                </div>
              </div>
              
              <div 
                className="contact-item" 
                onClick={handleEmailClick}
                style={{ cursor: 'pointer' }}
              >
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-details">
                  <span className="contact-label">Email</span>
                  <span className="contact-value">seghirouali.nacime@gmail.com</span>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="contact-details">
                  <span className="contact-label">Localisation</span>
                  <span className="contact-value">Franconville, Île-de-France</span>
                </div>
              </div>
            </div>
            
            <div className="newsletter">
              <p className="newsletter-text">Restez informé de mes projets</p>
              <a 
                href="https://linkedin.com/in/seghir-ouali-nacime" 
                target="_blank" 
                rel="noopener noreferrer"
                className="newsletter-btn"
              >
                <i className="fab fa-linkedin"></i>
                Suivre sur LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Séparateur */}
        <div className="footer-divider"></div>

        {/* Bas de footer */}
        <div className="footer-bottom">
          <div className="copyright">
            <p>&copy; {currentYear} Seghir Ouali Nacime. Tous droits réservés.</p>
            <p className="made-with">
              Développé avec <i className="fas fa-heart"></i> et 
              <i className="fab fa-react"></i> React
            </p>
          </div>
          
          <div className="legal-links">
            <Link to="/mentions-legales" className="legal-link">
              Mentions légales
            </Link>
            <Link to="/politique-confidentialite" className="legal-link">
              Politique de confidentialité
            </Link>
            <Link to="/plan-site" className="legal-link">
              Plan du site
            </Link>
          </div>
        </div>

        {/* Bouton retour en haut */}
        <button 
          className="back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <i className="fas fa-chevron-up"></i>
        </button>
      </div>
    </footer>
  );
}