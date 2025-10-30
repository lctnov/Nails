import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const AboutNailsContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#4a4035' : '#faf7f2',
  py: theme.spacing(8),
}));

const SectionTitle = styled(Typography)({
  fontSize: 'clamp(1.8rem, 5vw, 2.8rem)',
  fontWeight: 800,
  textAlign: 'center',
  color: '#4a3e35',
  fontFamily: 'Georgia, serif',
  marginBottom: '0.5rem',
  letterSpacing: '-1px',
});

const Subtitle = styled(Typography)({
  fontSize: '1rem',
  color: '#8b7b71',
  textAlign: 'center',
  fontWeight: 400,
  letterSpacing: '0.5px',
  marginBottom: '3rem',
});

export default function AboutNails() {
  return (
    <AboutNailsContainer
		sx={{
			pt: 4,
			pb: 4,
			backgroundColor: '#faf7f2',
		}}
		>
		<Container maxWidth="xl">
			<Box sx={{ maxWidth: '800px', mx: 'auto', textAlign: 'center' }}>
			<SectionTitle>Giới thiệu về Nails & Gội</SectionTitle>
			<Subtitle>Sự xuất sắc trong mọi dịch vụ chúng tôi cung cấp</Subtitle>

			<Typography
				variant="h6"
				sx={{
				fontWeight: 700,
				color: '#4a3e35',
				marginBottom: '1rem',
				}}
			>
				Tại Nails & Gội, chúng tôi cam kết mang đến cho bạn trải nghiệm làm đẹp toàn diện và thư giãn nhất.
				Chúng tôi tự hào về đội ngũ chuyên gia giàu kinh nghiệm, luôn tận tâm với từng chi tiết nhỏ nhất
				để đảm bảo bạn rời khỏi tiệm với vẻ ngoài hoàn hảo và cảm giác tuyệt vời.
			</Typography>
			</Box>
		</Container>
		</AboutNailsContainer>

  );
}
