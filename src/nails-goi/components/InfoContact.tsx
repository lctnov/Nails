import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const InfoContactContainer = styled(Box)(({ theme }) => ({
  py: theme.spacing(8),
}));

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
      width: '100%', // ✅ Card luôn chiếm full width của Grid item
      minHeight: 200, // ✅ Đảm bảo chiều cao đồng nhất
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      borderRadius: 3,
      backgroundColor: '#d1c1ae',
      transition: 'all 0.3s ease',
      boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
      '&:hover': {
        transform: 'translateY(-6px)',
        boxShadow: '0 6px 18px rgba(0,0,0,0.15)',
      },
    }}
  >
    <CardContent sx={{ p: 3, width: '100%' }}>
      <Box
        sx={{
          backgroundColor: '#e7d7c1',
          p: 1.5,
          borderRadius: '50%',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 2,
          color: '#744932ff',
        }}
      >
        {icon}
      </Box>
      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: '#4a3e35' }}>
        {title}
      </Typography>
      {href ? (
		<Button
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			sx={{
			color: '#4a3e35 !important', // ✅ Màu chữ bình thường
			textTransform: 'none',
			fontSize: '0.95rem',
			fontWeight: 500,
			'&:hover': {
				color: '#b99167 !important', // ✅ Màu khi hover
				backgroundColor: 'transparent',
			},
			}}
		>
			{content}
		</Button>
		) : (
		<Typography
			variant="body2"
			sx={{ color: '#4a3e35', opacity: 0.9 }}
		>
			{content}
		</Typography>
	)}
    </CardContent>
  </Card>
);

export default function InfoContact() {
  return (
    <InfoContactContainer sx={{ pt: 4 }}>
      <Container sx={{ py: { xs: 4, sm: 4 } }}>
        <Grid
          container
          spacing={3}
          alignItems="stretch" // 🔥 Chiều cao đồng bộ
          justifyContent="center"
        >
          {[
            {
              icon: <LocationOnIcon sx={{ fontSize: '1.8rem' }} />,
              title: 'Địa Chỉ',
              content: '123 Đường Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh',
            },
            {
              icon: <PhoneIcon sx={{ fontSize: '1.8rem' }} />,
              title: 'Điện Thoại',
              content: '+84 (123) 456 789',
              href: 'tel:+84123456789',
            },
            {
              icon: <EmailIcon sx={{ fontSize: '1.8rem' }} />,
              title: 'Email',
              content: 'contact@nailsgoi.com',
              href: 'mailto:contact@nailsgoi.com',
            },
            {
              icon: <AccessTimeIcon sx={{ fontSize: '1.8rem' }} />,
              title: 'Giờ Mở Cửa',
              content: 'Thứ 2 - CN: 9:00 - 19:00',
            },
          ].map((item, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={index}
              display="flex"
              justifyContent="center"
            >
              <Box sx={{ width: '100%', maxWidth: 280 }}> {/* ✅ Đảm bảo chiều rộng đồng bộ */}
                <ContactCard {...item} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </InfoContactContainer>
  );
}
