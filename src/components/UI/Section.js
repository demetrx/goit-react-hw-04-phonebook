import PropTypes from 'prop-types';
import { SectionStyled, Title } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <SectionStyled>
      <Title>{title}</Title>
      {children}
    </SectionStyled>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
