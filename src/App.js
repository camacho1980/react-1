//IMPORTAR Landing del index.js
import Landing from './views/Landing/index.js';
// importar Counter del index.js
import Counter from './views/Counter/index.js';
// importar ToDoList
import ToDoList from './views/ToDoList/index.js';
// importar StardWars
import StarWarsCharacters from './views/StarWarsCharacters/index.js';

import logo from './logo.svg';
import './App.css';

function App() {
  // RETORNAR SIEMPRE UN SOLO ELEMENTO HTML
  return (
    <div className="App">
      <header className="App-header">
        
      {/* RENDERIZAR EL COMPONENTE LANDING Y PASAR LA PROP */}
      {/* se pueden agragar mas propiedades como lastLetter */}

        <Landing name="Jorge" lastLetter="o"/>
        {/* <Landing name="Victoria" lastLetter="a"/> */}

        {/* renderizar el componente Counter */}
        <Counter/>
        {/* renderizar el componente ToDoList  */}
        <ToDoList/>
        {/* renderizar el componente StardWarsCharacter */}
        <StarWarsCharacters/>

      </header>
    </div>
  );
}

export default App;
