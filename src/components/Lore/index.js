import Header from '../Header';
import gryffindorSigil from '../../assets/img/blason-gryffondor.png';
import slytherinSigil from '../../assets/img/blason-serpentard.png';
import ravenclawSigil from '../../assets/img/blason-serdaigle.png';
import hufflepuffSigil from '../../assets/img/blason-poufsouffle.png';
import './style.scss';

const Lore = () => {
  const handleClick = () => {
    console.log('coucou');
  };
  return (

    <div>
      <Header />
      <div className="lore-wrapper">
        <h2 className="lore-title">Bienvenue à Poudlard!</h2>
        <div className="house-sigils">
          <div>
            <img src={gryffindorSigil} alt="" onClick={handleClick} />
            <h3> Gryffondor </h3>
          </div>
          <div>
            <img src={slytherinSigil} alt="" onClick={handleClick} />
            <h3> Serpentard </h3>
          </div>
          <div>
            <img src={ravenclawSigil} alt="" onClick={handleClick} />
            <h3> Serdaigle </h3>
          </div>
          <div>
            <img src={hufflepuffSigil} alt="" onClick={handleClick} />
            <h3> Poufsouffle </h3>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Lore;
