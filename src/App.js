import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import HeroSection from './components/HeroSection';
import { theme } from './theme';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap');
  body {
    margin: 0;
    font-family: ${theme.font};
    background: #f7f7f7;
    color: #222;
  }
`;

const AppContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  overflow-x: hidden;
`;

function App() {
  const handleCTAClick = () => {
    // Scroll to form or handle CTA
    const form = document.getElementById('lead-form');
    if (form) form.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AppContainer>
      <GlobalStyle />
      <HeroSection onCTAClick={handleCTAClick} />
      {/* Additional sections will go here */}
    </AppContainer>
  );
}

export default App;
