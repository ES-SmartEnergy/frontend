import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import GraficoArea from "./GraficoArea";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Navbar from "../navbar/Navbar";
import { uid } from "../login/Login";

function Dados() {
  const [documento, setDocumento] = useState([]);

  const [refino, setRefino] = useState("");

  const refinofiltrado = documento.consumo
    ? documento.consumo.filter((item) => item.comodo.startsWith(refino))
    : [];

  const getDocumento = async () => {
    axios
      .post("https://smartenergy-backend-2882c0bcace3.herokuapp.com/dados", {
        uid,
      })
      .then((response) => {
        console.log("Sucesso:", response);
        setDocumento(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getDocumento();
  }, []);

  // Função para renderizar as linhas da tabela conforme o cômodo selecionado
  function renderRows(array) {
    if (array.length == 0) {
      return (
        <tr>
          <td> </td>
          <td
            style={{
              textAlign: "center",
            }}
          >
            {"Nada por aqui"}
          </td>
          <td> </td>
        </tr>
      );
    }
    const rows = [];
    for (let i = 0; i < array.length; i++) {
      const d = array[i];
      const dataHoraSem11Caracteres = d.data_hora.slice(11);
      rows.push(
        <tr key={i}>
          <td>{dataHoraSem11Caracteres}</td>
          <td>{d.comodo}</td>
          <td>{d.gasto}</td>
        </tr>
      );
    }
    return rows;
  }

  // Obtém todos os cômodos únicos para o Dropdown
  //const cmodosUnicos = obterCmodosUnicos();

  return (
    <div>
      <Navbar />
      <div
        style={{
          padding: "10px",
        }}
      >
        {documento.length == 0 ? (
          <div>
            {/*console.log(meuAtributo)*/}
            <p>Aguardando</p>
          </div>
        ) : (
          <div
            className="container bg-white rounded "
            style={{
              paddingLeft: "100px",
              paddingRight: "100px",
              paddingTop: "50px",
            }}
          >
            {/* Gráfico de Área */}

            <h2 style={{ textAlign: "center" }}>
              GRÁFICO DE CONSUMO DE ELETRICIDADE
            </h2>

            <p style={{ textAlign: "center" }}>
              dados referêntes a data:{" "}
              {documento.consumo[0]["data_hora"].slice(0, -9)} até a data:{" "}
              {documento.consumo[documento.consumo.length - 1][
                "data_hora"
              ].slice(0, -9)}
            </p>

            <div
              style={{
                // paddingLeft: "200px",
                // paddingRight: "200px",
                paddingBottom: "50px",
              }}
            >
              <GraficoArea documento={documento} />
            </div>

            {/* Dropdown para seleção do cômodo */
            /*}
            <select onChange={handleDropdownChange}>
              <option value="">Todos os Cômodos</option>
              {cmodosUnicos.map((comodo, index) => (
                <option key={index} value={comodo}>
                  {comodo}
                </option>
              ))}
            </select>
              */}

            <h2 style={{ textAlign: "center" }}>
              TABELA DE CONSUMO DE ELETRICIDADE
            </h2>

            <div style={{ textAlign: "center" }}>
              <label
                style={{
                  margin: "5px",
                }}
              >
                Filtre por cômodo
              </label>
              <input
                style={{
                  borderRadius: "30px",
                  borderColor: "#b4dff1",
                }}
                type="text"
                value={refino}
                onChange={(ev) => setRefino(ev.target.value)}
              />
              {/*console.log(refino)*/}
            </div>

            {/*console.log(refinofiltrado)*/}
            {/* tabela */}

            <Table responsive striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>Horas</th>
                  <th>Cômodo</th>
                  <th>Consumo (kwh)</th>
                </tr>
              </thead>
              <tbody>{renderRows(refinofiltrado)}</tbody>
            </Table>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dados;
