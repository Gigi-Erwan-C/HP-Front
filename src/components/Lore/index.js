import { useState } from 'react';
import Header from '../Header';
import LoreDefault from './DefaultLore';
import LoreGryffindor from './Gryffindor';
import LoreHufflepuff from './Hufflepuff';
import LoreSlytherin from './Slytherin';
import LoreRavenclaw from './Ravenclaw';
import SigilElement from './SigilElement';
import gryffindorSigil from '../../assets/img/blason-gryffondor.png';
import slytherinSigil from '../../assets/img/blason-serpentard.png';
import ravenclawSigil from '../../assets/img/blason-serdaigle.png';
import hufflepuffSigil from '../../assets/img/blason-poufsouffle.png';
import './style.scss';

const Lore = () => {
  let returnedComponent;
  const [selectedHouse, setHouse] = useState('default');
  const handleClickOnSigil = (event) => {
    console.log(selectedHouse);
    setHouse(event.target.alt);
    console.log(selectedHouse);
  };
  if (selectedHouse === 'default') {
    returnedComponent = <LoreDefault />;
  }
  if (selectedHouse === 'Serpentard') {
    returnedComponent = <LoreSlytherin />;
  }
  if (selectedHouse === 'Poufsouffle') {
    returnedComponent = <LoreHufflepuff />;
  }
  if (selectedHouse === 'Serdaigle') {
    returnedComponent = <LoreRavenclaw />;
  }
  if (selectedHouse === 'Gryffondor') {
    returnedComponent = <LoreGryffindor />;
  }

  return (

    <div>
      <Header />
      <div className="lore-wrapper">
        <h2 className="lore-title">Bienvenue à Poudlard!</h2>
        <ul className="house-sigils">
          {/* Liste des props pour SigilElement: img, name */}
          <SigilElement img={gryffindorSigil} name="Gryffondor" handleClickOnSigil={handleClickOnSigil} />
          <SigilElement img={slytherinSigil} name="Serpentard" handleClickOnSigil={handleClickOnSigil} />
          <SigilElement img={ravenclawSigil} name="Serdaigle" handleClickOnSigil={handleClickOnSigil} />
          <SigilElement img={hufflepuffSigil} name="Poufsouffle" handleClickOnSigil={handleClickOnSigil} />
        </ul>
        <div className="house-lore">
          <div className="house-lore__mid-border">
            <div className="house-lore__inner-border">
              {returnedComponent}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lore;
