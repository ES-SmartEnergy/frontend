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

export var uid = "";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [isLoged, setIsLoged] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    isLoged && navigate("/home");
  }, [isLoged]);

  function handleSignIn(e) {
    e.preventDefault();

    // Validar campos
    if (!email || !senha) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    // Enviar dados usando axios.post
    axios
      .post("https://smartenergy-backend-2882c0bcace3.herokuapp.com/login", {
        email,
        senha,
      })
      .then((response) => {
        //localStorage.setItem('uid', response.data.uid)
        uid = response.data.uid;
        console.log("Sucesso:", response);
        setIsLoged(true);
      })
      .catch((error) => {
        console.log("Credenciais inválidas");
        alert(
          "Credenciais inválidas. Por favor, verifique seu e-mail e senha."
        );
        // Lógica adicional em caso de erro
      });
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
            <span>Login</span>
          </header>

          <form>
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
              Entrar
            </button>

            <div className="footer">
              <Link to="./register">Crie a sua conta aqui</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
