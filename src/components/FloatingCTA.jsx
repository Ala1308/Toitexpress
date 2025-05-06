import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { theme } from '../theme';
import { useLanguage } from '../contexts/LanguageContext.jsx';

const slideIn = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 rgba(230, 126, 34, 0.4);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(230, 126, 34, 0.6);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 rgba(230, 126, 34, 0.4);
  }
`;

const FloatingBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: linear-gradient(90deg, ${theme.colors.bgDark}, ${theme.colors.secondary});
  color: ${theme.colors.white};
  padding: 15px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: ${theme.shadows.lg};
  z-index: 900;
  transform: translateY(${props => (props.isVisible ? '0' : '-100%')});
  transition: ${theme.transitions.medium};
  animation: ${slideIn} 0.5s ease forwards;
  border-bottom: 2px solid ${theme.colors.primary};
  
  @media (max-width: 768px) {
    padding: 12px 15px;
    flex-direction: column;
    gap: 10px;
  }
`;

const FloatingText = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  font-family: ${theme.fonts.heading};
  letter-spacing: 0.5px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  
  &:before {
    content: '\2605'; /* Étoile */
    margin-right: 8px;
    color: ${theme.colors.primary};
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
    text-align: center;
    margin-bottom: 5px;
  }
`;

const FloatingButton = styled.button`
  background: linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.primaryDark});
  color: ${theme.colors.white};
  border: none;
  border-radius: ${theme.borderRadius.md};
  padding: 10px 20px;
  font-weight: 700;
  font-size: 1.1rem;
  cursor: pointer;
  transition: ${theme.transitions.medium};
  font-family: ${theme.fonts.heading};
  animation: ${pulse} 2.5s infinite ease-in-out;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: ${theme.transitions.medium};
  }
  
  &:hover {
    background: linear-gradient(135deg, ${theme.colors.primaryDark}, ${theme.colors.primary});
    transform: translateY(-3px) scale(1.05);
    box-shadow: ${theme.shadows.md};
    
    &:before {
      left: 100%;
    }
  }
  
  &:active {
    transform: translateY(0) scale(0.98);
  }
  
  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 1rem;
    width: 100%;
  }
`;

const FloatingCTA = ({ onButtonClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { translations } = useLanguage();
  
  useEffect(() => {
    const handleScroll = () => {
      // Afficher le bouton flottant après avoir défilé de 200px pour une meilleure visibilité
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return isVisible ? (
    <FloatingBar isVisible={isVisible}>
      <FloatingText>
        {translations.headlineAddOn}
      </FloatingText>
      <FloatingButton onClick={onButtonClick}>
        {translations.getQuotes}
      </FloatingButton>
    </FloatingBar>
  ) : null;
};

export default FloatingCTA;
