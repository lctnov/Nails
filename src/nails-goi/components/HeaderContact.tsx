import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const HeaderContactContainer = styled(Box)(({ theme }) => ({
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

export default function HeaderContact() {
  return (
    <HeaderContactContainer
		sx={{
			pt: 12,
			backgroundColor: '#faf7f2',
		}}
		>
		<Container maxWidth="xl">
			<Box sx={{ maxWidth: '800px', mx: 'auto', textAlign: 'center' }}>
			<SectionTitle>Liên hệ với chúng tôi</SectionTitle>
			<Typography
				variant="h6"
				sx={{
				fontWeight: 700,
				color: '#4a3e35',
				marginBottom: '1rem',
				}}
			>
				Chúng tôi rất mong nhận được phản hồi từ bạn. Vui lòng liên hệ với chúng tôi qua bất kỳ kênh nào bên dưới, chúng tôi sẽ phản hồi bạn ngay lập tức.
			</Typography>
			</Box>
		</Container>
		</HeaderContactContainer>

  );
}
