import {BrowserRouter as Router, Route, Routes, Link, Outlet, Navigate} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Giris from './pages/Giris';
import Kayit from './pages/Kayit';
import Portal from './pages/Portal';
import BasvuruFormu from './components/BasvuruFormu';
import BasvuruGoruntule from './components/BasvuruGoruntule';
import Ayarlar from './components/Ayarlar';

function App() {
  return (
   
      <Router>
      <Routes>
        <Route path="/" element={<Giris />} />
        <Route path="/kayit" element={<Kayit />} />
        <Route path="/portal" element={<Portal />} />
        <Route path="/portal/BasvuruFormu" element={<BasvuruFormu/>} />
        <Route path="/portal/BasvuruGoruntule" element={<BasvuruGoruntule/>} />
        <Route path="/portal/Ayarlar" element={<Ayarlar/>}/>
      </Routes>
    </Router>

  );
}

export default App;
