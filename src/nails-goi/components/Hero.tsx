import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';

const HeroContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  backgroundRepeat: 'no-repeat',
  backgroundImage: `linear-gradient(135deg, rgba(250, 247, 242, 0.95) 0%, rgba(245, 240, 233, 0.98) 100%),
    url('https://cdn.builder.io/api/v1/image/assets%2F33e1cff740d643fbba3a6fe8d5fe9615%2F28cb85a644ae4a08ab0d0d216a76d62f?format=webp&width=1200')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
  ...theme.applyStyles('dark', {
    backgroundImage: `linear-gradient(135deg, rgba(35, 32, 28, 0.95) 0%, rgba(45, 40, 35, 0.92) 100%),
      url('https://cdn.builder.io/api/v1/image/assets%2F33e1cff740d643fbba3a6fe8d5fe9615%2F28cb85a644ae4a08ab0d0d216a76d62f?format=webp&width=1200')`,
  }),
}));

export default function Hero() {
  return (
    <HeroContainer>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack
          spacing={2}
          useFlexGap
          sx={{ alignItems: 'center', width: { xs: '100%', sm: '100%' }, maxWidth: '800px' }}
        >
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 'clamp(2.5rem, 10vw, 4rem)',
              fontWeight: 800,
              textAlign: 'center',
              color: '#4a3e35',
              letterSpacing: '-1px',
              fontFamily: 'Georgia, serif',
            }}
          >
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: 'inherit',
                color: '#c9a87d',
                fontWeight: 'inherit',
                ml: { xs: 0, sm: 1 },
                fontFamily: 'Georgia, serif',
              }}
            >
              Nails & Gội
            </Typography>
          </Typography>
          <Typography
            sx={{
              textAlign: 'center',
              color: '#6b5d54',
              width: { xs: '100%', md: '85%' },
              fontSize: 'clamp(1rem, 1.8vw, 1.1rem)',
              fontWeight: 400,
              lineHeight: 1.8,
              letterSpacing: '0.5px',
            }}
          >
            Khám phá không gian riêng tư của chúng tôi, nơi chăm sóc sắc đẹp và sức khỏe toàn diện. Trải nghiệm nghệ thuật chuyên nghiệp, dịch vụ chăm sóc cao cấp và vẻ đẹp thanh lịch vượt thời gian trong một không gian tinh tế được thiết kế để mang đến sự thoải mái cho bạn.
          </Typography>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            useFlexGap
            sx={{ pt: 3, width: { xs: '100%', sm: 'auto' } }}
          >
            <Button
              variant="contained"
              size="large"
              component={RouterLink}
              to="/services"
              sx={{
                px: { xs: 3, sm: 5 },
                py: 1.8,
                backgroundColor: '#c9a87d',
                color: '#fff',
                fontSize: '1rem',
                fontWeight: 600,
                letterSpacing: '0.5px',
                textTransform: 'none',
                border: 'none',
                '&:hover': {
                  backgroundColor: '#b89968',
                  boxShadow: '0 8px 24px rgba(201, 168, 125, 0.3)',
                },
                transition: 'all 0.4s ease',
              }}
            >
              Dịch vụ
            </Button>
            <Button
              variant="contained"
              size="large"
              component={RouterLink}
              to="/contact"
              sx={{
                px: { xs: 3, sm: 5 },
                py: 1.8,
                backgroundColor: '#c9a87d',
                color: '#fff',
                fontSize: '1rem',
                fontWeight: 600,
                letterSpacing: '0.5px',
                textTransform: 'none',
                border: 'none',
                '&:hover': {
                  backgroundColor: '#b89968',
                  boxShadow: '0 8px 24px rgba(201, 168, 125, 0.3)',
                },
                transition: 'all 0.4s ease',
              }}
            >
              Liên hệ
            </Button>
          </Stack>
        </Stack>
      </Container>
    </HeroContainer>
  );
}
