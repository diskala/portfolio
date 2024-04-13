import { useState } from "react";
import MapLocalize from "../../Localisation/MyLocalize";
import "./Contact.css";
export default function Contact() {
  const [errors, setErrors] = useState(null);
  const [status, setStatus] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handlSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/contact", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        message,
      }),
    })
      .then(() => {
        //Apres l'envois, je remet toutes mes variables à 0 afin de vider le formulaire
        setFirstName("");
        setLastName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => console.log(error));

    if (firstName.length < 3) {
      const erreur = "Le Nom doit faire 3 caractères de long minimum!";
      setErrors(erreur);
    } else if (lastName.length < 3) {
      const erreur = "Le Prénom doit faire 3 caractères de long minimum !";
      setErrors(erreur);
    } else if (!email) {
      const erreur = "Veuillez entrer une adresse Email Valide!";
      setErrors(erreur);
    } else {
      alert(
        "Nom: " + firstName + "\n " + lastName + "\n " + email + "\n " + message
      );
      const msg = "Merci, votre message a bien été envoyé";

      setStatus(msg);
    }
  };

  //***************************************************************** */

  //****************************************************************** */
  return (
    <div class="section_formulaire">
      <h1> CONTACTEZ - MOI</h1>

      <h2 class="erreurs">{errors}</h2>
      <h2 class="statuse">{status}</h2>

      <div className="formulaire_contact">
        <form action="" method="post" onSubmit={handlSubmit}>
          <ul>
            <li>
              <label htmlFor="firstName">
                <i class="fa-solid fa-user"></i>
              </label>
              <input
                type="text"
                name="first_name"
                placeholder="Votre Nom"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </li>

            <li>
              <label htmlFor="lastName">
                <i class="fa-solid fa-user"></i>
              </label>
              <input
                type="text"
                name="last_name"
                placeholder="Votre Prénom"
                onChange={(e) => setLastName(e.target.value)}
              />
            </li>

            <li>
              <label htmlFor="email">
                <i class="fa-solid fa-at"></i>
              </label>
              <input
                type="email"
                name="email"
                placeholder=" Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </li>

            <li>
              <label htmlFor="message">
                <i class="fa-solid fa-message"></i>
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Votre message..."
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </li>

            <li>
              <button className="valide" type="submit">
                Envoyer
              </button>
            </li>
          </ul>
        </form>
      </div>

      <div className="container_form">
        <div className="coordonnees">
          {/* <i class="fa-solid fa-at"></i> */}
          <div className="item_coordonnees">
            <p className="cord">
              <i class="fa-solid fa-map-location"></i> ADRESSE{" "}
            </p>
            <p className="cord">55 Rue De Paris 95130 Franconville</p>
            <hr class="hr2"></hr>
            <p className="cord">
              <i class="fa-solid fa-phone"></i> TELEPHONE
            </p>
            <p className="cord">(+33)6.52.78.25.64 </p>
            <hr class="hr2"></hr>
            <p className="cord">
              <i class="fa-solid fa-envelope"></i> E-MAIL
            </p>
            <p className="cord"> seghir.nacime@protonmail.com.fr </p>
            <hr class="hr2"></hr>
            <p className="cord">
              <i class="fa-regular fa-clock"></i> HORAIRES
            </p>
            <p className="cord"> Lundi - Vendredi</p>
            <p className="cord">09H00 - 18H00 </p>
          </div>
        </div>

        <div className="localisation">
          {/* <MapLocalize /> */}

          {MapLocalize()}

          <h4>Ma Carte Google Maps</h4>
        </div>
      </div>
    </div>
  );
}
