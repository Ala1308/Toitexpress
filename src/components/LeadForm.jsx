import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { theme } from '../theme';
// TrustIndicators removed as requested
import { useLanguage } from '../contexts/LanguageContext.jsx';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const FormContainer = styled.div`
  background: #fff;
  border-radius: ${theme.borderRadius.lg};
  padding: 28px;
  box-shadow: ${props => props.isPopup ? 'none' : theme.shadows.lg};
  max-width: 520px;
  width: 100%;
  margin: 0 auto;
  font-family: ${theme.fonts.body};
  animation: ${fadeIn} 0.6s ease-out;
  position: relative;
  overflow: hidden;
  border: 1px solid #e7e9ee;
  
  &:after {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    border-radius: inherit;
    background: linear-gradient(180deg, rgba(0,0,0,0.02), transparent 40%);
  }
`;

const FormTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
`;

const FormField = styled.div`
  margin-bottom: 20px;
  position: relative;
  transition: transform 0.3s ease;
  
  &:focus-within {
    transform: translateX(5px);
  }
`;

const Label = styled.label`
  display: block;
  font-weight: 600;
  margin-bottom: 8px;
  font-size: 0.95rem;
  color: #444;
  transition: color 0.3s ease;
  
  ${FormField}:focus-within & {
    color: ${theme.colors.primary};
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 14px 14px;
  border: 1px solid #dfe3ea;
  border-radius: ${theme.borderRadius.md};
  font-size: 1rem;
  font-family: inherit;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 0 4px ${theme.colors.primary}22;
  }
  
  &.error {
    border-color: #e74c3c;
    box-shadow: 0 0 0 4px rgba(231, 76, 60, 0.12);
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 14px 14px;
  border: 1px solid #dfe3ea;
  border-radius: ${theme.borderRadius.md};
  font-size: 1rem;
  font-family: inherit;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1em;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 0 4px ${theme.colors.primary}22;
  }
  
  &.error {
    border-color: #e74c3c;
    box-shadow: 0 0 0 4px rgba(231, 76, 60, 0.12);
  }
`;

const ErrorMessage = styled.div`
  color: #e74c3c;
  font-size: 0.8rem;
  margin-top: 5px;
  position: absolute;
  bottom: -18px;
  animation: ${fadeIn} 0.3s ease-out;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 16px;
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
  font-weight: 700;
  font-size: 1.1rem;
  border: none;
  border-radius: ${theme.borderRadius.md};
  cursor: pointer;
  transition: all 0.3s;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  overflow: hidden;
  box-shadow: ${theme.shadows.md};
  
  &:hover {
    background: ${theme.colors.accent};
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.lg};
  }
  
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to right,
      transparent 0%,
      rgba(255, 255, 255, 0.2) 50%,
      transparent 100%
    );
    transition: left 0.7s ease;
  }
  
  &:hover:before {
    left: 100%;
  }
  
  svg {
    width: 20px;
    height: 20px;
  }
`;

const FormDisclaimer = styled.p`
  font-size: 0.8rem;
  color: #666;
  text-align: center;
  margin-top: 15px;
  line-height: 1.4;
`;

const FormMicrocopy = styled.p`
  font-size: 0.9rem;
  text-align: center;
  margin-top: 10px;
  color: #444;
`;

const SuccessMessage = styled.div`
  background: #d4edda;
  color: #155724;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  margin-bottom: 20px;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${fadeIn} 0.5s ease-out;
  box-shadow: 0 4px 12px rgba(21, 87, 36, 0.1);
  
  svg {
    width: 50px;
    height: 50px;
    margin-bottom: 15px;
    color: #28a745;
  }
`;

const LoadingSpinner = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: #fff;
  animation: spin 1s ease-in-out infinite;
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;

const HelpText = styled.p`
  font-size: 0.8rem;
  color: #666;
  margin-top: 4px;
  margin-bottom: 0;
  transition: color 0.3s ease;
  
  ${FormField}:focus-within & {
    color: ${theme.colors.primary};
  }
`;

// Hidden honeypot field for spam prevention
const HoneypotField = styled.div`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  height: 0;
  width: 0;
  z-index: -1;
`;

const ProjectTypeGroup = styled.optgroup`
  font-weight: 600;
  font-size: 0.9rem;
  color: #555;
`;

const ProjectTypeLabel = styled.div`
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 8px;
  color: #555;
