// import "./App.css";
import { Card } from "../components/Card";
import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";

interface StudentsProps {
  nick: string;
  job: string;
  time: string;
}

interface UserProps {
  name: string;
  avatar: string;
}

export function UseState() {
  const [studentNick, setStudentNick] = useState("valor inicial");
  const [studentJob, setStudentJob] = useState("valor inicial");
  const [students, setStudents] = useState<StudentsProps[]>([]);

  const [user, setUser] = useState<UserProps>({} as UserProps);

  function handleAddStudent() {
    const newStudent = {
      nick: studentNick,
      job: studentJob,
      time: new Date().toLocaleDateString("pt-br", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
    };

    setStudents((prevState) => [...prevState, newStudent]);
  }

  // useEffect(() => {

  // }, []);

  function getUser() {
    axios
      .get(`https://api.github.com/users/${studentNick}`)
      .then((response) => {
        setUser({
          name: response.data.name,
          avatar: response.data.avatar_url,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getUser();

  return (
    <div>
      {/* <img className="imgPerfil" src={user.avatar} alt="" /> */}
      <div className="div1">
        <div className="div2">
          <h1 className="title">useState</h1>
          <input
            type="text"
            placeholder="Digite o github nick do aluno"
            onChange={(e) => setStudentNick(e.target.value)}
          />
          <input
            type="text"
            placeholder="Digite a profissão pretendida pelo aluno"
            onChange={(e) => setStudentJob(e.target.value)}
          />

          <button className="button" onClick={handleAddStudent}>
            {" "}
            ADICIONAR{" "}
          </button>
        </div>
      </div>
      <div className="cards"> 
        {students.map((student) => (
          <Card
            key={student.time}
            name={user.name}
            photo={user.avatar}
            nick={student.nick}
            job={student.job}
            time={student.time}
          />
        ))}
      </div>
    </div>
  );
}
