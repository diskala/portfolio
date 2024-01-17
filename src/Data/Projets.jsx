const projetsData = [
  {
    id: 1,
    name: "discars",
    technologie: " Framwork SYMFONY 6",

    langage: [
      {
        langId: 1,
        name: "JavaScript",
      },
      {
        langId: 2,
        name: "HTML",
      },
      {
        langId: 3,
        name: "CSS",
      },
      {
        langId: 4,
        name: "PHP",
      },
      {
        langId: 5,
        name: "TWIG",
      },
    ],
    image_1: "/Media/projets/cars/projet-discars-1.png",
    image_2: "/Media/projets/cars/discars-2.png",

    lien: "https://github.com/diskala/disCars.git",
    description:
      " Choisissez le véhicule de vos rêves parmi les plus grandes marques dont nous disposons. Amoureux des véhicules de caractère aux prestations haut de gamme ? Alors optez pour la location d’une voiture de luxe!",
  },
  {
    id: 2,
    name: "event",
    technologie: " Framework SYMFONY 6",
    langage: [
      {
        langId: 1,
        name: "JavaScript",
      },
      {
        langId: 2,
        name: "HTML",
      },
      {
        langId: 3,
        name: "CSS",
      },
      {
        langId: 4,
        name: "PHP",
      },
      {
        langId: 5,
        name: "TWIG",
      },
      {
        langId: 6,
        name: "BOOTSTRAP",
      },
    ],
    image_1: "/Media/projets/salles/salle-1.png",
    image_2: "/Media/projets/salles/salle-2.png",
    image_3: "/Media/projets/salles/salle-1.png",
    lien: "https://github.com/diskala/ecfHall-STAGING.git",
    description:
      "Location salles de réunion et séminaire unique, a proximité de votre entreprise avec Des équipements et services fiables, Des milliers d'entreprises font confiance à nous pourquoi pas vous...",
  },
  {
    id: 3,
    name: "country",
    title: "Recherche Les Pays Par Mot Clés",
    technologie: "ReactJS et NodeJs",
    langage: [
      {
        langId: 1,
        name: "JavaScript",
      },
      {
        langId: 2,
        name: "HTML",
      },
      {
        langId: 3,
        name: "CSS",
      },
    ],
    image_1: "/Media/projets/search/recherche pays-1.png",
    lien: "https://github.com/diskala/search.git",
    description:
      "Application de recherche des pays du monde entier par mot clés ",
  },
  {
    id: 4,
    name: "biblioapp",
    title: "Application Pour La Gestion d'une Bibliothèque",
    technologie: " Framework SYMFONY 6",
    langage: [
      {
        langId: 1,
        name: "JavaScript",
      },
      {
        langId: 2,
        name: "HTML",
      },
      {
        langId: 3,
        name: "CSS",
      },
      {
        langId: 4,
        name: "PHP",
      },
      {
        langId: 5,
        name: "TWIG",
      },
    ],
    image_1: "/Media/projets/bibliotheque/gestion-bibliothèque-2.png",
    image_2: "/Media/projets/bibliotheque/gestion-bibliothèque3.png",
    image_3: "/Media/projets/bibliotheque/gestion-bibliothèque-5.png",
    lien: "https://github.com/diskala/biblioapp.git",
    description:
      " C'est une application de gestion une bibliothèque, va vous permet de répertorier vos livres par (Titre, auteur et nemuro de livre) et de pouvoir effectuer une recherche rapide...",
  },

  {
    id: 5,
    name: "pockemons",
    title: "Rendu d'un API de Pockemons",
    technologie: "ReactJS et NodeJs",
    langage: [
      {
        langId: 1,
        name: "JavaScript",
      },
      {
        langId: 2,
        name: "HTML",
      },
      {
        langId: 3,
        name: "CSS",
      },
    ],
    image_1: "/Media/projets/pockemons/projet-pockemons-1.png",
    lien: "https://github.com/diskala/correction-pokemon.git",
    description:
      "Exploitation d'un API pour pouvoir afficher tous les Pockemons",
  },
  {
    id: 6,
    name: "codexpress",
    title: "Messagerie Instantanée",
    technologie: "Framework Symfony 6",
    langage: [
      {
        langId: 1,
        name: "JavaScript",
      },
      {
        langId: 2,
        name: "HTML",
      },
      {
        langId: 3,
        name: "CSS",
      },
      {
        langId: 4,
        name: "PHP",
      },
      {
        langId: 5,
        name: "TWIG",
      },
    ],
    image_1: "/Media/projets/codexpress/codexpress-2.png",
    image_2: "/Media/projets/codexpress/codexpress-1.png",
    lien: "https://github.com/diskala/codexpress-master.git",
    description: "CodeXpress c'est une application de messagerie instantanée.",
  },
  {
    id: 7,
    name: "casa",
    title: "Site de Location d'Appartement",
    technologie: "ReactJS et NodeJs",
    langage: [
      {
        langId: 1,
        name: "JavaScript",
      },
      {
        langId: 2,
        name: "HTML",
      },
      {
        langId: 3,
        name: "CSS",
      },
    ],
    image_1: "/Media/projets/Casa/casa-1.png",
    image_2: "/Media/projets/Casa/casa-2.png",
    lien: "https://github.com/diskala/correction-casa.git",
    description:
      "Casa c'est un site de Location d'appartements dans toute la France.",
  },
  {
    id: 8,
    name: "designer",
    title: "Site Vitrine d'Agence de designe Interieur",
    technologie: "ReactJS",
    langage: [
      {
        langId: 1,
        name: "JavaScript",
      },
      {
        langId: 2,
        name: "HTML",
      },
      {
        langId: 3,
        name: "CSS",
      },
    ],
    image_1: "/Media/projets/Api-swagger/architecte-interieur-1.png",
    image_2: "/Media/projets/Api-swagger/architecte-interieur-2.png",
    lien: "https://github.com/diskala/correction-portfolio-termin--et-fini.git",
    description:
      "Site vitrine d'un artisan spécialisé dans le design et l'architecture des espaces intérieurs pour les professionnels et particuliers.",
  },
  {
    id: 9,
    name: "devpro",
    title: "Agence de Developpement Web",
    technologie: " CMS Wordpress",

    langage: [
      {
        langId: 2,
        name: "HTML",
      },
      {
        langId: 3,
        name: "CSS",
      },
    ],
    image_1: "/Media/projets/wordpress/agence-developpeur-wordpress-1.png",
    image_2: "/Media/projets/wordpress/agence-developpeur-wordpress-2.png",
    lien: "https://github.com/diskala/correction-portfolio-termin--et-fini.git",
    description: " Site Web d'une agence spécialisé dans le développement Web",
  },
  {
    id: 10,
    name: "e-commerce",
    title: "Site de e-Commerce",
    technologie: "Aucun",
    langage: [
      {
        langId: 1,
        name: "JavaScript",
      },
      {
        langId: 2,
        name: "HTML",
      },
      {
        langId: 3,
        name: "CSS",
      },
    ],
    image_1: "/Media/projets/javascript/e-commerce-javascript-1.png",
    image_2: "/Media/projets/javascript/e-commerce-javascript-2.png",
    image_3: "/Media/projets/javascript/e-commerce-javascript-3.png",
    lien: "https://github.com/diskala/correction-portfolio-termin--et-fini.git",
    description: " C'est un site complet e-commerce .",
  },

  {
    id: 11,
    name: "facture",
    title: "Application pour Générer un Facture",
    technologie: "Aucun",
    langage: [
      {
        langId: 1,
        name: "JavaScript",
      },
      {
        langId: 2,
        name: "HTML",
      },
      {
        langId: 3,
        name: "CSS",
      },
    ],

    image_1: "/Media/projets/javascript/CRUD-facturee-js.png",
    lien: "https://github.com/diskala/correction-portfolio-termin--et-fini.git",
    description: "Une Application pour établir les Factures des clients ",
  },
];

export default projetsData;
