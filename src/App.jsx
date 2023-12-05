import Home from "./components/home/Home";
import Dados from "./components/dados/Dados";
import Login from "./components/login/Login";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./components/login/Register";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          
          <div style={{ backgroundColor: '#b4dff1'}}>
            <Routes>
              <Route path="/" element={<Login />}></Route>
              <Route path="/home" element={<Home />}></Route>
              <Route path="/dados" element={<Dados />}></Route>
              <Route path="/register" element={<Register />}></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
