import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CompromissoForm from './Components/CompromissoForm';

// Supondo que você tenha um componente Home definido em algum lugar
import Home from './Components/Home'; // Ajuste o caminho conforme necessário

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Compromisso" element={<CompromissoForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
