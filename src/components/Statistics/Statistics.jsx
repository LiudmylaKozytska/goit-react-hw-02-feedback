import PropTypes from 'prop-types';
import { NotificationMessage } from 'components/Notification/Notification';
import { StatisticItem, StatisticsList } from './StatisticsStyle';

export const StatisticsBox = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return total === 0 ? (
    <NotificationMessage message="There is no feedback"></NotificationMessage>
  ) : (
    <>
      <StatisticsList>
        <StatisticItem>Good: {good}</StatisticItem>
        <StatisticItem>Neutral: {neutral}</StatisticItem>
        <StatisticItem>Bad: {bad}</StatisticItem>
      </StatisticsList>
      <StatisticItem>Total: {total}</StatisticItem>
      <StatisticItem>Positive Feedback: {positivePercentage}%</StatisticItem>
    </>
  );
};

StatisticsBox.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  //   positiveFeedback: PropTypes.number.isRequired,
};
