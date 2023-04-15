import PropTypes from 'prop-types';
import { SectionStyle } from './SectionStyle';
import { Title } from './SectionStyle';

export const Section = ({ title, children }) => {
  return (
    <SectionStyle>
      {<Title>{title}</Title>}
      {children}
    </SectionStyle>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};
