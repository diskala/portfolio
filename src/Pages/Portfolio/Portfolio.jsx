import React, { useState, useEffect } from "react";
import projetsData from "../../Data/Projets";
import "./Portfolio.css";
import Modal from "react-modal";
const Portfolio = () => {
  const [projets, setProjets] = useState([]);
  const [parProjet, setParProjet] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    setProjets(projetsData);
  }, []);

  // à l'ouverture du MODAL je filtre les projets par ID
  const openModal = (unId) => {
    const monProjet = projetsData.filter((unSeul) => unSeul.id === unId);

    setParProjet(monProjet);

    setIsModalOpen(true);
  };

  // fermeture du MODAL
  const closeModal = () => setIsModalOpen(false);

  // const handelSubmit = (e) => {
  //   e.preventDefault()

  // }

  // en cas je veux utiliser une formulaire
  // const formulaire = (e) => {

  //   const monProjet = projetsData.filter((projet) => projet.name === e.target.value)
  //   if (monProjet) {
  //     setProjets(monProjet);
  //   }
  //   else {
  //     setProjets(projetsData);
  //   }

  // }

  return (
    <>
      <h1>TOUS MES PROJETS</h1>

      {/* <div class="search">

        <form action="" onSubmit={handelSubmit}>
          
          <select id="projetSelect" onChange={formulaire} value={projetsData}>
            <option class="enTete" value="">Sélectionnez un projet</option>
            
            {projetsData.map((projet) => (
              <option key={projet.id} value={projet.name}>
                {projet.name}
              </option>
            ))}
          </select>

        </form>
      </div> */}

      <div class="container-portfolio">
        {projets.map((projet) => (
          <div key={projet.id} class="mesProjets">
            <h2>{projet.name}</h2>
            <figure>
              <img
                src={process.env.PUBLIC_URL + projet.image_1}
                alt={projet.name}
                onClick={() => openModal(projet.id)}
              />
              <figcaption>{projet.name}</figcaption>
            </figure>

            {/* <a href={projet.lien} target="_blank" rel="noopener noreferrer">Lien vers le projet</a> */}

            <button
              class="boutton"
              key={projet.id}
              onClick={() => openModal(projet.id)}
            >
              En Savoir Plus
            </button>
          </div>
        ))}
      </div>

      {/* ************ *********************MODAL************************** */}

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Modal pour mes projets"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Couleur de l'arrière-plan de l'overlay
          },
          content: {
            width: "70%",
            height: "80%",
            margin: "auto",
            overflow: "auto", // Ajoute une barre de défilement si le contenu est trop grand
          },
        }}
      >
        {/* Votre contenu de modal va ici */}

        <div className="container_items">
          {parProjet &&
            parProjet.map((item) => (
              <div className="item_modal">
                <h1>
                  {" "}
                  Mon Projet <span className="title">{item.name} </span>{" "}
                </h1>
                <div className="image">
                  <img src={process.env.PUBLIC_URL + item.image_1} alt="" />
                </div>

                <div className="desc_lang_techno">
                  <div className="description">
                    <p className="desc">
                      {item.description}. <br />{" "}
                    </p>
                    <div class="lien">
                      {" "}
                      <a
                        href={item.lien}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Lien vers github
                      </a>
                    </div>
                  </div>

                  <div className="fram_lang">
                    <h4> INFOS PROJET</h4>
                    <p>
                      Technologié |&nbsp;{" "}
                      <span className="framework">{item.technologie}</span>{" "}
                    </p>
                    <hr className="hr"></hr>
                    <p className="titre">Langages Utilisés:</p>
                    <div className="langages">
                      {item.langage &&
                        item.langage.map((lang) => (
                          <span key={lang.id} class="infos">
                            {lang.name}{" "}
                          </span>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}

          <button className="close" onClick={closeModal}>
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>

        {/* Contenu supplémentaire et formulaire pour la mise à jour de la chambre */}
      </Modal>
    </>
  );
};

export default Portfolio;
