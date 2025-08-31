import React from 'react';
import styled, { css } from 'styled-components';
import { theme } from '../../theme';

const baseStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-family: ${theme.fonts.heading};
  font-weight: 700;
  border: none;
  cursor: pointer;
  border-radius: ${theme.borderRadius.md};
  transition: ${theme.transitions.medium};
  position: relative;
  text-decoration: none;
  user-select: none;
`;

const sizeStyles = {
  sm: css`padding: 8px 14px; font-size: 0.9rem;`,
  md: css`padding: 12px 18px; font-size: 1rem;`,
  lg: css`padding: 14px 22px; font-size: 1.05rem;`,
  xl: css`padding: 16px 32px; font-size: 1.2rem;`,
};

const variantStyles = {
  primary: css`
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    box-shadow: 0 8px 20px rgba(230, 126, 34, 0.3);
    &:hover { background: ${theme.colors.accent}; box-shadow: 0 12px 24px rgba(52, 152, 219, 0.4); transform: translateY(-2px); }
    &:active { transform: translateY(0); }
  `,
  secondary: css`
    background: ${theme.colors.secondary};
    color: ${theme.colors.white};
    &:hover { background: ${theme.colors.secondaryLight}; }
  `,
  ghost: css`
    background: transparent;
    color: ${theme.colors.secondary};
    border: 1px solid ${theme.colors.secondaryLight};
    &:hover { background: ${theme.colors.bgLight}; }
  `,
};

const StyledButton = styled.button`
  ${baseStyles}
  ${props => sizeStyles[props.size || 'md']}
  ${props => variantStyles[props.variant || 'primary']}
  ${props => props.pill && css`border-radius: ${theme.radii.pill};`}
`;

export default function Button({ as: Component = 'button', children, size = 'md', variant = 'primary', pill = false, ...rest }) {
  return (
    <StyledButton as={Component} size={size} variant={variant} pill={pill} {...rest}>
      {children}
    </StyledButton>
  );
}


