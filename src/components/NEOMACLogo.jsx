import React from 'react';

export default function NEOMACLogo({ size = 56 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="28,6 50,18 50,38 28,50 6,38 6,18" stroke="#ffa500" strokeWidth="3.5" fill="#000"/>
      <path d="M28 45V24" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M18 39V29" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M38 39V29" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M23 36V27" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M33 36V27" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  );
}
