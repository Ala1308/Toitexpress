import React, { createContext, useState, useContext, useEffect } from 'react';

// Create a context for language
const LanguageContext = createContext();

// English translations
const en = {
  // Hero Section
  headline1: '3 Roofing Quotes in 24h',
  headline2: 'Zero Stress',
  headline3: '',
  headlineAddOn: 'Compare, save up to 30%* and protect your roof with peace of mind',
  subheadline: 'Submit your project in 30 seconds — Receive 3 certified pros tomorrow morning',
  
  // Trust Bar
  free: 'Free',
  licensedPros: 'Licensed Pros',
  fullyInsured: 'Fully Insured',
  saveAverage: 'Save up to 30% on average*',
  residentialCommercial: 'Residential & Commercial',
  
  // CTA Button
  getQuotes: 'Get My 3 Free Quotes',
  
  // Form
  formTitle: 'Get Your Free Roofing Quotes – It\'s Quick & Easy',
  fullName: 'Full Name',
  email: 'Email',
  phone: 'Phone Number',
  projectType: 'Project Type',
  postalCode: 'Postal Code',
  seeQuotes: 'See My 3 Quotes →',
  processing: 'Processing...',
  noObligation: 'No obligation. You choose if and when to hire.',
  privacyText: 'We take your privacy seriously. Your information is used only to match you with roofers and will not be shared otherwise.',
  
  // Form Validation Errors
  nameRequired: 'Name is required',
  emailRequired: 'Email is required',
  emailInvalid: 'Please enter a valid email address',
  phoneRequired: 'Phone number is required',
  phoneInvalid: 'Please enter a valid phone number',
  projectTypeRequired: 'Please select a project type',
  postalCodeRequired: 'Postal code is required',
  postalCodeInvalid: 'Please enter a valid Canadian postal code',
  
  // Form Placeholders
  namePlaceholder: 'John Smith',
  emailPlaceholder: 'you@example.com',
  phonePlaceholder: '(514) 555-1234',
  postalCodePlaceholder: 'H2X 1Y6',
  
  // Project Types
  residential: 'Résidentiel',
  commercial: 'Commercial',
  residentialRepair: 'Résidentiel – Réparation',
  residentialReplacement: 'Résidentiel – Remplacement',
  roofRepair: 'Réparation de toit (le plus courant)',
  fullReplacement: 'Remplacement complet de toit',
  newInstallation: 'Nouvelle installation de toit',
  roofInspection: 'Inspection de toit',
  commercialFlat: 'Commercial – Toit plat',
  commercialSloped: 'Commercial – Toit en pente',
  commercialRepair: 'Commercial – Réparation/Entretien',
  notSure: 'Je ne sais pas',
  helpText: 'Résidentiel ou commercial — bardeaux en pente, membrane, métal, et plus.',
  
  // Success Message
  thankYou: 'Thank you! Your request for quotes has been submitted. You will receive 3 quotes within 24 hours.',
  
  // Footer
  footnote: '* Based on 217 complete roofing projects compared Jan–Mar 2025.',
  
  // Property Types
  residentialLabel: 'Residential',
  commercialLabel: 'Commercial',
  residentialTooltip: 'Shingles, metal, sloped roofs',
  commercialTooltip: 'TPO/EPDM membrane, flat roofs',
  
  // Image Overlay
  imageOverlay: 'Montreal roofing experts',
  
  // Language Selector
  language: 'FR',
  
  // Trust Counter
  trustCounter: 'Join {count} homeowners and businesses in Montreal who have compared quotes',
  
  // Benefits Section
  benefitsTitle: 'Stop Dialing. Start Comparing.',
  benefitsSubtitle: 'Homeowners who call roofers one by one wait 4-6 days for a single quote and pay 15-25% more on average. Our service is a game-changer: our pros call you and compete on price in less than 24 hours.',
  timeSavedTitle: 'Time Saved',
  timeSavedValue: '6-13 days',
  timeSavedText: 'About 5 hours of manual work saved and replacement 6-13 days earlier',
  moneySavedTitle: 'Money Saved',
  moneySavedValue: '$3,200',
  moneySavedText: 'Average savings on a full replacement',
  peaceOfMindTitle: 'Peace of Mind',
  peaceOfMindValue: '100%',
  peaceOfMindText: 'Licensed, insured, and warranty-backed',
  noQuotesPromise: '<strong>No quotes in 24h?</strong> We\'ll give you a <strong>$50 gift card</strong>—no strings attached.',
  savingsFootnote: '',
  
  // How It Works Section
  howItWorksTitle: 'How It Works',
  step1Number: '1',
  step1Title: 'Tell Us About Your Roof',
  step1Description: 'leak, repair, or full replacement?',
  step2Number: '2',
  step2Title: 'We Ping Our Network',
  step2Description: 'top 3 licensed pros accept your request.',
  step3Number: '3',
  step3Title: 'Quotes Land in 24 h',
  step3Description: 'compare, ask questions, hire only if you love a bid.',
  
  // Testimonials Section
  testimonialsTitle: 'What Our Customers Say',
  testimonial1Text: 'Within 24 hours of filling the form, I got three quotes – one was perfect. Highly recommend!',
  testimonial1Name: 'Sarah M.',
  testimonial1Location: 'Laval',
  testimonial2Text: 'I was skeptical at first, but I saved over $4,000 on my roof replacement by comparing the quotes I received.',
  testimonial2Name: 'Jean-Philippe T.',
  testimonial2Location: 'Longueuil',
  testimonial3Text: 'The convenience of getting multiple quotes without having to call around was exactly what I needed. Great service!',
  testimonial3Name: 'Marie-Claude B.',
  testimonial3Location: 'Montreal',
  actualClient: 'Actual Client',
  
  // Scarcity Banner
  scarcityText: '87% of homeowners save between 15% and 30% by comparing 3 quotes — Get yours in'
};

