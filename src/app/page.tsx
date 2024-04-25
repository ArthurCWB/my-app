"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Materia from "./Materia";
import Professor from "./Professor";
import ProfessorMateria from "./ProfessorMateria";


function Home() {
  return (
    <>
      <h1>CADASTRO MATERIA</h1>
      <Materia />
      <br />
      <br />
      <h1>CADASTRO PROFESSOR</h1>
      <Professor />
      <br />
      <br />
      <ProfessorMateria/>
    </>
  );
}
export default Home;
