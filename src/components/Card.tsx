import React from "react";

// export function Card(props: any) {
//   return (
//     <div className="card">
//       <p>{props.name}</p>
//       <p>{props.idade}</p>
//     </div>
//   );
// }

// Outra opção é usar desestruturação

interface CardProps {
  photo: string;
  name: string;
  nick: string;
  job: string;
  time: string;
}

export function Card(props: CardProps) {
  return (
    <div className="card">
      <div className="cardDiv ">
        <img className="imgPerfil" src={props.photo} />
        <p className="namePerfil">{props.name}</p>
      </div>
      <div className="cardDiv">{props.nick}</div>
      <div className="cardDiv">{props.job}</div>
      <div className="cardDiv">{props.time}</div>
    </div>
  );
}
