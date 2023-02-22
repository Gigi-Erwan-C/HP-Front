/* eslint-disable import/no-extraneous-dependencies */
// == Import
import { Route, Routes } from 'react-router-dom';
import Footer from '../Footer';
import Home from '../Home';
import Login from '../Login';
import Lore from '../Lore';
import Account from '../Account';
import Rules from '../Rules';
import LegalNotice from '../LegalNotice';
import Password from '../Password';
import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/regles" element={<Rules />} />
      <Route path="/login" element={<Login />} />
      <Route path="/histoire" element={<Lore />} />
      <Route path="/mon-compte" element={<Account />} />
      <Route path="/mentions-legales" element={<LegalNotice />} />
      <Route path="/mon-compte/mot-de-passe" element={<Password />} />
    </Routes>
    <Footer />
  </div>
);

// == Export
export default App;
