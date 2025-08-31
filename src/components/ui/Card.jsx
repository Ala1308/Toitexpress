import React from 'react';
import styled from 'styled-components';
import { theme } from '../../theme';

const Wrapper = styled.div`
  background: ${theme.colors.white};
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.md};
  padding: 24px;
`;

export default function Card({ children, ...rest }) {
  return <Wrapper {...rest}>{children}</Wrapper>;
}


