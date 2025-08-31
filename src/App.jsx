import React, { useRef, useState } from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import HowItWorksSection from './components/HowItWorksSection';

import CredibilitySection from './components/CredibilitySection';
import ScarcityBanner from './components/ScarcityBanner';
import StickyMobileCTA from './components/StickyMobileCTA';
import LanguageSelector from './components/LanguageSelector';
import FormPopup from './components/FormPopup';
import FloatingCTA from './components/FloatingCTA';
import { LanguageProvider } from './contexts/LanguageContext.jsx';
import { theme } from './theme';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    margin: 0;
    font-family: ${theme.fonts.body};
    background: ${theme.colors.bgLight};
    color: ${theme.colors.secondary};
    overflow-x: hidden;
  }
  html {
    scroll-behavior: smooth;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fonts.heading};
    font-weight: 700;
    color: ${theme.colors.secondary};
  }
  p { line-height: 1.65; }
  a {
    color: ${theme.colors.primary};
    text-decoration: none;
    transition: color 0.3s ease;
    &:hover {
      color: ${theme.colors.accent};
    }
  }
  @media (prefers-reduced-motion: reduce) {
    *, *:before, *:after { animation: none !important; transition: none !important; }
  }
`;

const AppContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  overflow-x: hidden;
`;

const Footer = styled.footer`
  background-color: ${theme.colors.bgDark};
  color: ${theme.colors.textLight};
  padding: 40px 0;
  text-align: center;
  border-top: 5px solid ${theme.colors.primary};
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const FooterTagline = styled.p`
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 20px;
  font-family: ${theme.fonts.heading};
  color: ${theme.colors.white};
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
  
  a {
    color: ${theme.colors.textLight};
    text-decoration: none;
    transition: color 0.3s ease;
    font-family: ${theme.fonts.body};
    
    &:hover {
      color: ${theme.colors.primary};
    }
  }
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  opacity: 0.8;
  font-family: ${theme.fonts.body};
`;

function App() {
  const formRef = useRef(null);
  const [showFormPopup, setShowFormPopup] = useState(false);
  
  const scrollToForm = () => {
    const form = document.getElementById('lead-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const handleCTAClick = () => {
    setShowFormPopup(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <LanguageProvider>
        <AppContainer>
          <GlobalStyle />
          <LanguageSelector />
          <HeroSection />
          <ScarcityBanner />
          <BenefitsSection />
          <HowItWorksSection />

          <CredibilitySection />
          
          <FormPopup externalIsVisible={showFormPopup} onClose={() => setShowFormPopup(false)} />
          <FloatingCTA onButtonClick={handleCTAClick} />
          
          <Footer>
            <FooterContent>
              <FooterLinks>
                <a href="#">Politique de confidentialité</a>
                <a href="#">Conditions d'utilisation</a>
                <a href="#">Nous contacter</a>
              </FooterLinks>
              <Copyright>&copy; {new Date().getFullYear()} Tous droits réservés.</Copyright>
            </FooterContent>
          </Footer>
          
          <StickyMobileCTA onClick={scrollToForm} />
        </AppContainer>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
