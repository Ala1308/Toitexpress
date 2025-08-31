import React from 'react';
import styled, { css } from 'styled-components';
import { theme } from '../../theme';

const variants = {
  info: css`background: ${theme.colors.accent}; color: ${theme.colors.white};`,
  success: css`background: ${theme.colors.success}; color: ${theme.colors.white};`,
  warning: css`background: ${theme.colors.warning}; color: ${theme.colors.black};`,
  neutral: css`background: ${theme.colors.secondaryLight}; color: ${theme.colors.white};`,
};

const StyledBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  padding: 6px 12px;
  border-radius: ${theme.radii.pill};
  ${props => variants[props.variant || 'neutral']}
`;

export default function Badge({ children, variant = 'neutral', ...rest }) {
  return <StyledBadge variant={variant} {...rest}>{children}</StyledBadge>;
}


