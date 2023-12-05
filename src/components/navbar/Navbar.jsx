import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div
        style={{
          fontStyle: "normal",
          fontWeight: "700",
          backgroundColor: "#ffffff",
          marginBottom: "5px",
        }}
      >
        <div
          style={{
            width: "15%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Nav variant="underline">
            <Nav.Item>
              <Nav.Link
                style={{
                  color: "#231855",
                }}
                as={Link}
                to="/home"
              >
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                style={{
                  color: "#231855",
                }}
                as={Link}
                to="/dados"
              >
                Dados
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                style={{
                  color: "#231855",
                }}
                as={Link}
                to="/"
              >
                Sair
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
