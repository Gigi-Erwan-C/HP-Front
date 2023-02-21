import { func, string } from 'prop-types';

const SigilElement = ({ img, name, handleClickOnSigil }) => (

  <li>
    <div className="box-inner">
      <img src={img} onClick={handleClickOnSigil} alt={name} />
      <h3 className="house-name"> {name} </h3>
    </div>
  </li>
);

export default SigilElement;

SigilElement.propTypes = {
  name: string.isRequired,
  img: string.isRequired,
  handleClickOnSigil: func.isRequired,
};
