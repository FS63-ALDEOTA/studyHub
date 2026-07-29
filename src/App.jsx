

import './App.css'
import { Logo } from './components/Logo/Logo'

function App() {

  return (
    <>
      <h1>Carlos</h1>
      <h1>Nayara</h1>
      <h1>Rafael</h1>
      <h1>Domingos</h1>
      <h1>Raul Teles</h1>
      <h1>William</h1>

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
    </>
  );
}

export default App
