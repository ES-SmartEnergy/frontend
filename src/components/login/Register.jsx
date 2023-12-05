import { Component } from "react";
import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Route,
  Link,
  Routes,
  redirect,
  useNavigate,
} from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const navigate = useNavigate();

  const isEmailValid = (email) => {
    // Expressão regular para validar um e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const registrar = (uid) => {
    axios
      .post("https://smartenergy-backend-2882c0bcace3.herokuapp.com/criardocumeto", {
        nome,
        uid,
      })
      .then((response) => {
        alert("Cadastro realizado com sucesso!");
        navigate("/");
      })
      .catch((error) => {
        console.log("Falha: ", error);
        alert("Erro ao cadastrar. Por favor, tente novamente.");
        // Lógica adicional em caso de erro
      });
  };

  function handleSignIn(e) {
    e.preventDefault();

    // Validar campos
    if (!nome || !email || !senha) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    // Validar formato do e-mail
    if (!isEmailValid(email)) {
      alert("Por favor, insira um e-mail válido.");
      return;
    }

    // Enviar dados usando axios.post
    axios
      .post("https://smartenergy-backend-2882c0bcace3.herokuapp.com/registrar", {
        email,
        senha,
        nome,
      })
      .then((response) => {
        console.log("Sucesso:", response);
        registrar(response.data);
      })
      .catch((error) => {
        console.log(error);
        alert("Erro ao cadastrar. Por favor, tente novamente.");
        // Lógica adicional em caso de erro
      });
  }

  function handleBack(e) {
    e.preventDefault();

    navigate("/");
  }
  return (
    <div
      style={{
        background: "white",
      }}
    >
      <div
        style={{
          height: "100vh",
          width: "20%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <div
          style={{
            fontFamily: "monospace",
            textAlign: "center",
          }}
          className="container"
        >
          <header
            style={{
              fontSize: "50px",
              color: "blue",
              paddingBottom: "15%",
            }}
            className="header"
          >
            <span>Cadastro</span>
          </header>

          <form>
            <div
              style={{
                marginBottom: "30px",
              }}
              className="inputContainer"
            >
              <label htmlFor="text">Nome</label>
              <br></br>
              <input
                style={{
                  borderRadius: "30px",
                  borderColor: "#b4dff1",
                }}
                type="text"
                name="nome"
                id="nome"
                placeholder="Joaquinaldo"
                onChange={(e) => setNome(e.target.value)}
              />
            </div>

            <div
              style={{
                marginBottom: "30px",
              }}
              className="inputContainer"
            >
              <label htmlFor="email">E-mail</label>
              <br></br>
              <input
                style={{
                  borderRadius: "30px",
                  borderColor: "#b4dff1",
                }}
                type="text"
                name="email"
                id="email"
                placeholder="johndoe@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div
              style={{
                marginBottom: "30px",
              }}
              className="inputContainer"
            >
              <label htmlFor="password">Senha</label>
              <br></br>
              <input
                style={{
                  borderRadius: "30px",
                  borderColor: "#b4dff1",
                }}
                type="password"
                name="password"
                id="password"
                placeholder="senha"
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>

            <button
              style={{
                margin: "10px",
                backgroundColor: "olive",
                color: "white",
                padding: "10px 20px",
                textAlign: "center",
                textDecoration: "none",
                display: "inline-block",
                borderRadius: "5px",
                border: "none",
                cursor: "pointer",
              }}
              className="button"
              onClick={handleBack}
            >
              Voltar
            </button>

            <button
              style={{
                backgroundColor: "blue",
                color: "white",
                padding: "10px 20px",
                textAlign: "center",
                textDecoration: "none",
                display: "inline-block",
                borderRadius: "5px",
                border: "none",
                cursor: "pointer",
              }}
              className="button"
              onClick={handleSignIn}
            >
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
