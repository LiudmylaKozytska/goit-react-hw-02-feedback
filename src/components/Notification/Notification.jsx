import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  return <Notification>{message}</Notification>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
