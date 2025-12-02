// import { Modal } from 'react-native';
import { useState, useEffect } from 'react';
import projetsData from "../../Data/Projets";
import "./Portfolio.css";
import ReactModal from 'react-modal';

// Configuration de Modal pour l'accessibilité
ReactModal.setAppElement('#root');

const Portfolio = () => {
  const [projets, setProjets] = useState([]);
  const [projetActif, setProjetActif] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    setProjets(projetsData);
  }, []);

  // Filtrer les projets par catégorie
  const filteredProjets = filter === 'all' 
    ? projets 
    : projets.filter(projet => projet.category === filter);

  // Ouvrir le modal avec le projet sélectionné
  const openModal = (projetId) => {
    const projetSelectionne = projetsData.find(projet => projet.id === projetId);
    setProjetActif(projetSelectionne);
    setIsModalOpen(true);
  };

  // Fermer le modal
  const closeModal = () => {
    setIsModalOpen(false);
    setProjetActif(null);
  };

  // Extraire les catégories uniques
  const categories = ['all', ...new Set(projetsData.map(projet => projet.category || 'divers'))];

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'web': return 'fa-globe';
      case 'mobile': return 'fa-mobile-alt';
      case 'design': return 'fa-paint-brush';
      case 'fullstack': return 'fa-code';
      default: return 'fa-laptop-code';
    }
  };

  return (
    <section className="portfolio-section" id="portfolio">
      <div className="container">
        {/* En-tête de section */}
        <div className="section-header">
          <h2 className="section-title">Mes Projets</h2>
          <p className="section-subtitle">Découvrez mes réalisations et compétences à travers mes projets</p>
          <div className="section-divider"></div>
        </div>

        {/* Filtres */}
        {/* <div className="portfolio-filters">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${filter === category ? 'active' : ''}`}
              onClick={() => setFilter(category)}
            >
              <i className={`fas ${getCategoryIcon(category)}`}></i>
              {category === 'all' ? 'Tous' : category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div> */}

        {/* Grille des projets */}
        <div className="portfolio-grid">
          {filteredProjets.map((projet) => (
            <div className="project-card" key={projet.id}>
              <div className="project-image">
                <img
                  src={process.env.PUBLIC_URL + projet.image_1}
                  alt={projet.name}
                  loading="lazy"
                />
                <div className="project-overlay">
                  <button 
                    className="view-project-btn"
                    onClick={() => openModal(projet.id)}
                  >
                    <i className="fas fa-eye"></i>
                    Voir le projet
                  </button>
                </div>
                {projet.category && (
                  <span className={`project-badge ${projet.category}`}>
                    <i className={`fas ${getCategoryIcon(projet.category)}`}></i>
                    {projet.category}
                  </span>
                )}
              </div>
              
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{projet.name}</h3>
                  <span className="project-date">{projet.date}</span>
                </div>
                
                <p className="project-excerpt">
                  {projet.description.substring(0, 120)}...
                </p>
                
                <div className="project-tech">
                  {projet.technologie && (
                    <span className="tech-tag">{projet.technologie}</span>
                  )}
                  {projet.langage && projet.langage.slice(0, 3).map((lang, index) => (
                    <span key={index} className="tech-tag">{lang.name}</span>
                  ))}
                </div>
                
                <div className="project-actions">
                  <button 
                    className="detail-btn"
                    onClick={() => openModal(projet.id)}
                  >
                    <i className="fas fa-info-circle"></i>
                    Détails
                  </button>
                  {projet.lien && (
                    <a 
                      href={projet.lien} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="github-btn"
                    >
                      <i className="fab fa-github"></i>
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal de projet détaillé */}
        <ReactModal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Détails du projet"
          className="project-modal"
          overlayClassName="modal-overlay"
          closeTimeoutMS={300}
        >
          {projetActif && (
            <div className="modal-content">
              <button className="modal-close" onClick={closeModal}>
                <i className="fas fa-times"></i>
              </button>
              
              <div className="modal-header">
                <div className="modal-title-section">
                  <h2 className="modal-title">{projetActif.name}</h2>
                  <span className="modal-category">
                    <i className={`fas ${getCategoryIcon(projetActif.category)}`}></i>
                    {projetActif.category}
                  </span>
                </div>
                {projetActif.date && (
                  <span className="modal-date">
                    <i className="fas fa-calendar-alt"></i>
                    {projetActif.date}
                  </span>
                )}
              </div>
              
              <div className="modal-gallery">
                <div className="main-image">
                  <img
                    src={process.env.PUBLIC_URL + projetActif.image_1}
                    alt={projetActif.name}
                  />
                </div>
                {projetActif.image_2 && (
                  <div className="secondary-images">
                    <img src={process.env.PUBLIC_URL + projetActif.image_2} alt="Capture d'écran 2" />
                  </div>
                )}
              </div>
              
              <div className="modal-body">
                <div className="modal-description">
                  <h3>
                    <i className="fas fa-align-left"></i>
                    Description du projet
                  </h3>
                  <p>{projetActif.description}</p>
                  
                  {projetActif.features && (
                    <div className="project-features">
                      <h4>
                        <i className="fas fa-star"></i>
                        Fonctionnalités principales
                      </h4>
                      <ul>
                        {projetActif.features.map((feature, index) => (
                          <li key={index}>
                            <i className="fas fa-check-circle"></i>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                
                <div className="modal-sidebar">
                  <div className="tech-stack">
                    <h3>
                      <i className="fas fa-layer-group"></i>
                      Stack technique
                    </h3>
                    
                    {projetActif.technologie && (
                      <div className="tech-section">
                        <h4>Technologies principales</h4>
                        <div className="tech-tags">
                          <span className="tech-tag primary">{projetActif.technologie}</span>
                        </div>
                      </div>
                    )}
                    
                    {projetActif.langage && (
                      <div className="tech-section">
                        <h4>Langages utilisés</h4>
                        <div className="tech-tags">
                          {projetActif.langage.map((lang, index) => (
                            <span key={index} className="tech-tag">{lang.name}</span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {projetActif.tools && (
                      <div className="tech-section">
                        <h4>Outils & Services</h4>
                        <div className="tech-tags">
                          {projetActif.tools.map((tool, index) => (
                            <span key={index} className="tech-tag tool">{tool}</span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="project-links">
                    <h3>
                      <i className="fas fa-external-link-alt"></i>
                      Liens du projet
                    </h3>
                    <div className="links-grid">
                      {projetActif.lien && (
                        <a 
                          href={projetActif.lien} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="link-btn github"
                        >
                          <i className="fab fa-github"></i>
                          Code source
                        </a>
                      )}
                      {projetActif.demo && (
                        <a 
                          href={projetActif.demo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="link-btn demo"
                        >
                          <i className="fas fa-play-circle"></i>
                          Voir la démo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="modal-footer">
                <button className="close-modal-btn" onClick={closeModal}>
                  <i className="fas fa-times"></i>
                  Fermer
                </button>
              </div>
            </div>
          )}
        </ReactModal>
      </div>
    </section>
  );
};

export default Portfolio;