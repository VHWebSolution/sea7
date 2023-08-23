import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Homepage } from './Pages/Homepage';
import { Sobre } from './Pages/SobrePage';
import { Seminovos } from './Pages/SeminovosPage';
import { VendaSeuBarco } from './Pages/VSB';
import { ContatoPage } from './Pages/ContatoPage';
import ProductDetail from './Components/ProductDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/sobre' element={<Sobre />} />
        <Route path='/seminovos' element={<Seminovos />} />
        <Route path='/seminovos/:productId' element={<ProductDetail />} />
        <Route path='/venda-seu-barco' element={<VendaSeuBarco />} />
        <Route path='/contato' element={<ContatoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
