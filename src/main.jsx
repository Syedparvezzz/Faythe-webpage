// main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import App from './App.jsx';
import TermsAndConditions from './components/Terms&Conditions/index.jsx';
import PrivacyPolicy from './components/PrivacyPolicy/index.jsx';
import PageLayout from './components/Layout/index.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/terms" element={<PageLayout><TermsAndConditions /></PageLayout>} />
        <Route path="/privacy" element={<PageLayout><PrivacyPolicy /></PageLayout>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
