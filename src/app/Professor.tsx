"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ProfessorMateria from "./ProfessorMateria";

export default function Professor() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [nomeBuscar, setNomeBuscar] = useState("");
  const [listProfessor, setListProfessor] = useState([]);

  const getListProfessor = async(nome:any) => {
    try {
        const {data} = await axios.get('http://192.168.15.172:3030/professor', { params: { nome }})
       setListProfessor(data);
    } 
    catch (error) {
        console.log('erro ao tentar listar professor', error)
    }
  }

  const createTeacher = async (nome: any, idade: any) => {
    try {
      const { data } = await axios.post(
        `http://192.168.15.172:3030/criar_professor`,
        {
          nome: nome,
          idade: idade,
        }
      );
      return data;
    } catch (error) {
      console.log("algo deu errado ao executar function", error);
      return [];
    }
  };

  return (
    <> 
      <input
        type="text"
        name=""
        className="buscarNome"
        placeholder="nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="text"
        name=""
        className="buscarIdade"
        placeholder="idade"
        value={idade}
        onChange={(e) => setIdade(e.target.value)}
      />
      <button
        onClick={() => createTeacher(nome, idade)}
        className="buttonCreate"
      >
        Cadastrar teste new
      </button>
      <br />
      <br />
      {listProfessor.map((teacher: any, index) => (
        <div key={index}>
          {teacher.nome}
          
          {teacher.materium.map((materia:any) => (
            <li>{materia.nome}</li>
          ))}
          {/* {teacher.materium.nome} */}
        </div>
      ))}
      <input
        type="text"
        className="buscarMateria"
        placeholder="Buscar cadastro"
        value={nomeBuscar}
        onChange={(e) => setNomeBuscar(e.target.value)}
      />
    

    </>
  );
}
