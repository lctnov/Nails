import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/material/styles';

const WhyChooseContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#4a4035' : '#faf7f2',
  py: theme.spacing(8),
}));

const FeatureCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#3a322a' : '#fffaf5 ',
  border: `1px solid ${theme.palette.mode === 'dark' ? '#5a4e43' : '#faf7f2'}`,
  borderRadius: '12px',
  boxShadow: 'none',
  height: '100%',
  transition: 'all 0.4s ease',
  '&:hover': {
    backgroundColor: theme.palette.mode === 'dark' ? '#4a4035' : '#faf7f2',
    borderColor: '#c9a87d',
    transform: 'translateY(-4px)',
    boxShadow: '0 12px 32px rgba(201, 168, 125, 0.15)',
  },
}));

const FeatureIcon = styled(Box)({
  width: 60,
  height: 60,
  backgroundColor: '#e8dfd5',
  borderRadius: '12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '2rem',
  marginBottom: '1.5rem',
  transition: 'all 0.3s ease',
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
    icon: '✨',
    title: 'Chuyên môn chuyên nghiệp',
    description:
      'Đội ngũ của chúng tôi bao gồm các kỹ thuật viên làm móng được chứng nhận với nhiều năm kinh nghiệm trong lĩnh vực chăm sóc và thiết kế móng.',
  },
  {
    icon: '🧴',
    title: 'Sản phẩm cao cấp',
    description:
      'Chúng tôi chỉ sử dụng các sản phẩm được chứng nhận, đạt tiêu chuẩn quốc tế đảm bảo an toàn và độ bền.',
  },
  {
    icon: '🏆',
    title: 'Tiêu chuẩn vệ sinh hàng đầu',
    description:
      'Chúng tôi duy trì các giao thức vệ sinh cao nhất và sử dụng các công cụ đã được khử trùng cho mọi dịch vụ.',
  },
  {
    icon: '💅',
    title: 'Thiết kế tùy chỉnh',
    description:
      'Nghệ thuật làm móng cá nhân hóa theo phong cách và sở thích độc đáo của bạn.',
  },
  {
    icon: '⏱️',
    title: 'Dịch vụ hiệu quả',
    description:
      'Hẹn đúng giờ mà không ảnh hưởng đến chất lượng hoặc sự chú ý đến từng chi tiết.',
  },
  {
    icon: '💎',
    title: 'Trải nghiệm sang trọng',
    description:
      'Tận hưởng bầu không khí spa thanh lịch được thiết kế để mang lại sự thoải mái tối đa cho bạn.',
  },
];

export default function WhyChooseUs() {
  return (
    <WhyChooseContainer>
      <Container maxWidth="xl">
        <SectionTitle>Tại sao chọn chúng tôi</SectionTitle>
        <Subtitle>Sự xuất sắc trong mọi dịch vụ chúng tôi cung cấp</Subtitle>

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
                    justifyContent: 'space-between',
                  }}
                >
                  <FeatureIcon>{feature.icon}</FeatureIcon>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      color: '#4a3e35',
                      marginBottom: '1rem',
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#8b7b71',
                      lineHeight: 1.6,
                      flexGrow: 1,
                    }}
                  >
                    {feature.description}
                  </Typography>
                </CardContent>
              </FeatureCard>
            </Grid>
          ))}
        </Grid>


      </Container>
    </WhyChooseContainer>
  );
}
