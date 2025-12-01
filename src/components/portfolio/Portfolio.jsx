import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/nlp.png";
import card2 from "../../assets/images/portfolio-images/ps5_2.webp";
import card3 from "../../assets/images/portfolio-images/stream2.jpeg";
import card4 from "../../assets/images/portfolio-images/teams.png";
import card5 from "../../assets/images/portfolio-images/fashion.jpg";
import card6 from "../../assets/images/portfolio-images/fish.webp";

const projectData = [
  {
    id: 1,
    image: card1,
    category: "Intelligence Artificielle",
    title: "NLP modélisation de thématique",
    description:
      "Ce projet utilise des techniques de NLP pour nettoyer un corpus de 52 livres en anglais, identifier leurs thèmes dominants via TF-IDF et LSA, puis regrouper les ouvrages selon leur similarité. Il permet également de recommander automatiquement des livres proches d’un titre donné.",
    link: "https://github.com/Orney2009/nlp-topic-modeling",
  },
  {
    id: 2,
    image: card2,
    category: "Data",
    title: "PS5 price scrapper",
    description:
      "Ce projet réalise du web scraping pour collecter des annonces de PS5 publiées sur CoinAfrique (Bénin), puis analyse et visualise la distribution des prix dans un notebook dédié. Il met en évidence ma capacité à extraire des données en ligne, à les traiter et à produire des insights pertinents sur un marché local.",
    link: "https://github.com/Orney2009/ps5-price-scraper-visualizer-CoinAfrique-examples",
  },
  {
    id: 3,
    image: card3,
    category: "Data",
    title: "Review Stream",
    description:
      "ReviewStream est un système distribué conçu pour traiter et analyser en temps réel des avis IMDB à l’aide d’Apache Kafka, Flask et SQLAlchemy. Le pipeline produit, transforme et étiquette les reviews (analyse de sentiment), stocke les données traitées dans une base relationnelle, puis les expose via une API REST.",
    link: "https://github.com/Orney2009/reviewStream",
  },
  {
    id: 4,
    image: card4,
    category: "Data",
    title: "MS Teams Data Collector",
    description:
      "Ce projet explore l’utilisation de l’API Microsoft Graph (ou équivalent) pour récupérer des équipes, canaux, messages et réponses, puis les stocker dans une base SQLite avant de les exposer via une petite application Flask. Il regroupe des modules d’interfaçage API, des modèles de base de données, des scripts de persistance et un micro-service web illustrant la mise à disposition des données collectées.",
    link: "https://github.com/Orney2009/ms-teams-data-collector-sqlite-sqlalchemy-flask",
  },
  {
    id: 5,
    image: card5,
    category: "Intelligence Artificielle",
    title: "Fashion MNIST Deep Learning Classification",
    description:
      "Ce projet met en œuvre un réseau de neurones deep learning pour classifier des articles de mode issus du jeu de données Fashion MNIST. Construit avec TensorFlow/Keras, il intègre une phase d’optimisation d’hyperparamètres afin d’identifier la meilleure architecture (couches, neurones) pour obtenir une classification précise.",
    link: "https://github.com/Orney2009/fashion-mnist-deep-learning-classification",
  },
  {
    id: 6,
    image: card6,
    category: "Intelligence Artificielle",
    title: "Predicting Fish Size — Comparative Regression Models",
    description:
      "Étude comparative de plusieurs modèles de régression pour prédire les propriétés biométriques de poissons (poids, longueurs) à partir du jeu de données Fish. Le projet explore et visualise les données, puis évalue trois approches — Régression Linéaire, LinearSVR et Arbre de Décision — avec une recherche simple d’hyperparamètres.",
    link: "https://github.com/Orney2009/predicting-fish-size-comparative-regression-models",
  },
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Portfolio</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Voici une sélection de mes projets récents, mettant en valeur mes compétences 
            en analyse de données, 
            en modélisation et en création de solutions fiables et orientées métier.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
      <div className="text-center">
        <a
          href="#!"
          className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
        >
          Voir plus de projets
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
