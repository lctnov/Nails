import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';

const SocialContactContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#2a2520' : '#faf7f2',
  py: theme.spacing(8),
}));

export default function SocialContact() {
  return (
    <SocialContactContainer sx={{ pt: 4 }}>
		<Container sx={{ py: { xs: 4, sm: 4 }, textAlign: 'center' }}>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontWeight: 800,
              mb: 4,
              color: '#4a3e35',
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(1.5rem, 5vw, 2rem)',
              letterSpacing: '-0.5px',
            }}
          >
            Kết nối với chúng tôi
          </Typography>
          <Stack direction="row" spacing={2} sx={{ justifyContent: 'center', mb: 3 }}>
            <IconButton
              size="large"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Zalo"
              sx={{
                backgroundColor: 'rgba(0, 168, 107, 0.1)',
                color: '#00A86B',
                '&:hover': {
                  backgroundColor: 'rgba(0, 168, 107, 0.2)',
                  transform: 'scale(1.1)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <Box
                component="svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
              </Box>
            </IconButton>
            <IconButton
              size="large"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              sx={{
                backgroundColor: 'rgba(25, 118, 210, 0.1)',
                color: '#1976D2',
                '&:hover': {
                  backgroundColor: 'rgba(25, 118, 210, 0.2)',
                  transform: 'scale(1.1)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <Box
                component="svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </Box>
            </IconButton>
          </Stack>
          <Typography variant="body2" sx={{ color: '#8b7b71' }}>
            Theo dõi chúng tôi để biết các ưu đãi độc quyền và cập nhật dịch vụ mới!
          </Typography>
        </Container>
		</SocialContactContainer>

  );
}
