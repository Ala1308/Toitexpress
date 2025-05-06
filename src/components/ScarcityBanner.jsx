import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { theme } from '../theme';
import { useLanguage } from '../contexts/LanguageContext.jsx';

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

const BannerContainer = styled.div`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.black};
  padding: 15px 20px;
  text-align: center;
  font-family: ${theme.font};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, transparent 0%, rgba(255, 255, 255, 0.2) 50%, transparent 100%);
    transform: translateX(-100%);
    animation: shine 3s infinite;
  }
  
  @keyframes shine {
    0% {
      transform: translateX(-100%);
    }
    20% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`;

const BannerText = styled.p`
  margin: 0;
  font-size: 1.1rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
`;

const ClockIcon = styled.div`
  color: ${theme.colors.black};
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${pulse} 2s infinite ease-in-out;
`;

const Highlight = styled.span`
  background-color: ${theme.colors.black};
  color: white;
  padding: 2px 8px;
  border-radius: 4px;
  font-weight: 700;
`;

const CountdownContainer = styled.span`
  font-weight: 700;
  background-color: ${theme.colors.black};
  color: white;
  padding: 2px 8px;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 80px;
`;

export default function ScarcityBanner() {
  const { translations } = useLanguage();
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  
  function calculateTimeLeft() {
    // Set the end time to be 11:59 PM today
    const now = new Date();
    const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);
    const difference = endOfDay - now;
    
    let hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((difference / 1000 / 60) % 60);
    
    return {
      hours: hours < 10 ? `0${hours}` : hours,
      minutes: minutes < 10 ? `0${minutes}` : minutes
    };
  }
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 60000); // Update every minute
    
    return () => clearInterval(timer);
  }, []);
  
  return (
    <BannerContainer>
      <ClockIcon>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      </ClockIcon>
      <BannerText>
        <span>{translations.scarcityText}</span>
        <CountdownContainer>{timeLeft.hours}:{timeLeft.minutes}</CountdownContainer>
      </BannerText>
    </BannerContainer>
  );
}
