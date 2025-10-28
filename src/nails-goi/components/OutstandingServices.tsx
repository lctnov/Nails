import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/material/styles';

const OutstandingServicesContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#4a4035' : '#faf7f2',
  py: theme.spacing(8),
}));

const FeatureCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: theme.shadows[12],
  },
}));

const IconBox = styled(Box)({
  fontSize: '3rem',
  marginBottom: '1rem',
});

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

const features = [
    {
      icon: '💅',
      title: 'Làm Móng Chuyên Nghiệp',
      description: 'Các dịch vụ làm móng từ cơ bản đến cao cấp với thiết kế đa dạng.',
    },
    {
      icon: '🧴',
      title: 'Gội Đầu Spa',
      description: 'Gội đầu thư giãn với massage chuyên sâu và các sản phẩm dưỡng tóc cao cấp.',
    },
    {
      icon: '✨',
      title: 'Combo Tiết Kiệm',
      description: 'Các gói combo đặc biệt với giá ưu đãi khi kết hợp nhiều dịch vụ.',
    },
    {
      icon: '👑',
      title: 'Đội Ngũ Chuyên Nghiệp',
      description: 'Những thợ có kinh nghiệm, được đào tạo bài bản và tay nghề cao.',
    },
    {
      icon: '🎯',
      title: 'Chất Lượng Cao',
      description: 'Sử dụng những sản phẩm chính hãng, an toàn cho sức khỏe của bạn.',
    },
    {
      icon: '⏰',
      title: 'Dịch Vụ Nhanh Chóng',
      description: 'Thời gian phục vụ nhanh mà không ảnh hưởng đến chất lượng.',
    },
  ];

export default function OutstandingServices() {
  return (
    <OutstandingServicesContainer sx={{pt: 4, pb: 4}}>
      <Container maxWidth="xl">
        <SectionTitle>Dịch vụ nổi bật</SectionTitle>
        <Subtitle>Khám phá các phương pháp điều trị được ưa chuộng nhất của chúng tôi, mỗi phương pháp đều mang lại kết quả đặc biệt và trải nghiệm sang trọng.</Subtitle>

        <Grid
          container
          spacing={3}
          justifyContent="center"
          alignItems="stretch"
        >
          {features.map((feature, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              key={index}
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <FeatureCard
                sx={{
                  width: '100%',
                  maxWidth: 500,
                  minWidth: 500,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                }}
              >
                <CardContent
					sx={{
						flexGrow: 1,
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
						textAlign: 'center',
					}}
					>
					<IconBox>{feature.icon}</IconBox>
					<Typography variant="h6" sx={{ fontWeight: 700, color: '#4a3e35', mb: 1 }}>
						{feature.title}
					</Typography>
					<Typography variant="body2" sx={{ color: '#8b7b71', lineHeight: 1.6 }}>
						{feature.description}
					</Typography>
					</CardContent>

              </FeatureCard>
            </Grid>
          ))}
        </Grid>


      </Container>
    </OutstandingServicesContainer>
  );
}
