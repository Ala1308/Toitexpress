import React from 'react';
import styled, { keyframes } from 'styled-components';
import { theme } from '../theme';
import { useLanguage } from '../contexts/LanguageContext.jsx';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const SectionContainer = styled.section`
  background: ${theme.colors.white};
  padding: 80px 20px;
  font-family: ${theme.fonts.body};
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(to right, ${theme.colors.primary}, ${theme.colors.accent}, ${theme.colors.primary});
    opacity: 0.7;
  }
`;

const SectionInner = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  opacity: 0;
  animation: ${fadeIn} 0.8s ease-out forwards;
  animation-delay: 0.2s;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 15px;
  text-align: center;
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
  font-family: ${theme.fonts.heading};
  color: ${theme.colors.secondary};
  letter-spacing: -0.5px;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(to right, ${theme.colors.primary}, ${theme.colors.primaryLight});
    border-radius: ${theme.borderRadius.sm};
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  max-width: 800px;
  margin: 30px auto 60px;
  text-align: center;
  color: ${theme.colors.textMedium};
  font-weight: 400;
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  margin-top: 40px;
  position: relative;
  z-index: 1;
`;

const hexHover = keyframes`
  0% { transform: translateY(0) rotate(0); }
  50% { transform: translateY(-10px) rotate(2deg); }
  100% { transform: translateY(0) rotate(0); }
`;

const BenefitItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 30px 25px;
  border-radius: ${theme.borderRadius.md};
  transition: ${theme.transitions.medium};
  position: relative;
  overflow: hidden;
  background-color: ${theme.colors.white};
  box-shadow: ${theme.shadows.sm};
  
  &:hover {
    box-shadow: ${theme.shadows.lg};
    transform: translateY(-8px);
    
    .hex-icon {
      animation: ${hexHover} 1s ease-in-out;
    }
  }
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(to right, ${theme.colors.primary}, ${theme.colors.primaryLight});
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s ease;
    border-radius: ${theme.borderRadius.sm};
  }
  
  &:hover:before {
    transform: scaleX(1);
  }
`;

const iconPulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const HexIcon = styled.div`
  width: 100px;
  height: 100px;
  margin-bottom: 25px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${theme.transitions.medium};
  
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${props => props.bg || `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.primaryDark})`};
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    box-shadow: ${theme.shadows.md};
    transition: ${theme.transitions.medium};
  }
  
  &:after {
    content: '';
    position: absolute;
    width: 90%;
    height: 90%;
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    background: rgba(255, 255, 255, 0.1);
    z-index: 0;
  }
  
  svg {
    position: relative;
    z-index: 1;
    width: 50px;
    height: 50px;
    color: ${props => props.iconColor || theme.colors.white};
    animation: ${iconPulse} 3s infinite;
    filter: drop-shadow(0 2px 3px rgba(0, 0, 0, 0.2));
  }
`;

const BenefitTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 15px;
  color: ${theme.colors.secondary};
  transition: ${theme.transitions.medium};
  font-family: ${theme.fonts.heading};
  position: relative;
  display: inline-block;
  
  ${BenefitItem}:hover & {
    color: ${theme.colors.primary};
  }
`;

const BenefitText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: ${theme.colors.textMedium};
  font-family: ${theme.fonts.body};
  margin-top: 5px;
`;

const BenefitValue = styled.div`
  font-size: 2.5rem;
  font-weight: 800;
  color: ${theme.colors.primary};
  margin: 15px 0;
  position: relative;
  display: inline-block;
  font-family: ${theme.fonts.heading};
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.05);
  
  &:after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 3px;
    background: linear-gradient(to right, ${theme.colors.accent}, ${theme.colors.accentDark});
    border-radius: ${theme.borderRadius.sm};
  }
`;

const GuaranteeBox = styled.div`
  background: linear-gradient(to right, ${theme.colors.bgLight}, ${theme.colors.bgMedium}, ${theme.colors.bgLight});
  padding: 25px;
  border-radius: ${theme.borderRadius.md};
  box-shadow: ${theme.shadows.md};
  text-align: center;
  font-family: ${theme.fonts.body};
  border-left: 5px solid ${theme.colors.primary};
  font-size: 1.1rem;
  line-height: 1.5;
  max-width: 800px;
  margin: 0 auto;
  
  strong {
    color: ${theme.colors.primary};
    font-weight: 700;
  }
`;

export default function BenefitsSection() {
  const { translations } = useLanguage();
  
  return (
    <SectionContainer>
      <SectionInner>
        <SectionTitle>{translations.benefitsTitle || 'Arrêtez de Composer. Commencez à Comparer.'}</SectionTitle>
        <SectionSubtitle>
          {translations.benefitsSubtitle || 'Les propriétaires qui appellent les couvreurs un par un attendent 4–6 jours pour un seul devis et paient 15 à 25% plus cher en moyenne. Notre service change la donne : nos pros vous appellent et se font concurrence sur les prix en moins de 24 heures.'}
        </SectionSubtitle>
        
        <BenefitsGrid>
          <BenefitItem>
            <HexIcon className="hex-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
            </HexIcon>
            <BenefitTitle>{translations.timeSavedTitle || 'Time Saved'}</BenefitTitle>
            <BenefitValue>{translations.timeSavedValue || '2 min'}</BenefitValue>
            <BenefitText>{translations.timeSavedText || 'Quick form vs. days of phone tag'}</BenefitText>
          </BenefitItem>
          
          <BenefitItem>
            <HexIcon className="hex-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
              </svg>
            </HexIcon>
            <BenefitTitle>{translations.moneySavedTitle || 'Money Saved'}</BenefitTitle>
            <BenefitValue>{translations.moneySavedValue || '$3,200'}</BenefitValue>
            <BenefitText>{translations.moneySavedText || 'Average savings on a full replacement'}</BenefitText>
          </BenefitItem>
          
          <BenefitItem>
            <HexIcon className="hex-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </HexIcon>
            <BenefitTitle>{translations.peaceOfMindTitle || 'Peace of Mind'}</BenefitTitle>
            <BenefitValue>{translations.peaceOfMindValue || '100%'}</BenefitValue>
            <BenefitText>{translations.peaceOfMindText || 'Licensed, insured, and warranty-backed'}</BenefitText>
          </BenefitItem>
        </BenefitsGrid>
        
        <div style={{ textAlign: 'center', marginTop: '60px' }}>
          <GuaranteeBox>
            {translations.noQuotesPromise ? (
              <span dangerouslySetInnerHTML={{ __html: translations.noQuotesPromise }} />
            ) : (
              <><strong>Pas de devis en 24h?</strong> Nous vous offrirons une <strong>carte cadeau de 50$</strong>—sans condition.</>
            )}
          </GuaranteeBox>
          <p style={{ 
            fontSize: '0.95rem', 
            color: theme.colors.textMedium, 
            marginTop: '20px',
            fontStyle: 'italic'
          }}>
            {translations.savingsFootnote ? (
              <span dangerouslySetInnerHTML={{ __html: translations.savingsFootnote }} />
            ) : (
              <>* Based on 56 full replacements, Jan–Mar 2025.</>
            )}
          </p>
        </div>
      </SectionInner>
    </SectionContainer>
  );
}
