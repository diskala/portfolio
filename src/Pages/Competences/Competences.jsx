import React, { useEffect, useState } from "react";
import competencesData from "../../Data/Languages";
import "./Competences.css";
const Competences = () => {
  const [listCompetences, setListCompetences] = useState([]);

  useEffect(() => {
    if (competencesData && competencesData.length > 0) {
      setListCompetences(competencesData[0]);
    }
  }, []);

  return (
    <div class="container_competences">
      <h1>MES COMPÉTENCES</h1>
      <div className="competences">
        <div className="languages">
          <h2>Langages Informatiques</h2>

          {listCompetences.languages &&
            listCompetences.languages.map((language) => (
              <div className="niveau_lang" key={language.id}>
                <div className="language-name">
                  <img
                    src={process.env.PUBLIC_URL + language.image}
                    alt={language.name}
                  />
                </div>

                <div className="progress-bar">
                  <div
                    className="progress"
                    style={{ width: `${language.niveau}%` }}
                  >
                    <span>{language.name}</span>
                  </div>
                  <span>{language.niveau} %</span>
                </div>
              </div>
            ))}
        </div>


        <div className="technologies">
          <h2>Technologies </h2>

          {listCompetences.technologies &&
            listCompetences.technologies.map((techno) => (
              <div className="niveau_lang" key={techno.id}>
                <div className="language-name">
                  <img
                    src={process.env.PUBLIC_URL + techno.image}
                    alt={techno.name}
                  />
                </div>

                <div className="progress-bar">
                  <div
                    className="progress"
                    style={{ width: `${techno.niveau}%` }}
                  >
                    <span>{techno.name}</span>
                  </div>
                  <span>{techno.niveau} %</span>
                </div>
              </div>
            ))}
        </div>

        <div className="conception">
          <h2>Conception Graphique et Animation</h2>

          {listCompetences.graphique &&
            listCompetences.graphique.map((graphicDesign) => (
              <div className="niveau_lang" key={graphicDesign.id}>
                <div className="language-name">
                  <img
                    src={process.env.PUBLIC_URL + graphicDesign.image}
                    alt={graphicDesign.name}
                  />
                </div>

                <div className="progress-bar">
                  <div
                    className="progress"
                    style={{ width: `${graphicDesign.niveau}%`,
                     transition: "width 1s ease-in-out" }}
                  >
                    <span>{graphicDesign.name}</span>
                  </div>
                  <span>{graphicDesign.niveau} %</span>
                </div>
              </div>
            ))}
        </div>

        <div className="base_donnees">
          <h2>Base de Données</h2>

          {listCompetences.database &&
            listCompetences.database.map((data) => (
              <div className="niveau_lang" key={data.id}>
                <div className="language-name">
                  <img
                    src={process.env.PUBLIC_URL + data.image}
                    alt={data.name}
                  />
                </div>

                <div className="progress-bar">
                  <div
                    className="progress"
                    style={{ width: `${data.niveau}%` }}
                  >
                    <span>{data.name}</span>
                  </div>
                  <span>{data.niveau} %</span>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className="container_autre">
        <div className="autre_competences">
          <h2>Autres Compétences</h2>
          {listCompetences.autreCompetences &&
            listCompetences.autreCompetences.map((autreComp) => (
              <ul>
                <li>
                  <h4>- {autreComp.name}</h4>
                </li>
              </ul>
            ))}
        </div>

        <div className="hobbies">
          <h2>HOBBIES</h2>
          {listCompetences.hobbies &&
            listCompetences.hobbies.map((hobbie) => (
              <ul>
                <li>
                  <h4>- {hobbie.name}</h4>
                </li>
              </ul>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Competences;
