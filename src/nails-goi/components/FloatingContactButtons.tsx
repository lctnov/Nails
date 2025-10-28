import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { styled } from '@mui/material/styles';

const FloatingContainer = styled(Box)({
  position: 'fixed',
  bottom: 24,
  right: 24,
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  zIndex: 1000,
  '@media (max-width: 600px)': {
    bottom: 16,
    right: 16,
  },
});

const FloatingButton = styled(IconButton)(({ theme }) => ({
  width: 60,
  height: 60,
  borderRadius: '50%',
  boxShadow: theme.shadows[8],
  transition: 'all 0.3s ease',
  animation: 'float 3s ease-in-out infinite',
  '&:hover': {
    transform: 'scale(1.15)',
    boxShadow: theme.shadows[12],
  },
  '@keyframes float': {
    '0%, 100%': {
      transform: 'translateY(0px)',
    },
    '50%': {
      transform: 'translateY(-10px)',
    },
  },
}));

const ZaloButton = styled(FloatingButton)(({ theme }) => ({
  backgroundColor: '#00A86B',
  color: 'white',
  '&:hover': {
    backgroundColor: '#008555',
  },
}));

const FacebookButton = styled(FloatingButton)(({ theme }) => ({
  backgroundColor: '#1976D2',
  color: 'white',
  '&:hover': {
    backgroundColor: '#1565C0',
  },
}));

const PHONE_NUMBER = '+84 (123) 456 789';

export default function FloatingContactButtons() {
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState('');

  const handlePhoneClick = (platform: string) => {
    setSnackbarMessage(`Liên hệ ${platform}: ${PHONE_NUMBER}`);
    setOpenSnackbar(true);
  };

  const handleClose = () => {
    setOpenSnackbar(false);
  };

  return (
    <>
      <FloatingContainer>
        <Tooltip
          title={`Zalo: ${PHONE_NUMBER}`}
          arrow
          placement="left"
          componentsProps={{
            tooltip: {
              sx: {
                backgroundColor: '#00A86B',
                color: 'white',
                fontSize: '0.875rem',
                borderRadius: '8px',
                padding: '8px 12px',
              },
            },
          }}
        >
          <ZaloButton
            aria-label="Zalo contact"
            onClick={() => handlePhoneClick('Zalo')}
            size="large"
          >
            <Box
              component="svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
            </Box>
          </ZaloButton>
        </Tooltip>

        <Tooltip
          title={`Facebook: ${PHONE_NUMBER}`}
          arrow
          placement="left"
          componentsProps={{
            tooltip: {
              sx: {
                backgroundColor: '#1976D2',
                color: 'white',
                fontSize: '0.875rem',
                borderRadius: '8px',
                padding: '8px 12px',
              },
            },
          }}
        >
          <FacebookButton
            aria-label="Facebook contact"
            onClick={() => handlePhoneClick('Facebook')}
            size="large"
          >
            <Box
              component="svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </Box>
          </FacebookButton>
        </Tooltip>
      </FloatingContainer>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleClose}
          severity="info"
          sx={{
            width: '100%',
            backgroundColor: 'primary.main',
            color: 'white',
            fontSize: '1rem',
            fontWeight: 500,
          }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
}
