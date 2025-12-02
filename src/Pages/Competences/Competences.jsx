import { useState, useEffect, useRef } from 'react';
import competencesData from "../../Data/Languages";
import "./Competences.css";

const Competences = () => {
  const [listCompetences, setListCompetences] = useState([]);
  const [animatedItems, setAnimatedItems] = useState({});
  const sectionRef = useRef(null);

  useEffect(() => {
    if (competencesData && competencesData.length > 0) {
      setListCompetences(competencesData[0]);
    }
  }, []);

  // Animation au scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimatedItems(prev => ({ ...prev, visible: true }));
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Fonction pour déterminer le niveau textuel
  const getNiveauText = (niveau) => {
    if (niveau >= 80) return { text: "Avancé", color: "expert" };
    if (niveau >= 60) return { text: "Intermédiaire", color: "advanced" };
    if (niveau >= 40) return { text: "Connaissances solides", color: "intermediate" };
    return { text: "Notions", color: "beginner" };
  };

  const CompetenceCategory = ({ title, items, category, icon }) => (
    <div className="competence-category">
      <div className="category-header">
        <div className="category-icon">
          <i className={`fas fa-${icon}`}></i>
        </div>
        <h3>{title}</h3>
        <div className="category-divider"></div>
      </div>
      <div className="competence-list">
        {items && items.map((item) => {
          const niveauInfo = getNiveauText(item.niveau);
          return (
            <div className="competence-item" key={item.id}>
              <div className="competence-info">
                <div className="competence-icon">
                  <img
                    src={process.env.PUBLIC_URL + item.image}
                    alt={item.name}
                    loading="lazy"
                  />
                  <div className="competence-details">
                    <span className="competence-name">{item.name}</span>
                    <span className={`competence-level ${niveauInfo.color}`}>
                      {niveauInfo.text}
                    </span>
                  </div>
                </div>
              </div>
              <div className="skill-indicator">
                <div className="skill-dots">
                  {[1, 2, 3, 4, 5].map((dot) => (
                    <div
                      key={dot}
                      className={`skill-dot ${dot <= Math.ceil(item.niveau / 20) ? 'active' : ''}`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  const ListCategory = ({ title, items, icon }) => (
    <div className="list-category">
      <div className="list-header">
        <div className="list-icon">
          <i className={`fas fa-${icon}`}></i>
        </div>
        <h3>{title}</h3>
      </div>
      <div className="items-grid">
        {items && items.map((item, index) => (
          <div className="item-card" key={index}>
            <div className="item-bullet"></div>
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="competences-section" id="competences" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          {/* <h2 className="sections-titles">Mes Compétences</h2> */}
          <h3 className="sections-titles">Mes Compétences</h3>
          <p className="section-subtitle">Un panorama de mes expertises techniques et personnelles</p>
          <div className="section-divider"></div>
        </div>

        <div className="competences-grid">
          <div className="main-competences">
            <CompetenceCategory 
              title="Langages & Frameworks" 
              items={listCompetences.languages}
              category="lang"
              icon="code"
            />
            
            <CompetenceCategory 
              title="Technologies & Outils" 
              items={listCompetences.technologies}
              category="tech"
              icon="cogs"
            />
          </div>

          <div className="secondary-competences">
           
            
            <CompetenceCategory 
              title="Bases de Données" 
              items={listCompetences.database}
              category="db"
              icon="database"
            />
             <CompetenceCategory 
              title="Design & Animation" 
              items={listCompetences.graphique}
              category="graph"
              icon="paint-brush"
            />
          </div>
        </div>

        <div className="additional-section">
          <div className="additional-grid">
            <ListCategory 
              title="Autre Competences & Savoir Faire" 
              items={listCompetences.autreCompetences}
              icon="user-check"
            />
            
            <ListCategory 
              title="Centres d'Intérêt" 
              items={listCompetences.hobbies}
              icon="heart"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Competences;