// French translations
const fr = {
  // Hero Section
  headline1: '3 Devis de Toiture.',
  headline2: '24 Heures.',
  headline3: '',
  headlineAddOn: 'Pour Maisons & Entreprises à Montréal.',
  subheadline: 'Parlez-nous de votre toit une fois—obtenez trois pros certifiés, assurés — résidentiel & commercial en compétition pour votre projet dès demain.',
  
  // Trust Bar
  free: 'Gratuit',
  licensedPros: 'Pros Certifiés',
  fullyInsured: 'Entièrement Assurés',
  saveAverage: 'Économisez jusqu\'à 30% en moyenne*',
  residentialCommercial: 'Résidentiel & Commercial',
  
  // CTA Button
  getQuotes: '⏱ OBTENEZ 3 DEVIS MAINTENANT',
  
  // Form
  formTitle: 'Obtenez vos devis gratuits – C\'est rapide et facile',
  fullName: 'Nom complet',
  email: 'Email',
  phone: 'Téléphone',
  projectType: 'Type de projet',
  postalCode: 'Code postal',
  seeQuotes: 'Voir mes 3 devis →',
  processing: 'Traitement en cours...',
  noObligation: 'Sans engagement. Vous choisissez si et quand embaucher.',
  privacyText: 'Nous prenons votre vie privée au sérieux. Vos informations sont utilisées uniquement pour vous mettre en relation avec des couvreurs et ne seront pas partagées autrement.',
  
  // Form Validation Errors
  nameRequired: 'Le nom est requis',
  emailRequired: 'L\'email est requis',
  emailInvalid: 'Veuillez entrer une adresse email valide',
  phoneRequired: 'Le numéro de téléphone est requis',
  phoneInvalid: 'Veuillez entrer un numéro de téléphone valide',
  projectTypeRequired: 'Veuillez sélectionner un type de projet',
  postalCodeRequired: 'Le code postal est requis',
  postalCodeInvalid: 'Veuillez entrer un code postal canadien valide',
  
  // Form Placeholders
  namePlaceholder: 'Jean Tremblay',
  emailPlaceholder: 'vous@exemple.com',
  phonePlaceholder: '(514) 555-1234',
  postalCodePlaceholder: 'H2X 1Y6',
  
  // Project Types
  residential: 'Residential',
  commercial: 'Commercial',
  residentialRepair: 'Residential – Repair',
  residentialReplacement: 'Residential – Replacement',
  roofRepair: 'Roof Repair (most common)',
  fullReplacement: 'Full Roof Replacement',
  newInstallation: 'New Roof Installation',
  roofInspection: 'Roof Inspection',
  commercialFlat: 'Commercial – Flat Roof',
  commercialSloped: 'Commercial – Sloped Roof',
  commercialRepair: 'Commercial – Repair/Maintenance',
  notSure: 'Not Sure',
  helpText: 'Residential or Commercial – pitched shingles, flat membrane, metal, & more.',
  
  // Success Message
  thankYou: 'Merci! Votre demande de devis a été soumise. Vous recevrez 3 devis dans les 24 heures.',
  
  // Footer
  footnote: '',
  
  // Property Types
  residentialLabel: 'Résidentiel',
  commercialLabel: 'Commercial',
  residentialTooltip: 'Bardeaux, métal, toit en pente',
  commercialTooltip: 'Membrane TPO/EPDM, toits plats',
  
  // Image Overlay
  imageOverlay: 'Experts en toiture à Montréal',
  
  // Language Selector
  language: 'EN',
  
  // Trust Counter
  trustCounter: 'Rejoignez {count} propriétaires de maisons et d\'entreprises à Montréal qui ont comparé des devis',
  
  // Benefits Section
  benefitsTitle: 'Arrêtez de Composer. Commencez à Comparer.',
  benefitsSubtitle: 'Les propriétaires qui appellent les couvreurs un par un attendent 4–6 jours pour un seul devis et paient 15 à 25% plus cher en moyenne. Notre service change la donne : nos pros vous appellent et se font concurrence sur les prix en moins de 24 heures.',
  timeSavedTitle: 'Temps Économisé',
  timeSavedValue: '6-13 jours',
  timeSavedText: 'Environ 5 heures de travail manuel économisées et remplacement 6-13 jours plus tôt',
  moneySavedTitle: 'Argent Économisé',
  moneySavedValue: '3 200 $',
  moneySavedText: 'Économies moyennes sur un remplacement complet',
  peaceOfMindTitle: 'Tranquillité d\'Esprit',
  peaceOfMindValue: '100%',
  peaceOfMindText: 'Certifiés, assurés et garantis',
  noQuotesPromise: '<strong>Pas de devis en 24h?</strong> Nous vous offrirons une <strong>carte cadeau de 50$</strong>—sans condition.',
  savingsFootnote: '',
  
  // How It Works Section
  howItWorksTitle: 'Comment Ça Fonctionne',
  step1Number: '1',
  step1Title: 'Parlez-nous de Votre Toit',
  step1Description: 'fuite, réparation ou remplacement complet?',
  step2Number: '2',
  step2Title: 'Nous Contactons Notre Réseau',
  step2Description: 'les 3 meilleurs pros certifiés acceptent votre demande.',
  step3Number: '3',
  step3Title: 'Devis Reçus en 24 h',
  step3Description: 'comparez, posez des questions, embauchez seulement si une offre vous plaît.',
  
  // Testimonials Section
  testimonialsTitle: 'Ce Que Disent Nos Clients',
  testimonial1Text: 'Dans les 24 heures après avoir rempli le formulaire, j\'ai reçu trois devis – l\'un d\'eux était parfait. Je recommande vivement!',
  testimonial1Name: 'Sarah M.',
  testimonial1Location: 'Laval',
  testimonial2Text: 'Nous avons reçu trois offres pour notre toit d\'entrepôt de 12 000 pi²—nous avons économisé 18 000 $.',
  testimonial2Name: 'Luc P.',
  testimonial2Location: 'Directeur des opérations, Toiture commerciale',
  testimonial3Text: 'J\'ai été mis en contact avec trois entrepreneurs qui pouvaient commencer immédiatement. Ma maison a été sauvée des dégâts d\'eau!',
  testimonial3Name: 'Michel T.',
  testimonial3Location: 'Montréal (NDG)',
  actualClient: 'Client Réel',
  
  // Scarcity Banner
  scarcityText: '87% des propriétaires économisent entre 15% et 30% en comparant 3 devis — Obtenez les vôtres dans'
};

// Create a provider component
export const LanguageProvider = ({ children }) => {
  // Try to get language from localStorage, default to 'en'
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('language');
    return savedLanguage || 'en';
  });
  
  // Get translations based on current language
  const translations = language === 'en' ? en : fr;
  
  // Update localStorage when language changes
  useEffect(() => {
    localStorage.setItem('language', language);
    // Keep <html lang> in sync for SEO/a11y
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
    }
  }, [language]);
  
  // Toggle language between 'en' and 'fr'
  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'en' ? 'fr' : 'en');
  };
  
  return (
    <LanguageContext.Provider value={{ language, translations, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
