import axios from "axios";
import { useEffect, useState } from "react";

export function UseEffect() {
  const [user, setUser] = useState({ name: "", avatar: "" });

  // Corpo (são as ações, e o que será executado) -> Função -> Estado
  // É executado automaticamente assim que a interface é renderizada
  // useEffect não pode ser async, mas é possível usar o async em uma função criada dentro dele.
  useEffect(() => {
    async function getUser() {
      const response = await fetch("https://api.github.com/users/Ldragk");
      const data = await response.json();
      setUser({
        name: data.name,
        avatar: data.avatar_url,
      });
    }
    getUser();
  }, []);

  return (
    <div className="divPerfil">
      <strong className="namePerfil">{user.name}</strong>
      <img className="imgPerfil" src={user.avatar} alt="" />
    </div>
  );
}
