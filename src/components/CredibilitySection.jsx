import React from 'react';
import styled from 'styled-components';
import { theme } from '../theme';

const SectionContainer = styled.section`
  background: ${theme.colors.bgLight};
  padding: 60px 20px;
  font-family: ${theme.fonts.body};
`;

const SectionInner = styled.div`
  max-width: 1140px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 40px;
  text-align: center;
  font-family: ${theme.fonts.heading};
  color: ${theme.colors.secondary};
`;

const BadgesContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
  margin-bottom: 40px;
`;

const Badge = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 180px;
`;

const BadgeIcon = styled.div`
  width: 80px;
  height: 80px;
  background: ${theme.colors.secondary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  
  svg {
    width: 40px;
    height: 40px;
    color: ${theme.colors.accent};
  }
`;

const BadgeLabel = styled.p`
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.4;
  font-family: ${theme.fonts.body};
  color: ${theme.colors.secondary};
`;

const GuaranteeBox = styled.div`
  background: #fff;
  border: 2px solid ${theme.colors.primary};
  border-radius: 8px;
  padding: 25px;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  
  strong {
    color: ${theme.colors.primary};
  }
`;

const GuaranteeText = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.5;
  margin: 0;
  font-family: ${theme.fonts.body};
  color: ${theme.colors.secondary};
`;

export default function CredibilitySection() {
  return (
    <SectionContainer>
      <SectionInner>
        <SectionTitle>ToitExpress : Notre Engagement Qualité</SectionTitle>
        
        <BadgesContainer>
          <Badge>
            <BadgeIcon>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <path d="M9 12l2 2 4-4"/>
              </svg>
            </BadgeIcon>
            <BadgeLabel>Entrepreneurs certifiés et assurés</BadgeLabel>
          </Badge>
          
          <Badge>
            <BadgeIcon>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <path d="M12 8v8m-4-4h8"/>
              </svg>
            </BadgeIcon>
            <BadgeLabel>Garantie de 10 ans sur la main-d'œuvre</BadgeLabel>
          </Badge>
          
          <Badge>
            <BadgeIcon>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </BadgeIcon>
            <BadgeLabel>Plus de 200 avis 5 étoiles</BadgeLabel>
          </Badge>
        </BadgesContainer>
        
        <GuaranteeBox>
          <GuaranteeText>
            Si vous ne recevez pas trois devis dans les 24h, nous vous offrirons une carte cadeau de 50$.
          </GuaranteeText>
        </GuaranteeBox>
      </SectionInner>
    </SectionContainer>
  );
}
