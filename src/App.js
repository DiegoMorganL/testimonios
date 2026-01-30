import './App.css';
import Logo from './componentes/Logo';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className="App">
      <Logo />
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen los miembros de fsociety: Eliot</h1>
        <div className='contenedor-testimonios'>
          <Testimonio 
            nombre='Elliot Anderson'
            imagen='eliot'
            pais='Estados Unidos'
            puesto='Ingeniero de ciberseguridad'
            empresa='AllSafe'
            testimonio='La primera vez que me conecté a fsociety sentí que por fin algo tenía sentido. No se trata solo de hackear sistemas, sino de derribar las cadenas invisibles que nos controlan. Esta revolución no es una opción, es el único camino.'/>

            <Testimonio 
            nombre='Elliot Anderson'
            imagen='eliot'
            pais='Estados Unidos'
            puesto='Ingeniero de ciberseguridad'
            empresa='AllSafe'
            testimonio='La primera vez que me conecté a fsociety sentí que por fin algo tenía sentido. No se trata solo de hackear sistemas, sino de derribar las cadenas invisibles que nos controlan. Esta revolución no es una opción, es el único camino.'/>
        </div>
      </div>
    </div>
  );
}

export default App;
