import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AppTheme from '../../shared-theme/AppTheme';
import AppAppBar from '../components/AppAppBar';
import Footer from '../components/Footer';
import FloatingContactButtons from '../components/FloatingContactButtons';

const ContactCard = ({
  icon,
  title,
  content,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  content: string;
  href?: string;
}) => (
  <Card
    sx={{
      height: '100%',
      transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
      '&:hover': {
        transform: 'translateY(-8px)',
        boxShadow: (theme) => theme.shadows[12],
      },
    }}
  >
    <CardContent>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Box
          sx={{
            backgroundColor: 'primary.light',
            p: 1.5,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mr: 2,
            color: 'primary.main',
          }}
        >
          {icon}
        </Box>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          {title}
        </Typography>
      </Box>
      {href ? (
        <Button
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: 'text.secondary',
            textDecoration: 'none',
            '&:hover': {
              color: 'primary.main',
            },
          }}
        >
          {content}
        </Button>
      ) : (
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {content}
        </Typography>
      )}
    </CardContent>
  </Card>
);

export default function Contact(props: { disableCustomTheme?: boolean }) {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <AppAppBar />
      <Box>
        {/* Page Header */}
        <Container
          sx={{
            py: { xs: 6, sm: 8 },
            textAlign: 'center',
            mt: { xs: 4, sm: 0 },
            backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#2a2520' : '#faf7f2',
            borderRadius: 2,
            mb: 2,
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 800,
              mb: 2,
              color: '#4a3e35',
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(2rem, 8vw, 3rem)',
              letterSpacing: '-1px',
            }}
          >
            Get In Touch
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#8b7b71',
              maxWidth: '600px',
              mx: 'auto',
              fontSize: '1.05rem',
              lineHeight: 1.7,
            }}
          >
            We would love to hear from you. Reach out to us through any of the channels below, and we will get back to you promptly.
          </Typography>
        </Container>

        {/* Contact Information */}
        <Container sx={{ py: { xs: 4, sm: 6 } }}>
          <Grid container spacing={3} sx={{ mb: 6 }}>
            <Grid item xs={12} sm={6} md={3}>
              <ContactCard
                icon={<LocationOnIcon sx={{ fontSize: '1.5rem' }} />}
                title="Địa Chỉ"
                content="123 Đường Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <ContactCard
                icon={<PhoneIcon sx={{ fontSize: '1.5rem' }} />}
                title="Điện Thoại"
                content="+84 (123) 456 789"
                href="tel:+84123456789"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <ContactCard
                icon={<EmailIcon sx={{ fontSize: '1.5rem' }} />}
                title="Email"
                content="contact@nailsgoi.com"
                href="mailto:contact@nailsgoi.com"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <ContactCard
                icon={<AccessTimeIcon sx={{ fontSize: '1.5rem' }} />}
                title="Giờ Mở Cửa"
                content="Thứ 2 - CN: 9:00 - 19:00"
              />
            </Grid>
          </Grid>
        </Container>

        {/* Contact Form */}
        <Container
          sx={{
            py: { xs: 4, sm: 6 },
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark'
                ? '#1a1714'
                : '#fff',
            backgroundImage: 'none',
            borderRadius: 2,
          }}
        >
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h4"
                component="h2"
                sx={{
                  fontWeight: 800,
                  mb: 3,
                  color: '#4a3e35',
                  fontFamily: 'Georgia, serif',
                  fontSize: 'clamp(1.5rem, 5vw, 2rem)',
                  letterSpacing: '-0.5px',
                }}
              >
                Send Message
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: '#8b7b71',
                  mb: 3,
                  lineHeight: 1.7,
                }}
              >
                Fill out the form and we will get back to you as soon as possible with any questions or inquiries.
              </Typography>
              <Stack spacing={2}>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#4a3e35', fontFamily: 'Georgia, serif' }}>
                    Why Choose Us
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#8b7b71', mb: 2 }}>
                    • Professionally trained and experienced team
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#8b7b71', mb: 2 }}>
                    • Premium certified products for safety
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#8b7b71', mb: 2 }}>
                    • Competitive pricing with exclusive packages
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#8b7b71' }}>
                    • Efficient service without compromising quality
                  </Typography>
                </Box>
              </Stack>
            </Grid>

            <Grid item xs={12} md={6}>
              <form onSubmit={handleSubmit}>
                <Stack spacing={2}>
                  <TextField
                    label="Họ và Tên"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    fullWidth
                    required
                    variant="outlined"
                  />
                  <TextField
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    fullWidth
                    required
                    variant="outlined"
                  />
                  <TextField
                    label="S�� Điện Thoại"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    fullWidth
                    variant="outlined"
                  />
                  <TextField
                    label="Chủ Đề"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    fullWidth
                    variant="outlined"
                  />
                  <TextField
                    label="Nội Dung"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    fullWidth
                    multiline
                    rows={5}
                    required
                    variant="outlined"
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    sx={{
                      mt: 2,
                      backgroundColor: '#c9a87d',
                      color: '#fff',
                      fontWeight: 600,
                      letterSpacing: '0.5px',
                      textTransform: 'none',
                      '&:hover': {
                        backgroundColor: '#b89968',
                      },
                    }}
                  >
                    Send Message
                  </Button>
                </Stack>
              </form>
            </Grid>
          </Grid>
        </Container>

        {/* Social Media */}
        <Container sx={{ py: { xs: 4, sm: 6 }, textAlign: 'center' }}>
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
            Connect With Us
          </Typography>
          <Stack direction="row" spacing={2} sx={{ justifyContent: 'center', mb: 3 }}>
            <IconButton
              size="large"
              href="https://zalo.me"
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
              href="https://facebook.com"
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
            Follow us for exclusive offers and new service updates!
          </Typography>
        </Container>

        <Footer />
      </Box>
      <FloatingContactButtons />
    </AppTheme>
  );
}