`;

export default function LeadForm({ id, isPopup = false }) {
  const { translations } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'residential-repair', // Pre-select Residential Repair
    postalCode: '',
    honeypot: '', // Spam prevention field
    fax_number: '' // Additional spam prevention field
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = translations.nameRequired;
    }
    
    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = translations.emailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = translations.emailInvalid;
    }
    
    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = translations.phoneRequired;
    } else if (!/^[\d\+\-\(\)\s]{10,15}$/.test(formData.phone.trim())) {
      newErrors.phone = translations.phoneInvalid;
    }
    
    // Project type validation
    if (!formData.projectType) {
      newErrors.projectType = translations.projectTypeRequired;
    }
    
    // Postal code validation
    if (!formData.postalCode.trim()) {
      newErrors.postalCode = translations.postalCodeRequired;
    } else if (!/^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/.test(formData.postalCode.trim())) {
      newErrors.postalCode = translations.postalCodeInvalid;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when field is being edited
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check if honeypot field is filled (bot detection)
    if (formData.honeypot || formData.fax_number) {
      console.log('Bot submission detected');
      return;
    }
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Log form data for debugging
      console.log('Form data being submitted:', formData);
      
      try {
        // Send data to webhook
        const webhookUrl = 'https://hook.us2.make.com/8pdntkmlt16it2b9clovktppenjghx7s';
        
        // Prepare the data to send (excluding honeypot fields)
        const dataToSend = {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          projectType: formData.projectType,
          postalCode: formData.postalCode,
          language: document.documentElement.lang || 'en',
          timestamp: new Date().toISOString(),
          source: window.location.href,
          placement: isPopup ? 'popup' : 'inline'
        };
        
        // Send the data to the webhook
        const response = await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(dataToSend),
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        console.log('Form submitted successfully to webhook');
        
        // Send GTM event
        if (window.dataLayer) {
          window.dataLayer.push({
            'event': 'form_submit',
            'form_id': 'quote-form',
            'form_data': dataToSend
          });
        }
        
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          projectType: 'residential-repair',
          postalCode: '',
          honeypot: '',
          fax_number: ''
        });
      } catch (error) {
        console.error('Error submitting form:', error);
        setErrors(prev => ({
          ...prev,
          submit: 'There was an error submitting your request. Please try again.'
        }));
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <FormContainer id={id} isPopup={isPopup}>
      {isSubmitted ? (
        <SuccessMessage>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
          <p>{translations.thankYou}</p>
        </SuccessMessage>
      ) : (
        <>
          <FormTitle>{translations.formTitle}</FormTitle>
          <form onSubmit={handleSubmit} data-gtm="form_submit">
            <HoneypotField>
              <input 
                type="text" 
                name="honeypot" 
                value={formData.honeypot}
                onChange={handleChange}
                tabIndex="-1"
                autoComplete="off"
              />
              <input 
                type="text" 
                name="fax_number" 
                value={formData.fax_number}
                onChange={handleChange}
                tabIndex="-1"
                autoComplete="off"
                aria-hidden="true"
              />
            </HoneypotField>
            
            <FormField>
              <Label htmlFor="name">{translations.fullName}</Label>
              <Input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                className={errors.name ? 'error' : ''}
                placeholder={translations.namePlaceholder}
                required 
              />
              {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
            </FormField>
            
            <FormField>
              <Label htmlFor="email">{translations.email}</Label>
              <Input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                className={errors.email ? 'error' : ''}
                placeholder={translations.emailPlaceholder}
                required 
              />
              {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
            </FormField>
            
            <FormField>
              <Label htmlFor="phone">{translations.phone}</Label>
              <Input 
                type="tel" 
                id="phone" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} 
                className={errors.phone ? 'error' : ''}
                placeholder={translations.phonePlaceholder}
                required 
              />
              {errors.phone && <ErrorMessage>{errors.phone}</ErrorMessage>}
            </FormField>
            
            <FormField>
              <Label htmlFor="projectType">{translations.projectType}</Label>
              <Select 
                id="projectType" 
                name="projectType" 
                value={formData.projectType} 
                onChange={handleChange} 
                className={errors.projectType ? 'error' : ''}
                required
                aria-label={translations.projectType}
              >
                <ProjectTypeGroup label={translations.residential}>
                  <option value="residential-repair">{translations.residentialRepair}</option>
                  <option value="residential-replacement">{translations.residentialReplacement}</option>
                </ProjectTypeGroup>
                <ProjectTypeGroup label={translations.commercial}>
                  <option value="commercial-flat">{translations.commercialFlat}</option>
                  <option value="commercial-sloped">{translations.commercialSloped}</option>
                </ProjectTypeGroup>
                <option value="not-sure">{translations.notSure}</option>
              </Select>
              {errors.projectType && <ErrorMessage>{errors.projectType}</ErrorMessage>}
              <HelpText>{translations.helpText}</HelpText>
            </FormField>
            
            <FormField>
              <Label htmlFor="postalCode">{translations.postalCode}</Label>
              <Input 
                type="text" 
                id="postalCode" 
                name="postalCode" 
                value={formData.postalCode} 
                onChange={handleChange} 
                className={errors.postalCode ? 'error' : ''}
                placeholder={translations.postalCodePlaceholder}
                required 
              />
              {errors.postalCode && <ErrorMessage>{errors.postalCode}</ErrorMessage>}
            </FormField>
            
            <SubmitButton type="submit" disabled={isSubmitting} data-gtm="cta_hero">
              {isSubmitting ? (
                <>
                  <LoadingSpinner /> {translations.processing}
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  {translations.seeQuotes}
                </>
              )}
            </SubmitButton>
            
            <FormMicrocopy>{translations.noObligation}</FormMicrocopy>
            
            <FormDisclaimer>
              {translations.privacyText}
            </FormDisclaimer>
          </form>
        </>
      )}
    </FormContainer>
  );
}
