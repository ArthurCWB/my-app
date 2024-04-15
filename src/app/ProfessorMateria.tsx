"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Professor from "./Professor";

export default function ProfessorMateria() {
  const [listProfessor, setListProfessor] = useState([]);
  const [listMateria, setListMateria] = useState([]);
  const [materia, setMateria] = useState("");
  const [professor, setProfessor] = useState("");

  useEffect(() => {
    getListProfessor();
    getListMateria();
  }, []);

  const getListProfessor = async () => {
    const { data } = await axios.get("http://192.168.15.172:3030/professor");
    setListProfessor(data);
  };

  const getListMateria = async () => {
    try {
      const { data } = await axios.get("http://192.168.15.172:3030/materias");
      setListMateria(data);
    } catch (error) {
      console.error("Erro ao obter lista de matérias:", error);
      return [];
    }
  };

  const onSubmit = async () => {
    const { data } = await axios.post("http://192.168.15.172:3030/ProfessorDaMateria", {
      materia_id: materia,
      professor_id: professor,
    });
  };

  return (
    <>
      <select onChange={(e) => setMateria(e.target.value)}>
        {listMateria.map((materia: any) => {
          return <option value={materia.id}>{materia.nome}</option>;
        })}
      </select>
      <select onChange={(e) => setProfessor(e.target.value)}>
        {listProfessor.map((professor: any) => {
          return <option value={professor.id}>{professor.nome}</option>;
        })}
      </select>
      <button onClick={() => onSubmit()} className="myButton2">
        cadastrar.
      </button>
    </>
  );
}
