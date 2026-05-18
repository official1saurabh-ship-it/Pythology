import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import TechnicalGuide from './pages/TechnicalGuide';

import PricingPage from './pages/PricingPage';
import AboutUs from './pages/AboutUs';

import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import PathologyHelpDeskPage from './pages/PathologyHelpDeskPage';
import PatientGuidePage from './pages/PatientGuidePage';
import SystemStatusPage from './pages/SystemStatusPage';
import StaffTrainingPage from './pages/StaffTrainingPage';

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/technical-guide/:category" element={<TechnicalGuide />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacypolicy" element={<PrivacyPolicyPage />} />
        <Route path="/termsofservice" element={<TermsOfServicePage />} />

        <Route path="/pathology-help-desk" element={<PathologyHelpDeskPage />} />
        <Route path="/patient-guide" element={<PatientGuidePage />} />
        <Route path="/system-status" element={<SystemStatusPage />} />
        <Route path="/staff-training" element={<StaffTrainingPage />} />

        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>

    </div>
  );
}

export default App;
