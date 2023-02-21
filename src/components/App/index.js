/* eslint-disable import/no-extraneous-dependencies */
// == Import
import { Route, Routes } from 'react-router-dom';
import Footer from '../Footer';
import Home from '../Home';
import Login from '../Login';
import Account from '../Account';
import LegalNotice from '../LegalNotice';
import Password from '../Password';
import './styles.css';

// == Composant
const App = () => (
  <div className="app">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/account" element={<Account />} />
      <Route path="/mentions-legales" element={<LegalNotice />} />
      <Route path="/mon-compte/mot-de-passe" element={<Password />} />
    </Routes>
    <Footer />
  </div>

);

// == Export
export default App;
