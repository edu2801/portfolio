import React from "react";
import picture from "../assets/images/profile-picture.jpg";

export default function Introduction() {
  return (
    <div>
      <h1 className="text-2xl font-medium text-center pt-5">
        Olá, eu sou o Eduardo!
      </h1>
      <div>
        <div className="p-10 md:max-w-xs">
          <img src={picture} alt="profile" className="rounded-lg" />
        </div>
        <div>
          Apaixonado por tecnologia e por ajudar as pessoas, me tornei
          desenvolvedor web com o objetivo de unir minhas paixões para melhorar
          o mundo.
        </div>
      </div>
      <div className="pt-5">
        <h1>Tecnologias</h1>
        <div>
          As tecnologias que domino são: React.js, Next.js, Node.js com express
          e React Native.
        </div>
        <div>
          As tecnologias que eu conheço mas ainda estou aprendendo: Java, Go,
          Angular
        </div>
        <div>Banco de dados: MongoDB e Postgress</div>
      </div>
    </div>
  );
}
