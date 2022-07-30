import React from "react";
import "./App.css";
import * as b from "./Components/Perguntas";
import { Routes, Route } from "react-router-dom";
import Nomes1 from "./Components/Nomes";
function App() {
  return (
    <>
      <b.Pergunta name="Luiz" />
      <Routes>
        <Route
          path="/nomes1"
          element={
            <Nomes1
              titulo="luiz"
              lista={["Jorge", "Tanaka", "Michael", "Alan"]}
            />
          }
        ></Route>
        <Route
          path="/nomes2"
          element={
            <Nomes1
              titulo="Nomes 2"
              lista={[
                "Colápso Cardíaco da Silva",
                "Esparadrapo Clemente de Sá",
                "Colápso Cardíaco da Silva",
                "Barrigudinha Seleida",
              ]}
            />
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
