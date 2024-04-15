"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

// const url = "http://localhost:3030/"
export default function Materia() {
  const [materia, setMateria] = useState("");
  const [listMateria, setListMateria] = useState([]);
  const [idMateria, setIdMateria] = useState('')

  useEffect(() => {
    getListMateria().then(list => setListMateria(list));
  },[])

  const deleteMateria = async (nome: any) => {
    try {
      const { data } = await axios.delete(
        `http://192.168.15.172:3030/deleteMateria/${nome}`
      );
      return data;
    } catch (error) {
      console.error("erro ao deletar nome procurado", error);
      return [];
    }
  };
  const getListMateria = async () => {
    try {
      const { data } = await axios.get(
        "http://192.168.15.172:3030/materias"
      );
      return data;
    } catch (error) {
      console.error("Erro ao obter lista de matérias:", error);
      return [];
    }
  };

  const createMateria = async (nome: any) => {
    try {
      const { data } = await axios.post(
        'http://192.168.15.172:3030/cadastreMateria',
        { nome }
      );
    } catch (error) {
      console.error("erro");
    }
  };

  return (
    <>
      <input
        type="text"
        name=""
        className="buscarMateria"
        placeholder="materia"
        value={materia}
        onChange={(e) => setMateria(e.target.value)}
      />
      <input type="text"
      placeholder="delete materia"
       className="buscarMateria"
       value={idMateria}
       onChange={(e) => setIdMateria(e.target.value)} />
      <button onClick={() => deleteMateria(idMateria)} className="myButton2">
        deleteMateria
      </button>
      <button onClick={() => createMateria(materia)} className="buttonCreate">
        Criar Materia
      </button>
    </>
  );
}
