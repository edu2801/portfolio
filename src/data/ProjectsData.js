import modal from "../assets/images/modal.png";
import mural from "../assets/images/mural.png";
import rest from "../assets/images/rest.png";
import airgunner from "../assets/images/airgunner.png";

const projectsData = [
  {
    picture: modal,
    title: "Sistema Web - Estamparia",
    description:
      "Criado para ajudar uma estamparia a controlar a linha de produção, estoque de produtos e estoque de matéria prima. Tabelas com paginação, login e modais. Consumo de API Rest.",
    technology: "React.js",
  },
  {
    picture: mural,
    title: "Mural de avisos",
    description:
      "Desenvolvido durante os estudos das tecnologias de Node.js e express.",
    technology: "Node.js",
  },
  {
    picture: rest,
    title: "Login JWT - API Rest",
    description:
      "Autenticação e controle de usuário em Node.js com express e mongoDB.",
    technology: "Node.js",
  },
  {
    picture: airgunner,
    title: "AirgunnerApp - Calculadora balística",
    description:
      "Realizado em parceria com um atirador que fazia calculos manualmente ou em planilhas. O objetivo é ajudar a maior quantidade de pessoas que praticam esse esporte.",
    technology: "React Native",
  },
];

export default projectsData;
