/* eslint-disable import/no-extraneous-dependencies */
// == Import
import { Route, Routes } from 'react-router-dom';
import Footer from '../Footer';
import Home from '../Home';
import Login from '../Login';
import './styles.css';

// == Composant
const App = () => (
  <div className="app">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    <Footer />
  </div>

);

// == Export
export default App;
