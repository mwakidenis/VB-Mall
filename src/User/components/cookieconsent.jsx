 //CookieConsentBanner.jsx
import React from 'react';
import CookieConsent from 'react-cookie-consent';
import { Link } from 'react-router-dom'; 

const CookieConsentBanner = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Understood"
      cookieName="myCookieConsent"
      style={{
        position: 'fixed',
        bottom: '20px',
        left: '30%',
        transform: 'translateX(-50%)',
        maxWidth: '600px',
        padding: '20px',
        background: '#254117',
        color: '#FFFFFF',
        zIndex: '9999',
        textAlign: 'left',
      }}
      buttonStyle={{ color: '#4e503b', fontSize: '16px', position: 'absolute', bottom: '10px', right: '80px', left: '290px' }}
      expires={150}
      aria-label="Cookie consent banner"
      role="dialog"
    >

    This website uses cookies to enhance the user experience. By continuing, you agree to our cookie policy. Kinldy visit the link below for more info.{' '}
      <br/>
      <Link to="./privacy" style={{ color: '#FFFFFF', textDecoration: 'underline' }}>
                            Learn more.
      </Link>
    </CookieConsent>
  );
};

export default CookieConsentBanner;
