/* eslint-disable import/no-extraneous-dependencies */
// == Import
import { Route, Routes } from 'react-router-dom';
import Footer from '../Footer';
import Home from '../Home';
import Header from '../Header';
import Login from '../Login';
import './styles.css';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} /> { /* Pour l'instant, notre page de login affiche 2 fois la navbar, il faudra faire en sorte de changer le composant header pour pour qu'il affiche seulement la navbar sur cette page */}
    </Routes>
    <Footer />
  </div>

);

// == Export
export default App;
