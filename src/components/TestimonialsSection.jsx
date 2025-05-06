import React from 'react';
import styled from 'styled-components';
import { theme } from '../theme';
import { useLanguage } from '../contexts/LanguageContext.jsx';

const SectionContainer = styled.section`
  background: #fff;
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
  margin-bottom: 40px;
  text-align: center;
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: ${theme.colors.primary};
  }
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

const TestimonialCard = styled.div`
  background: #f8f8f8;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  }
`;

const QuoteIcon = styled.div`
  font-size: 3rem;
  color: ${theme.colors.primary};
  line-height: 1;
  margin-bottom: 5px;
  font-family: Georgia, serif;
`;

const StarRating = styled.div`
  color: ${theme.colors.primary};
  font-size: 1.2rem;
  margin-bottom: 15px;
  display: flex;
  gap: 2px;
`;

const TestimonialText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
  margin-bottom: 20px;
  flex-grow: 1;
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
`;

const AuthorPhoto = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 15px;
  background-color: #ddd;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  border: 2px solid ${theme.colors.primary};
`;

const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const AuthorName = styled.span`
  font-weight: 700;
  font-size: 1rem;
`;

const AuthorLocation = styled.span`
  font-size: 0.9rem;
  color: #666;
`;

const ActualClientTag = styled.div`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.black};
  font-size: 0.7rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 4px;
  display: inline-block;
  margin-left: 10px;
  text-transform: uppercase;
`;

const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

export default function TestimonialsSection() {
  const { translations } = useLanguage();
  
  return (
    <SectionContainer>
      <SectionInner>
        <SectionTitle>{translations.testimonialsTitle}</SectionTitle>
        
        <TestimonialsGrid>
          <TestimonialCard>
            <QuoteIcon>"</QuoteIcon>
            <StarRating>
              <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
            </StarRating>
            <TestimonialText>
              {translations.testimonial1Text}
            </TestimonialText>
            <TestimonialAuthor>
              <AuthorPhoto src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80" />
              <AuthorInfo>
                <AuthorName>{translations.testimonial1Name} <ActualClientTag>{translations.actualClient}</ActualClientTag></AuthorName>
                <AuthorLocation>{translations.testimonial1Location}</AuthorLocation>
              </AuthorInfo>
            </TestimonialAuthor>
          </TestimonialCard>
          
          <TestimonialCard>
            <QuoteIcon>"</QuoteIcon>
            <StarRating>
              <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
            </StarRating>
            <TestimonialText>
              {translations.testimonial2Text}
            </TestimonialText>
            <TestimonialAuthor>
              <AuthorPhoto src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80" />
              <AuthorInfo>
                <AuthorName>{translations.testimonial2Name}</AuthorName>
                <AuthorLocation>{translations.testimonial2Location}</AuthorLocation>
              </AuthorInfo>
            </TestimonialAuthor>
          </TestimonialCard>
          
          <TestimonialCard>
            <QuoteIcon>"</QuoteIcon>
            <StarRating>
              <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
            </StarRating>
            <TestimonialText>
              {translations.testimonial3Text}
            </TestimonialText>
            <TestimonialAuthor>
              <AuthorPhoto src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80" />
              <AuthorInfo>
                <AuthorName>{translations.testimonial3Name} <ActualClientTag>{translations.actualClient}</ActualClientTag></AuthorName>
                <AuthorLocation>{translations.testimonial3Location}</AuthorLocation>
              </AuthorInfo>
            </TestimonialAuthor>
          </TestimonialCard>
        </TestimonialsGrid>
      </SectionInner>
    </SectionContainer>
  );
}
