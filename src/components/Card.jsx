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

export function Card({ name, age, time }) {
  return (
    <div className="card">
      <div className="cardDiv">{name}</div>
      <div className="cardDiv"> {age}</div>
      <div className="cardDiv"> {time}</div>
    </div>
  );
}
