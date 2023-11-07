import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import PokemonsContainer from './components/PokemonsContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<PokemonsContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
