// import React, { useState, useEffect } from 'react';
// import './AutoTexte.css';

// const AutoTexte = ({ text }) => {
//   const [displayText, setDisplayText] = useState('');
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => {

//         setDisplayText((prevText) =>  prevText + text[currentIndex]);

//       setCurrentIndex((prevIndex) => (prevIndex + 1) % text.length);

//       // Réinitialiser l'affichage et l'index une fois que tout le texte a été affiché
//       if (currentIndex === text.length - 1) {
//         setTimeout(() => {
//           setDisplayText('');
//           setCurrentIndex(0);
//         }, 300); // Ajouter un délai avant de réinitialiser pour créer une pause
//       }
//     }, 250);

//     return () => {
//       clearInterval(intervalId);
//     };
//   }, [currentIndex, text]);

//   return <span className="auto-typing-text">{displayText}</span>;
// };

// export default AutoTexte;
import React, { useEffect, useState } from 'react';
import './AutoTexte.css';
const AutoTypeText = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;

    const intervalId = setInterval(() => {
      setDisplayedText((prevText) => {
        if (index < text.length) {
          // Inversez l'ordre des caractères pour l'effet de droite à gauche
          const reversedText =  prevText + text.charAt(index);
          index++;
          return reversedText;
        } else {
          // Une fois que tout le texte a été affiché, réinitialisez l'index
          index = 0;
          return '';
        }
      });
    }, 200); // Ajustez la vitesse de frappe en millisecondes selon vos préférences

    // Nettoyez l'intervalle lors du démontage du composant
    return () => clearInterval(intervalId);
  }, [text]);

  return <h1 className="auto-typing-text">{displayedText}</h1>;
};
export default AutoTypeText;

 