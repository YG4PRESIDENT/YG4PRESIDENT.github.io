import React from 'react';
import styled from '@emotion/styled';

const CornerTile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme, className }) => theme.colors[className]};
`;

const Corner = ({ className, children }) => {
  return <CornerTile className={className}>{children}</CornerTile>;
};

export default Corner;