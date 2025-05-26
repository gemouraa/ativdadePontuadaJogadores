import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TelaInicial from './pages/TelaInicial';
import PaginaCadastro from './pages/Cadastro';
import PaginaListaJogadores from './pages/Lista';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TelaInicial />} />
        <Route path="/cadastro" element={<PaginaCadastro />} />
        <Route path="/jogadores" element={<PaginaListaJogadores />} />
      </Routes>
    </Router>
  );
}

export default App;
