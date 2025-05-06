import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { theme } from '../theme';

const slideUp = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const StickyContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: ${theme.colors.black};
  padding: 12px 20px;
  box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.2);
  z-index: 100;
  display: none;
  animation: ${slideUp} 0.5s ease-out;
  height: 56px;
  
  @media (max-width: 768px) {
    display: ${props => props.visible ? 'flex' : 'none'};
    align-items: center;
    justify-content: center;
  }
`;

const CTAButton = styled.button`
  width: 100%;
  height: 100%;
  background: transparent;
  color: white;
  font-weight: 700;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  font-family: ${theme.font};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  
  svg {
    width: 20px;
    height: 20px;
    color: ${theme.colors.primary};
  }
`;

const AvailabilityBadge = styled.div`
  position: absolute;
  top: -10px;
  right: 20px;
  background-color: #e74c3c;
  color: white;
  font-size: 0.7rem;
  font-weight: 700;
  padding: 3px 8px;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export default function StickyMobileCTA({ onClick }) {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling 300px
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <StickyContainer visible={visible} data-gtm="cta_sticky">
      <AvailabilityBadge>Limited Time</AvailabilityBadge>
      <CTAButton onClick={onClick}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="7 10 12 15 17 10"></polyline>
          <line x1="12" y1="15" x2="12" y2="3"></line>
        </svg>
        Get 3 Free Quotes
      </CTAButton>
    </StickyContainer>
  );
}
