import React from 'react';
import styled from 'styled-components';
import { theme } from '../../theme';

const Wrapper = styled.section`
  padding: 80px 0;
  background: ${props => props.variant === 'dark' ? theme.colors.bgDark : theme.colors.white};
  color: ${props => props.variant === 'dark' ? theme.colors.textLight : theme.colors.secondary};
`;

export default function Section({ children, variant = 'light', ...rest }) {
  return <Wrapper variant={variant} {...rest}>{children}</Wrapper>;
}


