import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import HeroImage from './HeroImage';

import LeadForm from './LeadForm';
import Button from './ui/Button';
import Container from './ui/Container';
import { theme } from '../theme';
import { useLanguage } from '../contexts/LanguageContext.jsx';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const HeroContainer = styled.section`
  background: ${theme.colors.bgDark};
  color: #fff;
  font-family: ${theme.fonts.body};
  min-height: 540px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 0;
  padding-bottom: 60px;
`;

const HeroContent = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  margin-top: -60px;
  animation: ${fadeIn} 0.8s ease-out;
`;

const LogoContainer = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const LogoText = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin-left: 12px;
  letter-spacing: 1px;
`;

const Headline = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin: 28px 0 10px 0;
  text-align: center;
  letter-spacing: 0.01em;
  line-height: 1.2;
  font-family: ${theme.fonts.heading};
  color: ${theme.colors.textLight};
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const HeadlineAddOn = styled.div`
  font-size: 1rem;
  font-weight: 500;
  margin: 5px 0 15px 0;
  text-align: center;
  color: ${theme.colors.textLight};
`;

const Subheadline = styled.h2`
  font-size: 1.2rem;
  font-weight: 400;
  margin: 0 0 24px 0;
  text-align: center;
  color: ${theme.colors.textLight};
  max-width: 800px;
  line-height: 1.5;
  font-family: ${theme.fonts.body};
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
`;

const MicroTrustBar = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  padding: 8px 20px;
  font-size: 0.9rem;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  backdrop-filter: blur(5px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const TrustItem = styled.span`
  display: flex;
  align-items: center;
  
  &:not(:last-child):after {
    content: '\u2022';
    margin-left: 15px;
    color: ${theme.colors.primary};
  }
`;

const HeroContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  width: 100%;
  margin-top: 20px;
  animation: ${fadeIn} 0.5s ease-out;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const HeroTextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Footer = styled.footer`
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
  margin-top: 30px;
  max-width: 800px;
`;

const AnimatedCTA = styled(Button)`
  margin: 30px 0;
  animation: ${pulse} 2s infinite ease-in-out;
  svg { width: 24px; height: 24px; }
`;

export default function HeroSection() {
  const [showForm, setShowForm] = useState(false);
  const { translations } = useLanguage();
  
  const handleShowForm = () => {
    setShowForm(true);
    try {
      window.dispatchEvent(new CustomEvent('inlineFormShown'));
    } catch {}
    setTimeout(() => {
      document.getElementById('lead-form').scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };
  
  return (
    <HeroContainer>
      <HeroImage />
      
      <HeroContent>

        
        <Headline>
          {translations.headline1}<br />
          {translations.headline2}<br />
          {translations.headline3}
        </Headline>
        <HeadlineAddOn>{translations.headlineAddOn}</HeadlineAddOn>
        <Subheadline>
          {translations.subheadline}
        </Subheadline>
        
        <MicroTrustBar>
          <TrustItem>{translations.free}</TrustItem>
          <TrustItem>{translations.licensedPros}</TrustItem>
          <TrustItem>{translations.fullyInsured}</TrustItem>
          <TrustItem>{translations.saveAverage}</TrustItem>
          <TrustItem>{translations.residentialCommercial}</TrustItem>
        </MicroTrustBar>
        
        {!showForm ? (
          <AnimatedCTA size="xl" onClick={handleShowForm} data-gtm="cta_hero_button" pill>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            {translations.getQuotes}
          </AnimatedCTA>
        ) : (
          <HeroContentGrid>
            <HeroTextContent>
              {/* This space intentionally left empty for layout balance */}
            </HeroTextContent>
            <LeadForm id="lead-form" />
          </HeroContentGrid>
        )}
        
        {translations.footnote ? (
          <Footer>{translations.footnote}</Footer>
        ) : null}
      </HeroContent>
    </HeroContainer>
  );
}
