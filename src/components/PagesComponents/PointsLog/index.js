import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import LogItem from './LogItem';
import Navbar from '../../ReusableComponents/Navbar';
import './style.scss';

const PointsLog = () => (
  <div>
    <Helmet>
      <title>Historique des points</title>
    </Helmet>
    <Navbar classColor="logo grey" classLinkColor="menu-link grey" classColorBurger="grey" />
    <div className="professor-interface-container">
      <h2 className="professor-interface-title">Historique des points</h2>
      <div className="professor-interface">
        <div className="profesor-filter">
          <div className="professor-interface-top">
            <div className="button-container">
              <NavLink to="/historique-des-points" type="button" className="select-button selected active">Elèves et maisons</NavLink>
              <NavLink to="/historique-des-points/eleves" type="button" className="select-button">Historique élèves</NavLink>
              <NavLink to="/historique-des-points/maisons" type="button" className="select-button">Historique maisons</NavLink>
            </div>
          </div>
        </div>
        <section className="log-container">
          <LogItem name="" house_name="Serpentard" user_name="Gilbert Montagné" reason="sont généralement de sacrés batards" points="-1000" />
          <LogItem name="Titouan" house_name="Serpentard" user_name="Gilbert Montagné" reason="a mis le feu à la salle de chimie" points="-5" />
          <LogItem name="Titouan" house_name="Serpentard" user_name="Gilbert Montagné" reason="a mis le feu à la salle de chimie" points="-5" />
          <LogItem name="Titouan" house_name="Serpentard" user_name="Gilbert Montagné" reason="a mis le feu à la salle de chimie" points="-5" />

        </section>
      </div>
    </div>
  </div>
);

export default PointsLog;
