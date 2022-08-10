import modal from "../assets/images/modal.png";
import mural from "../assets/images/mural.png";
import rest from "../assets/images/rest.png";
import airgunner from "../assets/images/airgunner.png";

const projectsData = {
  portuguese: [
    {
      picture: modal,
      title: "Sistema Web - Estamparia",
      description:
        "Criado para ajudar uma estamparia a controlar a linha de produção, estoque de produtos e estoque de matéria prima. Tabelas com paginação, login e modais. Consumo de API Rest.",
      technology: "React.js",
    },
    {
      picture: airgunner,
      title: "AirgunnerApp - Calculadora balística",
      description:
        "Realizado em parceria com um atirador que fazia calculos manualmente ou em planilhas. O objetivo é ajudar a maior quantidade de pessoas que praticam esse esporte.",
      technology: "React Native",
    },
    {
      picture: mural,
      title: "Mural de avisos",
      description:
        "Desenvolvido durante os estudos das tecnologias de Node.js e express.",
      technology: "Node.js + HTML",
    },
    {
      picture: rest,
      title: "Login JWT - API Rest",
      description:
        "Autenticação e controle de usuário em Node.js com express e mongoDB.",
      technology: "Node.js",
    },
  ],
  english: [
    {
      picture: modal,
      title: "Web System - Stamping",
      description:
        "Created to help a Stamping Factory to control the production line, product stock and raw material stock. Tables with pagination, login and modals. Rest API Consumption.",
      technology: "React.js",
    },
    {
      picture: airgunner,
      title: "AirgunnerApp - ballistic calculator",
      description:
        "Carried out in partnership with a shooter who made calculations manually or in spreadsheets. The purpose is to help as many people as possible who practice this sport.",
      technology: "React Native",
    },
    {
      picture: mural,
      title: "Notice Board",
      description: "Developed while studying Node.js and express technologies.",
      technology: "Node.js + HTML",
    },
    {
      picture: rest,
      title: "JWT Login - Rest API",
      description:
        "Authentication and user control in Node.js with express and mongoDB.",
      technology: "Node.js",
    },
  ],
};
export default projectsData;
