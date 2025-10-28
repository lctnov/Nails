import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import AppTheme from '../../shared-theme/AppTheme';
import AppAppBar from '../components/AppAppBar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import FloatingContactButtons from '../components/FloatingContactButtons';
import NailGallery from '../components/NailGallery';
import WhyChooseUs from '../components/WhyChooseUs';
import OutstandingServices from '../components/OutstandingServices';
import Testimonials from '../components/Testimonials';
import PriceTable from '../components/PriceTable';
import AboutNails from '../components/AboutNails';

export default function Home(props: { disableCustomTheme?: boolean }) {

  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <AppAppBar />
      <Box>
        <Hero />

        <NailGallery />

        <WhyChooseUs />

        <OutstandingServices />

        <Testimonials />

        <PriceTable />

        <AboutNails />

        <Footer />
      </Box>
      <FloatingContactButtons />
    </AppTheme>
  );
}
