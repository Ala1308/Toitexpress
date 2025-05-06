import React from 'react';
import styled, { keyframes } from 'styled-components';

import { theme } from '../theme';
import { useLanguage } from '../contexts/LanguageContext.jsx';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideUp = keyframes`
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const HeroImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 520px;
  display: flex;
  border-radius: 0 0 32px 32px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0,0,0,0.3);
  animation: ${fadeIn} 1s ease-out;
  
  @media (max-width: 768px) {
    height: 420px;
    flex-direction: column;
  }
`;

const ImageHalf = styled.div`
  flex: 1;
  position: relative;
  background-image: url('${props => props.imageUrl}');
  background-size: cover;
  background-position: center;
  transition: transform 0.8s ease;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%);
  }
  
  &:hover {
    transform: scale(1.03);
  }
  
  @media (max-width: 768px) {
    height: 50%;
  }
`;

const LogoOverlay = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  align-items: center;
  z-index: 1;
  animation: ${slideUp} 0.8s ease-out;
`;

const LogoText = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin-left: 12px;
  letter-spacing: 1px;
`;

const ImageOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(to top, rgba(44, 62, 80, 0.9), transparent);
  color: ${theme.colors.textLight};
  padding: 20px;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 500;
  font-family: ${theme.fonts.body};
`;

const PropertyTypeLabel = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
  padding: 8px 16px;
  border-radius: 30px;
  font-size: 0.9rem;
  font-weight: 600;
  font-family: ${theme.fonts.body};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  cursor: help;
  z-index: 2;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    background: ${theme.colors.accent};
  }
  
  &:after {
    content: attr(data-tooltip);
    position: absolute;
    bottom: -40px;
    left: 0;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 5px 10px;
    border-radius: 4px;
    font-size: 0.75rem;
    white-space: nowrap;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s;
    text-transform: none;
    font-weight: normal;
    z-index: 10;
  }
  
  &:hover:after {
    opacity: 1;
    visibility: visible;
    bottom: -35px;
  }
`;

export default function HeroImage() {
  const { translations } = useLanguage();
  
  return (
    <HeroImageContainer>
      <ImageHalf imageUrl="/images/residentialroofingimage.jpg">
        <PropertyTypeLabel data-tooltip={translations.residentialTooltip}>{translations.residentialLabel}</PropertyTypeLabel>
      </ImageHalf>
      <ImageHalf imageUrl="/images/commercialroofingimage.jpeg">
        <PropertyTypeLabel data-tooltip={translations.commercialTooltip}>{translations.commercialLabel}</PropertyTypeLabel>
      </ImageHalf>
      

      
      <ImageOverlay>
        {translations.imageOverlay}
      </ImageOverlay>
    </HeroImageContainer>
  );
}
