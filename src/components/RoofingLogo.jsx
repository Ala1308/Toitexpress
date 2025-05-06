import React from 'react';

export default function RoofingLogo({ size = 56 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="28,6 50,18 50,38 28,50 6,38 6,18" stroke="#3498db" strokeWidth="3.5" fill="#000"/>
      <path d="M15,18 L41,18 L28,38 Z" stroke="#fff" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M22,28 L34,28" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M25,38 L31,38" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  );
}
