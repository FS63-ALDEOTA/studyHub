import './App.css'
import { Logo } from './components/Logo/Logo'
import SideBar from './components/SideBar'

function App() {

  return (
    <>
      <Logo variant="outline" color="claro" size="md">
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
      </Logo>

      <Logo variant="filled" color="roxo" size="lg">
        <Logo.Icon />
        <Logo.Text />
      </Logo>
      <SideBar/>
    </>
  );
}

export default App
