import PropTypes from 'prop-types';
import { Notification } from './NotificationStyle';

export const NotificationMessage = ({ message }) => {
  return <Notification>{message}</Notification>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
