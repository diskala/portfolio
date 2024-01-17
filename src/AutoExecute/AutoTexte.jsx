import React, { useEffect, useState } from "react";
import "./AutoTexte.css";
const AutoTypeText = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;

    const intervalId = setInterval(() => {
      setDisplayedText((prevText) => {
        if (index < text.length) {
         // un qvariable qui prend à chaque fois une nouvelle valeur en fonction de INDEX
          const reversedText = prevText + text.charAt(index);
          index++;
          return reversedText;
        } else {
          // Une fois que tout le texte a été affiché, réinitialisez l'index
          index = 0;
          return "";
        }
      });
    }, 200); // pour Ajustez la vitesse de frappe en millisecondes selon vos préférences

    // Nettoyez l'intervalle lors du démontage du composant
    return () => clearInterval(intervalId);
  }, [text]);

  return <h1 className="auto-typing-text">{displayedText}</h1>;
};
export default AutoTypeText;
