import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { styled } from '@mui/material/styles';

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark'
    ? '#1a1714'
    : '#2a231a',
  backgroundImage: 'none',
  borderTop: `1px solid ${theme.palette.mode === 'dark' ? '#4a4035' : '#3a3228'}`,
}));

const ContactItem = styled(Stack)(({ theme }) => ({
  alignItems: 'center',
  gap: theme.spacing(1),
}));

const SocialIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark'
    ? 'rgba(255, 255, 255, 0.1)'
    : 'rgba(0, 0, 0, 0.05)',
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  transition: 'all 0.3s ease',
}));

export default function Footer() {
  return (
    <FooterContainer component="footer">
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: { xs: 4, sm: 6 },
            py: { xs: 6, sm: 8 },
          }}
        >
          {/* Main Footer Content */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
              gap: { xs: 3, sm: 4, md: 6 },
            }}
          >
            {/* About Section */}
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  color: '#c9a87d',
                  fontFamily: 'Georgia, serif',
                  fontSize: '1.2rem',
                }}
              >
                Nails & Gội
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: '#b8a895',
                  mb: 2,
                  lineHeight: 1.7,
                }}
              >
                Trải nghiệm dịch vụ chăm sóc tóc và móng cao cấp tại không gian sang trọng, chuyên nghiệp của chúng tôi. Chúng tôi kết hợp nghệ thuật, chuyên môn và sản phẩm cao cấp để mang đến kết quả vượt trội.
              </Typography>
            </Box>

            {/* Services Section */}
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#c9a87d' }}>
                Dịch vụ
              </Typography>
              <Stack spacing={1}>
                <Link
                  href="/services?category=nail"
                  variant="body2"
                  sx={{
                    color: '#b8a895',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                    '&:hover': {
                      color: '#c9a87d',
                    },
                  }}
                >
                  Dịch vụ làm móng
                </Link>
                <Link
                  href="/services?category=hair"
                  variant="body2"
                  sx={{
                    color: '#b8a895',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                    '&:hover': {
                      color: '#c9a87d',
                    },
                  }}
                >
                  Chăm sóc tóc
                </Link>
                <Link
                  href="/services?category=combo"
                  variant="body2"
                  sx={{
                    color: '#b8a895',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                    '&:hover': {
                      color: '#c9a87d',
                    },
                  }}
                >
                  Gói kết hợp
                </Link>
              </Stack>
            </Box>

            {/* Contact Section */}
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#c9a87d' }}>
                Liên hệ
              </Typography>
              <Stack spacing={1.5}>
                <ContactItem direction="row" sx={{ alignItems: 'flex-start' }}>
                  <LocationOnIcon
                    sx={{
                      color: '#c9a87d',
                      mt: 0.5,
                      flexShrink: 0,
                    }}
                  />
                  <Typography variant="body2" sx={{ color: '#b8a895' }}>
                    D14/1, Trần Não, P.Bình Khánh, Quận 2, TP. Thủ Đức
                  </Typography>
                </ContactItem>
                <ContactItem direction="row" sx={{ alignItems: 'center' }}>
                  <PhoneIcon sx={{ color: '#c9a87d', flexShrink: 0 }} />
                  <Link
                    href="tel:+84123456789"
                    variant="body2"
                    sx={{
                      color: '#b8a895',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease',
                      '&:hover': {
                        color: '#c9a87d',
                      },
                    }}
                  >
                    +84 (123) 456 789
                  </Link>
                </ContactItem>
                <ContactItem direction="row" sx={{ alignItems: 'center' }}>
                  <EmailIcon sx={{ color: '#c9a87d', flexShrink: 0 }} />
                  <Link
                    href="mailto:contact@nailsgoi.com"
                    variant="body2"
                    sx={{
                      color: '#b8a895',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease',
                      '&:hover': {
                        color: '#c9a87d',
                      },
                    }}
                  >
                    contact@nailsgoi.com
                  </Link>
                </ContactItem>
              </Stack>
            </Box>
          </Box>

          <Divider />

          {/* Bottom Footer */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <Typography variant="body2" sx={{ color: '#9b8b7e' }}>
              &copy; {new Date().getFullYear()} Nails & Gội. All rights reserved.
            </Typography>
            <Stack direction="row" spacing={1}>
              <SocialIconButton
                size="small"
                href="https://zalo.me"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Zalo"
              >
                <Box
                  component="svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                </Box>
              </SocialIconButton>
              <SocialIconButton
                size="small"
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                sx={{
                  backgroundColor: 'rgba(201, 168, 125, 0.15)',
                  color: '#c9a87d',
                  '&:hover': {
                    backgroundColor: 'rgba(201, 168, 125, 0.25)',
                  },
                }}
              >
                <Box
                  component="svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </Box>
              </SocialIconButton>
            </Stack>
          </Box>
        </Box>
      </Container>
    </FooterContainer>
  );
}
