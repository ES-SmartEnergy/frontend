import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../navbar/Navbar";
import { uid } from "../login/Login";
import Table from "react-bootstrap/Table";

function Home() {
  const [documento, setDocumento] = useState([]);
  const [refino, setRefino] = useState("");

  const getDocumento = async () => {
    axios
      .post("https://smartenergy-backend-2882c0bcace3.herokuapp.com/home", {
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
  }, [setDocumento]);

  // Função para renderizar as linhas da tabela conforme o cômodo selecionado
  function renderRows(documentoData) {
    const rows = [];

    for (const [dataHora, consumo] of Object.entries(documentoData)) {
      // Adiciona a linha para cada entrada de dataHora
      consumo.forEach((item, index) => {
        const data_horarefinada = item.data_hora.slice(0, -9);

        rows.push(
          <tr style={{ textAlign: "left" }} key={`${dataHora}_${index}`}>
            <td>{data_horarefinada}</td>
            <td>{item.comodo}</td>
            <td style={{ textAlign: "left" }}>{item.gasto.toFixed(2)}</td>
          </tr>
        );
      });
    }

    return rows.length > 0 ? (
      rows
    ) : (
      <tr>
        <td colSpan="3">Nenhum dado disponível</td>
      </tr>
    );
  }

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
            {" "}
            <p>Aguardando</p>
          </div>
        ) : (
          <div>
            <div
              className="container bg-white rounded "
              style={{
                paddingLeft: "100px",
                paddingRight: "100px",
                paddingTop: "50px",
              }}
            >
              <h1 style={{ textAlign: "center" }}>
                Olá, espero que você esteja legal!
              </h1>

              <h2 style={{ textAlign: "center" }}>
                TABELA DE GASTO MÉDIO POR HORA
              </h2>

              <div
                style={{
                  // paddingLeft: "200px",
                  // paddingRight: "200px",
                  paddingBottom: "50px",
                }}
              >
                <Table responsive striped bordered hover size="sm">
                  <thead style={{ textAlign: "left" }}>
                    <tr>
                      <th>Dia</th>
                      <th>Cômodo</th>
                      <th>Consumo (kwh)</th>
                    </tr>
                  </thead>
                  <tbody>{renderRows(documento)}</tbody>
                </Table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
