import Header from '../Header';
import gryffindorSigil from '../../assets/img/blason-gryffondor.png';
import slytherinSigil from '../../assets/img/blason-serpentard.png';
import ravenclawSigil from '../../assets/img/blason-serdaigle.png';
import hufflepuffSigil from '../../assets/img/blason-poufsouffle.png';
import './style.scss';

const Lore = () => {
  const handleClick = (event) => {
    console.log(event.target.alt);
  };
  return (

    <div>
      <Header />
      <div className="lore-wrapper">
        <h2 className="lore-title">Bienvenue à Poudlard!</h2>
        <ul className="house-sigils">
          <li>
            <img src={gryffindorSigil} onClick={handleClick} alt="gryffondor" />
            <h3 className="house-name"> Gryffondor </h3>
          </li>
          <li>
            <img src={slytherinSigil} onClick={handleClick} alt="serpentard" />
            <h3 className="house-name"> Serpentard </h3>
          </li>
          <li>
            <img src={ravenclawSigil} onClick={handleClick} alt="serdaigle" />
            <h3 className="house-name"> Serdaigle </h3>
          </li>
          <li>
            <img src={hufflepuffSigil} onClick={handleClick} alt="poufsouffle" />
            <h3 className="house-name"> Poufsouffle </h3>
          </li>
        </ul>
        <div className="house-lore">
          <div className="house-lore__mid-border">
            <div className="house-lore__inner-border">
              <div className="parchment-effect">
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
