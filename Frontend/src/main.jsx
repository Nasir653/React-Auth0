import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById('root')).render(

  <Auth0Provider
    domain="dev-nwi15p3fvs261obk.us.auth0.com"
    clientId="wJjykDsnm2UKZMztPRC2w8PsqnPaMyF5"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <BrowserRouter>

      <StrictMode>
        <App />
      </StrictMode>

    </BrowserRouter>

  </Auth0Provider>
)
