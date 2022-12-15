import "./App.css";
import { Card } from "./components/Card";
import React, { useState } from "react";

export function App() {
  // onde vai armazenar o estado - função que atualiza o estado
  const [studentName, setStudentName] = useState("valor inicial");
  const [studentAge, setStudentAge] = useState("valor inicial");
  const [students, setStudents] = useState([]);

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      age: studentAge,
      time: new Date().toLocaleDateString("pt-br", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
    };

    setStudents((prevState) => [...prevState, newStudent]);
  }

  return (
    <div className="div1">
      <div className="div2">
        <input type="text" onChange={(e) => setStudentName(e.target.value)} />
        <input type="text" onChange={(e) => setStudentAge(e.target.value)} />

        <button onClick={handleAddStudent}> ADICIONAR </button>

        {students.map((student) => (
          <Card
            key={student.time}
            name={student.name}
            age={student.age}
            time={student.time}
          />
        ))}
      </div>
    </div>
  );
}


