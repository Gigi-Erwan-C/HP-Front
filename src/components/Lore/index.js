import Header from '../Header';
import gryffindorSigil from '../../assets/img/blason-gryffondor.png';
import slytherinSigil from '../../assets/img/blason-serpentard.png';
import ravenclawSigil from '../../assets/img/blason-serdaigle.png';
import hufflepuffSigil from '../../assets/img/blason-poufsouffle.png';
import './style.scss';

const Lore = () => {
  const handleClickOnSigil = (event) => {
    console.log(event.target.alt);
  };
  return (

    <div>
      <Header />
      <div className="lore-wrapper">
        <h2 className="lore-title">Bienvenue à Poudlard!</h2>
        <ul className="house-sigils">
          <li>
            <div className="box-inner">
              <img src={gryffindorSigil} onClick={handleClickOnSigil} alt="Gryffondor" />
              <h3 className="house-name"> Gryffondor </h3>
            </div>

          </li>
          <li>
            <div className="box-inner">
              <img src={slytherinSigil} onClick={handleClickOnSigil} alt="Serpentard" />
              <h3 className="house-name"> Serpentard </h3>
            </div>
          </li>
          <li>
            <div className="box-inner">
              <img src={ravenclawSigil} onClick={handleClickOnSigil} alt="Serdaigle" />
              <h3 className="house-name"> Serdaigle </h3>
            </div>
          </li>
          <li>
            <div className="box-inner">
              <img src={hufflepuffSigil} onClick={handleClickOnSigil} alt="Poufsouffle" />
              <h3 className="house-name"> Poufsouffle </h3>
            </div>
          </li>

        </ul>
        <div className="house-lore">
          <div className="house-lore__mid-border">
            <div className="house-lore__inner-border">
              <div className="parchment-effect">
                <h3> L'histoire de Poudlard</h3>
                <p className="lore-text"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt ullam facilis tenetur at nihil sed esse reprehenderit eligendi
                  praesentium natus incidunt provident sapiente aperiam omnis quasi, ipsam voluptas aliquid eaque!
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Deserunt ullam facilis tenetur at nihil sed esse reprehenderit eligendi
                  praesentium natus incidunt provident sapiente aperiam omnis quasi, ipsam voluptas aliquid eaque!
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt ullam facilis tenetur at nihil sed esse reprehenderit eligendi
                  praesentium natus incidunt provident sapiente aperiam omnis quasi, ipsam voluptas aliquid eaque!
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt ullam facilis tenetur at nihil sed esse reprehenderit eligendi
                  praesentium natus incidunt provident sapiente aperiam omnis quasi, ipsam voluptas aliquid eaque!
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt ullam facilis tenetur at nihil sed esse reprehenderit eligendi
                  praesentium natus incidunt provident sapiente aperiam omnis quasi, ipsam voluptas aliquid eaque!
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Deserunt ullam facilis tenetur at nihil sed esse reprehenderit eligendi
                  praesentium natus incidunt provident sapiente aperiam omnis quasi, ipsam voluptas aliquid eaque!
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt ullam facilis tenetur at nihil sed esse reprehenderit eligendi
                  praesentium natus incidunt provident sapiente aperiam omnis quasi, ipsam voluptas aliquid eaque!
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt ullam facilis tenetur at nihil sed esse reprehenderit eligendi
                  praesentium natus incidunt provident sapiente aperiam omnis quasi, ipsam voluptas aliquid eaque!
                  praesentium natus incidunt provident sapiente aperiam omnis quasi, ipsam voluptas aliquid eaque!
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Deserunt ullam facilis tenetur at nihil sed esse reprehenderit eligendi
                  praesentium natus incidunt provident sapiente aperiam omnis quasi, ipsam voluptas aliquid eaque!
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt ullam facilis tenetur at nihil sed esse reprehenderit eligendi
                  praesentium natus incidunt provident sapiente aperiam omnis quasi, ipsam voluptas aliquid eaque!
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt ullam facilis tenetur at nihil sed esse reprehenderit eligendi
                  praesentium natus incidunt provident sapiente aperiam omnis quasi, ipsam voluptas aliquid eaque!
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt ullam facilis tenetur at nihil sed esse reprehenderit eligendi
                  praesentium natus incidunt provident sapiente aperiam omnis quasi, ipsam voluptas aliquid eaque!
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Deserunt ullam facilis tenetur at nihil sed esse reprehenderit eligendi
                  praesentium natus incidunt provident sapiente aperiam omnis quasi, ipsam voluptas aliquid eaque!
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt ullam facilis tenetur at nihil sed esse reprehenderit eligendi
                  praesentium natus incidunt provident sapiente aperiam omnis quasi, ipsam voluptas aliquid eaque!
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt ullam facilis tenetur at nihil sed esse reprehenderit eligendi
                  praesentium natus incidunt provident sapiente aperiam omnis quasi, ipsam voluptas aliquid eaque!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lore;
