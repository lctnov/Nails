import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';

const TestimonialContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1a1714' : '#faf7f2',
  py: theme.spacing(8),
}));

const TestimonialCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#2a2520' : '#faf7f2',
  border: `1px solid ${theme.palette.mode === 'dark' ? '#4a4035' : '#faf7f2'}`,
  borderRadius: '12px',
  boxShadow: 'none',
  transition: 'all 0.4s ease',
  '&:hover': {
    borderColor: '#c9a87d',
    boxShadow: '0 12px 32px rgba(201, 168, 125, 0.15)',
  },
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

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    rating: 5,
    text: 'Dịch vụ thật sự xuất sắc! Đội ngũ rất chuyên nghiệp và tỉ mỉ đến từng chi tiết. Móng tay của tôi chưa bao giờ đẹp đến thế.',
    service: 'Luxe Nail Design',
  },
  {
    id: 2,
    name: 'Emily Chen',
    rating: 5,
    text: 'Một trải nghiệm thực sự thư thái. Không gian spa sang trọng và thư giãn. Tôi cảm thấy được chăm sóc chu đáo từ đầu đến cuối.',
    service: 'Hair Spa Treatment',
  },
  {
    id: 3,
    name: 'Jessica Martinez',
    rating: 5,
    text: 'Chất lượng sản phẩm được thể hiện rõ qua kết quả. Móng tay tôi vẫn đẹp trong nhiều tuần. Rất đáng để giới thiệu!',
    service: 'Premium Manicure',
  },
  {
    id: 4,
    name: 'Amanda Lee',
    rating: 5,
    text: 'Trải nghiệm làm móng tuyệt vời nhất từ ​​trước đến nay. Các kỹ thuật viên cực kỳ lành nghề và tiêu chuẩn vệ sinh hoàn hảo.',
    service: 'Nail Art & Design',
  },
  {
    id: 5,
    name: 'Michelle Williams',
    rating: 5,
    text: 'Đáng giá từng xu. Các gói combo mang lại giá trị tuyệt vời và kết quả thật đáng kinh ngạc.',
    service: 'Combo Package',
  },
  {
    id: 6,
    name: 'Lisa Anderson',
    rating: 5,
    text: 'Chuyên nghiệp, lịch sự và tài năng. Tiệm này đã trở thành nơi tôi thường xuyên lui tới để làm đẹp.',
    service: 'Hair & Nail Service',
  },
];

export default function Testimonials() {
  return (
    <TestimonialContainer>
      <Container maxWidth="xl">
        <SectionTitle>Khách hàng của chúng tôi nói gì</SectionTitle>
        <Subtitle>Được tin dùng bởi những người đam mê làm đẹp và khách hàng quay lại</Subtitle>

        <Grid container spacing={3} >
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} key={index} sx={{ maxWidth: 600, mx: 'auto' }}>
              <TestimonialCard >
                <CardContent>
                  <Box sx={{ mb: 1.5 }}>
                    <Rating value={testimonial.rating} readOnly size="small" sx={{ color: '#c9a87d' }} />
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#6b5d54',
                      mb: 2,
                      lineHeight: 1.7,
                      fontStyle: 'italic',
                      minHeight: '60px',
                    }}
                  >
                    "{testimonial.text}"
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 700,
                      color: '#4a3e35',
                      mb: 0.5,
                    }}
                  >
                    {testimonial.name}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: '#c9a87d',
                      fontWeight: 600,
                    }}
                  >
                    {testimonial.service}
                  </Typography>
                </CardContent>
              </TestimonialCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </TestimonialContainer>
  );
}
