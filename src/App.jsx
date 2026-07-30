import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Dashboard from "./pages/Dashboard";
// import { Logo } from './components/Logo/Logo'
// import SideBar from './components/SideBar'

function App() {

  return (
    <>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>} /> 
        <Route path="/cadastro" element={<RegisterPage/>} /> 
        <Route path="/home" element={<Dashboard/>} /> 
      </Routes>
    </BrowserRouter>









      {/* <Logo variant="outline" color="claro" size="md">
        <Logo.Icon />
        <Logo.Text />
      </Logo>

      <Logo variant="filled" color="roxo" size="md">
        <Logo.Icon />
        <Logo.Text />
      </Logo>

      <Logo variant="outline" color="claro" size="lg">
        <Logo.Icon />
        {/* <Logo.Text /> */}
      {/* </Logo>

      <Logo variant="filled" color="roxo" size="lg">
        <Logo.Icon />
        <Logo.Text />
      </Logo>
      <SideBar/> */} 
    </>
  );
}

export default App
