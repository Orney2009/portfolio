import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "Analyse & Visualisation de données",
    description:
      "J’aide les entreprises à tirer pleinement parti de leurs données en fournissant des analyses claires et des visualisations percutantes, avec des dashboards interactifs qui facilitent la prise de décision stratégique.",
  },
  {
    id: 2,
    title: "Intelligence Artificielle",
    description:
      "J’accompagne vos projets pour générer des résultats concrets grâce à l’intelligence artificielle, en développant des modèles de machine learning pour la prédiction, la classification, le NLP ou la vision par ordinateur. J’optimise aussi leurs performances afin de faciliter des décisions rapides et efficaces.",
  },
  {
    id: 3,
    title: "Ingénierie de données",
    description:
      "Je conçois et automatise des pipelines de traitement de données (ETL/ELT), en collectant des informations depuis le web ou des APIs, et en assurant leur stockage et gestion dans des bases SQL. Je déploie également des microservices (Flask/FastAPI) pour rendre ces données accessibles et exploitables rapidement.",
  },
  {
    id: 4,
    title: "Conseils et formation",
    description:
      "Je propose des formations pratiques en Python, data science, machine learning et NLP, ainsi que des audits et optimisations de vos flux de données existants. Je conseille également sur le choix des outils, l’architecture data et les solutions d’IA les plus adaptées à vos besoins.",
  },
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">Quels sont mes services?</p>
        {/* <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
            I specialize in designing user experiences, crafting engaging
            interfaces, and building robust web applications that deliver value
            and usability.
          </p>
          <p className="text-xs sm:text-lg font-normal text-gray-400">
            My approach combines creativity and technical expertise to deliver
            solutions that are both visually appealing and highly functional for
            users.
          </p>
        </div> */}
        <a
          href="mailto:dorvians@gmail.com"
          className="mt-5 md:mt-12.5 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5"
        >
          Say Hello!
        </a>
      </div>
      <div className="">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
