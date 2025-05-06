import React from 'react';
import styled from 'styled-components';
import { useLanguage } from '../contexts/LanguageContext.jsx';
import { theme } from '../theme';

const LanguageButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  z-index: 1000;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  font-family: ${theme.font};
  display: flex;
  align-items: center;
  gap: 6px;
  
  &:hover {
    background: ${theme.colors.primary};
    color: ${theme.colors.black};
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const GlobeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);

export default function LanguageSelector() {
  const { translations, toggleLanguage } = useLanguage();
  
  return (
    <LanguageButton onClick={toggleLanguage}>
      <GlobeIcon />
      {translations.language}
    </LanguageButton>
  );
}
