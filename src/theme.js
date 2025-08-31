// Thème ToitExpress
export const theme = {
  colors: {
    primary: '#E67E22', // Orange chaud (confiance, action)
    primaryDark: '#D35400', // Version plus foncée de l'orange pour le contraste
    primaryLight: '#F39C12', // Version plus claire de l'orange pour les surbrillances
    secondary: '#34495E', // Bleu-gris foncé (professionnel)
    secondaryLight: '#5D6D7E', // Version plus claire du bleu-gris
    accent: '#3498DB', // Bleu ciel (confiance, calme)
    accentDark: '#2980B9', // Version plus foncée du bleu ciel
    success: '#27AE60', // Vert pour les messages de succès
    error: '#E74C3C', // Rouge pour les erreurs
    warning: '#F39C12', // Orange pour les avertissements
    bgLight: '#F5F7FA', // Fond clair légèrement bleu
    bgDark: '#2C3E50', // Bleu-gris très foncé pour hero
    bgMedium: '#ECF0F1', // Fond moyen pour les sections alternantes
    white: '#ffffff',
    black: '#000000',
    textDark: '#2C3E50', // Texte foncé
    textMedium: '#7F8C8D', // Texte moyen pour les informations secondaires
    textLight: '#ECF0F1', // Texte clair
  },
  fonts: {
    heading: 'Montserrat, sans-serif',
    body: 'Open Sans, sans-serif',
  },
  font: 'Open Sans, sans-serif', // Pour compatibilité avec le code existant
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
  },
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '20px',
    circle: '50%',
  },
  shadows: {
    sm: '0 2px 4px rgba(0, 0, 0, 0.1)',
    md: '0 4px 8px rgba(0, 0, 0, 0.12)',
    lg: '0 8px 16px rgba(0, 0, 0, 0.15)',
    xl: '0 12px 24px rgba(0, 0, 0, 0.2)',
  },
  transitions: {
    fast: 'all 0.2s ease',
    medium: 'all 0.3s ease',
    slow: 'all 0.5s ease',
  },
  radii: {
    none: '0',
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '20px',
    pill: '9999px'
  }
};
