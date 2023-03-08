import PropTypes from 'prop-types';

const LogItem = ({
  name, house_name, points, reason, user_name,
}) => (
  <article className="log-item">
    <div className="log-student-name">{name}</div>
    <div className="log-house-name">Maison {house_name}</div>
    <div className="log-points">{points} points</div>
    <div className="log-reason">Motif : {reason}</div>
    <div className="log-teacher">Par {user_name}</div>
  </article>

);

export default LogItem;

LogItem.propTypes = {
  name: PropTypes.object.isRequired,
  house_name: PropTypes.string.isRequired,
  user_name: PropTypes.string,
  reason: PropTypes.string.isRequired,
  points: PropTypes.number.isRequired,
};
