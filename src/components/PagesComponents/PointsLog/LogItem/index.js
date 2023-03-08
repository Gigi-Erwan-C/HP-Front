import PropTypes from 'prop-types';

const LogItem = ({
  student_id, house_id, value, content, user_id, created_at,
}) => {
  const rawDate = created_at;
  const dateObj = new Date(rawDate);
  const formattedDate = dateObj.toLocaleDateString();
  return (
    <article className="log-item">
      <div className="log-date">{formattedDate}</div>
      <div className="log-student-name">{student_id}</div>
      <div className="log-house-name">Maison {house_id}</div>
      <div className="log-points">{value} points</div>
      <div className="log-reason">{content}</div>
      <div className="log-teacher">Par {user_id}</div>
    </article>
  );
};

export default LogItem;

LogItem.propTypes = {
  student_id: PropTypes.object.isRequired,
  house_id: PropTypes.string.isRequired,
  user_id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  created_at: PropTypes.string.isRequired,
};
