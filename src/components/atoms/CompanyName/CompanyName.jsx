import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Company = styled.p`
  color: ${({ theme }) => theme.colors.orange};
  letter-spacing: 0.1rem;
  margin-bottom: 10px;
`;

const CompanyName = ({ name }) => {
  return <Company>{name}</Company>;
};

CompanyName.propTypes = {
  name: PropTypes.string.isRequired,
};

export default CompanyName;
