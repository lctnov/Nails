import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const GalleryContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#2a2520' : '#faf7f2',
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
}));

const GalleryImage = styled('img')({
  width: '100%',
  height: '280px',
  objectFit: 'cover',
  borderRadius: '8px',
  cursor: 'pointer',
  transition: 'all 0.4s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 12px 32px rgba(201, 168, 125, 0.25)',
  },
});

const SectionTitle = styled(Typography)({
  fontSize: 'clamp(1.8rem, 5vw, 2.8rem)',
  fontWeight: 800,
  textAlign: 'center',
  color: '#4a3e35',
  fontFamily: 'Georgia, serif',
  marginBottom: '1rem',
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

const nailDesigns = [
  { id: 1, title: 'Elegant Ombre', image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&h=600&fit=crop' },
  { id: 2, title: 'Glitter Glamour', image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&h=600&fit=crop' },
  { id: 3, title: 'Minimalist Art', image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&h=600&fit=crop' },
  { id: 4, title: 'Luxe Crystals', image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&h=600&fit=crop' },
  { id: 5, title: 'Gradient Bliss', image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&h=600&fit=crop' },
  { id: 6, title: 'Modern Marble', image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&h=600&fit=crop' },
  { id: 7, title: 'Shimmer Chic', image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&h=600&fit=crop' },
  { id: 8, title: 'Velvet Touch', image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&h=600&fit=crop' },
  { id: 9, title: 'Golden Line', image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&h=600&fit=crop' },
];

export default function NailGallery() {
  const [showAll, setShowAll] = useState(false);

  const visibleDesigns = showAll ? nailDesigns : nailDesigns.slice(0, 6);

  return (
    <GalleryContainer>
      <Container maxWidth="lg">
        <SectionTitle>Bộ sưu tập nghệ thuật làm móng của chúng tôi</SectionTitle>
        <Subtitle>
          Các thiết kế được tuyển chọn thể hiện chuyên môn và nghệ thuật của chúng tôi
        </Subtitle>

        <Grid container spacing={3} justifyContent="center">
          {visibleDesigns.map((design) => (
            <Grid item xs={12} sm={6} md={3} key={design.id}>
              <GalleryImage src={design.image} alt={design.title} />
              <Typography
                sx={{
                  mt: 1.5,
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: '#4a3e35',
                  textAlign: 'center',
                }}
              >
                {design.title}
              </Typography>
            </Grid>
          ))}
        </Grid>

        {nailDesigns.length > 6 && (
          <Box sx={{ textAlign: 'center', mt: 5 }}>
            <Button
              variant="outlined"
              onClick={() => setShowAll(!showAll)}
              sx={{
                px: { xs: 3, sm: 5 },
                py: 1.8,
                backgroundColor: '#c9a87d',
                color: '#eae6e6',
                fontSize: '1rem',
                fontWeight: 600,
                letterSpacing: '0.5px',
                textTransform: 'none',
                borderRadius: '999px',
                '&:hover': {
                  backgroundColor: '#b89968',
                  boxShadow: '0 8px 24px rgba(201, 168, 125, 0.3)',
                },
              }}
            >
              {showAll ? 'Thu gọn' : 'Xem thêm'}
            </Button>
          </Box>
        )}
      </Container>
    </GalleryContainer>
  );
}
