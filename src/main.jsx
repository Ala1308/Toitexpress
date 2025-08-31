import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App.jsx'

function Root() {
  useEffect(() => {
    // GA4 bootstrap if ID provided via env
    const gaId = import.meta.env.VITE_GA4_ID;
    if (!gaId) return;
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    document.head.appendChild(script1);
    const script2 = document.createElement('script');
    script2.innerHTML = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config','${gaId}');`;
    document.head.appendChild(script2);
  }, []);
  return <App />;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
