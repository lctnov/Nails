import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const HeaderServicesContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#2a2520' : '#faf7f2',
  py: theme.spacing(8),
}));

const SectionTitle = styled(Typography)({
	fontSize: 'clamp(2rem, 8vw, 3rem)',
	fontWeight: 800,
	textAlign: 'center',
	color: '#4a3e35',
	fontFamily: 'Georgia, serif',
	marginBottom: '0.5rem',
	letterSpacing: '-1px',
	mb: 2,
});

const Subtitle = styled(Typography)({
	fontSize: '1.05rem',
	color: '#8b7b71',
	textAlign: 'center',
	fontWeight: 400,
	letterSpacing: '0.5px',
	marginBottom: '3rem',
    maxWidth: '600px',
    mx: 'auto',
    ineHeight: 1.7,
});

export default function HeaderServices() {
  return (
    <HeaderServicesContainer
		sx={{
			mt: 12,
			pt: 4,
			border: '2px solid #4a3e35',  // màu nâu đậm
			borderRadius: '20px',
			backgroundColor: '#faf7f2',   // nền kem sáng, nổi border
			boxShadow: '0 4px 20px rgba(74, 62, 53, 0.08)', // bóng nhẹ cùng tone nâu
		}}
		>
		<Container maxWidth="xl">
			<Box sx={{ maxWidth: '800px', mx: 'auto', textAlign: 'center' }}>
			<SectionTitle>Giới thiệu về Nails & Gội</SectionTitle>
			<Subtitle>Khám phá bộ sưu tập toàn diện các liệu trình chăm sóc móng và tóc của chúng tôi,
mỗi liệu trình được thiết kế để tôn lên vẻ đẹp tự nhiên và tăng cường sự tự tin của bạn.</Subtitle>
			</Box>
		</Container>
		</HeaderServicesContainer>

  );
}
