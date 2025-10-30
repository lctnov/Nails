import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import AppTheme from '../../shared-theme/AppTheme';
import AppAppBar from '../components/AppAppBar';
import Footer from '../components/Footer';
import FloatingContactButtons from '../components/FloatingContactButtons';
import HeaderContact from '../components/HeaderContact';
import InfoContact from '../components/InfoContact';
import FromContact from '../components/FromContact';
import SocialContact from '../components/SocialContact';

export default function Contact(props: { disableCustomTheme?: boolean }) {
  

  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <AppAppBar />
      <Box sx={{ backgroundColor: '#faf7f2', }}>
        {/* Page Header */}
        <HeaderContact />

        {/* Contact Information */}
        <InfoContact />

        {/* Contact Form */}
        <FromContact />

        {/* Social Media */}
        <SocialContact />

        {/* Footer */}

        <Footer />
      </Box>
      <FloatingContactButtons />
    </AppTheme>
  );
}
