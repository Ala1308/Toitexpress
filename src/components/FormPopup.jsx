import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { theme } from '../theme';
import { useLanguage } from '../contexts/LanguageContext.jsx';
import LeadForm from './LeadForm';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
    filter: blur(5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
`;

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  display: ${props => (props.isVisible ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
  transition: ${theme.transitions.medium};
`;

const PopupContainer = styled.div`
  background: linear-gradient(to bottom, ${theme.colors.white}, ${theme.colors.bgLight});
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.xl};
  width: 100%;
  max-width: 550px;
  padding: 35px;
  position: relative;
  animation: ${fadeIn} 0.6s ease forwards;
  max-height: 90vh;
  overflow-y: auto;
  border-top: 5px solid ${theme.colors.primary};
  
  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: ${theme.colors.bgLight};
    border-radius: 10px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${theme.colors.primary};
    border-radius: 10px;
  }
  
  @media (max-width: 600px) {
    padding: 25px 20px;
    max-width: 95%;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: ${theme.colors.bgLight};
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${theme.colors.secondary};
  transition: ${theme.transitions.fast};
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${theme.borderRadius.circle};
  
  &:hover {
    color: ${theme.colors.primary};
    background: ${theme.colors.bgMedium};
    transform: rotate(90deg);
  }
  
  &:focus {
    outline: 2px solid ${theme.colors.primary};
    outline-offset: 2px;
  }
`;

const PopupTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 25px;
  color: ${theme.colors.secondary};
  font-family: ${theme.fonts.heading};
  text-align: center;
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
  font-weight: 700;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(to right, ${theme.colors.primary}, ${theme.colors.accent}, ${theme.colors.primary});
    border-radius: ${theme.borderRadius.sm};
  }
`;

const FormPopup = ({ externalIsVisible, onClose }) => {
  const [autoIsVisible, setAutoIsVisible] = useState(false);
  const { translations } = useLanguage();
  
  // Déterminer si le popup doit être visible (soit par timer automatique, soit par contrôle externe)
  const isVisible = externalIsVisible || autoIsVisible;
  
  useEffect(() => {
    // Enregistrer le temps de début
    const startTime = new Date().getTime();
    console.log('FormPopup: Timer started at', new Date().toISOString());
    
    // Afficher le popup après exactement 15 secondes
    const timer = setTimeout(() => {
      const endTime = new Date().getTime();
      const elapsedTime = (endTime - startTime) / 1000;
      console.log('FormPopup: Popup triggered after', elapsedTime, 'seconds');
      setAutoIsVisible(true);
    }, 15000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const closePopup = () => {
    setAutoIsVisible(false);
    // Si le popup a été ouvert depuis l'extérieur, informer le parent
    if (onClose) {
      onClose();
    }
    // Ne plus stocker l'état dans sessionStorage pour permettre la réapparition
  };
  
  return (
    <PopupOverlay isVisible={isVisible} onClick={closePopup}>
      <PopupContainer onClick={e => e.stopPropagation()}>
        <CloseButton onClick={closePopup}>&times;</CloseButton>
        <PopupTitle>{translations.formTitle}</PopupTitle>
        <LeadForm isPopup={true} />
      </PopupContainer>
    </PopupOverlay>
  );
};

export default FormPopup;
