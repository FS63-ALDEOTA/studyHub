import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import Activities from "./pages/Activities";
import Calendar from "./pages/Calendar";
import Configurations from "./pages/Configurations";
import Favorites from "./pages/Favorites";
import User from "./pages/User";
import Home from "./pages/Home";
import Testes from "./pages/Testes";

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>} /> 
        <Route path="/cadastro" element={<RegisterPage/>} /> 
        <Route element={<Dashboard/>} > 
          <Route path="/home" element={<Home/>} /> 
          <Route path="/meus-cursos" element={<Courses/>} /> 
          <Route path="/atividades" element={<Activities/>} /> 
          <Route path="/calendario" element={<Calendar/>} /> 
          <Route path="/perfil" element={<User/>} /> 
          <Route path="/favoritos" element={<Favorites/>} /> 
          <Route path="/configuracoes" element={<Configurations/>} />
          <Route path="/teste" element={<Testes/>} />
        </Route> 
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App
