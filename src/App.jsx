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
import NavCourse from "./pages/NavCourse";
import GeneralCourse from "./pages/GeneralCourse";
import ContentCourse from "./pages/ContentCourse";
import MaterialCourse from "./pages/MaterialCourse";
import TestsCourse from "./pages/TestsCourse";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/cadastro" element={<RegisterPage />} />
          <Route element={<Dashboard />} >
            <Route path="/home" element={<Home />} />
            <Route path="/meus-cursos" element={<Courses />} >
              <Route element={<NavCourse />}>
                <Route path="geral_curso" element={<GeneralCourse />} />
                <Route path="conteudo" element={<ContentCourse />} />
                <Route path="materiais" element={<MaterialCourse />} />
                <Route path="avaliacoes" element={<TestsCourse />} />
              </Route>
            </Route>
            <Route path="/atividades" element={<Activities />} />
            <Route path="/calendario" element={<Calendar />} />
            <Route path="/perfil" element={<User />} />
            <Route path="/favoritos" element={<Favorites />} />
            <Route path="/configuracoes" element={<Configurations />} />
            <Route path="/teste" element={<Testes />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
