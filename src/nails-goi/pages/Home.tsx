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
import { styled } from '@mui/material/styles';

const StyledHr = styled('hr')({
  height: '1px',
  width: '100px',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '1px',
  marginBottom: '1px',
  backgroundColor: '#eca74dff',
  opacity: 0.6,
  borderRadius: '999px',
  border: 'none',
});

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
        
        <StyledHr />

        <AboutNails />

        <Footer />
      </Box>
      <FloatingContactButtons />
    </AppTheme>
  );
}
