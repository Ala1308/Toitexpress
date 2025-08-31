import React, { useEffect, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { theme } from '../theme';
import { useLanguage } from '../contexts/LanguageContext.jsx';

const SectionContainer = styled.section`
  background: #f8f8f8;
  padding: 60px 20px;
  font-family: ${theme.font};
`;

const SectionInner = styled.div`
  max-width: 1140px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 50px;
  text-align: center;
`;

const StepsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Step = styled.div`
  flex: 1;
  min-width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  padding: 0 15px;
  
  &:not(:last-child):after {
    content: '';
    position: absolute;
    top: 40px;
    right: -30px;
    width: 60px;
    height: 2px;
    background: ${theme.colors.primary};
    
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const glow = keyframes`
  0% { box-shadow: 0 0 0 rgba(230,126,34,0); }
  50% { box-shadow: 0 0 0 10px rgba(230,126,34,0.25); }
  100% { box-shadow: 0 0 0 rgba(230,126,34,0); }
`;

const StepNumber = styled.div`
  width: 80px;
  height: 80px;
  background: ${theme.colors.primary};
  color: ${theme.colors.black};
  font-size: 2rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  ${props => props.active && css`animation: ${glow} 1.6s ease-in-out infinite; background: ${theme.colors.accent}; color: ${theme.colors.white};`}
`;

const StepTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 10px;
`;

const StepDescription = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #444;
`;

export default function HowItWorksSection() {
  const { translations } = useLanguage();
  const [active, setActive] = useState(1);
  
  useEffect(() => {
    const id = setInterval(() => {
      setActive(prev => (prev % 3) + 1);
    }, 1800);
    return () => clearInterval(id);
  }, []);
  
  return (
    <SectionContainer>
      <SectionInner>
        <SectionTitle>{translations.howItWorksTitle}</SectionTitle>
        
        <StepsContainer>
          <Step>
            <StepNumber active={active === 1}>{translations.step1Number}</StepNumber>
            <StepTitle>{translations.step1Title}</StepTitle>
            <StepDescription>{translations.step1Description}</StepDescription>
          </Step>
          
          <Step>
            <StepNumber active={active === 2}>{translations.step2Number}</StepNumber>
            <StepTitle>{translations.step2Title}</StepTitle>
            <StepDescription>{translations.step2Description}</StepDescription>
          </Step>
          
          <Step>
            <StepNumber active={active === 3}>{translations.step3Number}</StepNumber>
            <StepTitle>{translations.step3Title}</StepTitle>
            <StepDescription>{translations.step3Description}</StepDescription>
          </Step>
        </StepsContainer>
      </SectionInner>
    </SectionContainer>
  );
}
