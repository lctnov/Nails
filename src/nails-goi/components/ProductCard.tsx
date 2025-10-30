import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import { styled } from '@mui/material/styles';
import { Service } from '../data/services';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  minHeight: '600px',
  backgroundColor: theme.palette.mode === 'dark' ? '#2a2520' : '#fff',
  border: `1px solid ${theme.palette.mode === 'dark' ? '#4a4035' : '#e8dfd5'}`,
  borderRadius: '12px',
  boxShadow: 'none',
  transition: 'all 0.4s ease',
  '&:hover': {
    transform: 'translateY(-6px)',
    borderColor: '#c9a87d',
    boxShadow: '0 12px 32px rgba(201, 168, 125, 0.2)',
  },
}));

const DiscountBadge = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 12,
  right: 12,
  backgroundColor: '#c9a87d',
  color: 'white',
  padding: '6px 12px',
  borderRadius: '20px',
  fontSize: '13px',
  fontWeight: 700,
  zIndex: 1,
  letterSpacing: '0.5px',
}));

interface ProductCardProps {
  service: Service;
  onSelect?: (service: Service) => void;
}

export default function ProductCard({ service, onSelect }: ProductCardProps) {
  return (
    <StyledCard>
      <Box sx={{ position: 'relative', overflow: 'hidden', height: 280 }}>
        <CardMedia
          component="img"
          image={service.image}
          alt={service.name}
          sx={{ objectFit: 'cover', width: '100%', height: '100%' }}
        />
        {service.discount > 0 && (
          <DiscountBadge sx={{ color: '#9a1b0aff' }}>
            -{service.discount}%
          </DiscountBadge>
        )}
      </Box>
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: 2 }}>
        <Typography
          gutterBottom
          variant="h6"
          component="h3"
          sx={{
            fontWeight: 700,
            height: '3em',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            mb: 1,
            color: '#4a3e35',
            fontSize: '1.1rem',
          }}
        >
          {service.name}
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: '#a99885',
            mb: 1.5,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            height: '2em',
            fontStyle: 'italic',
            fontSize: '0.85rem',
          }}
        >
          {service.seoDescription}
        </Typography>
        <Box sx={{ mt: 'auto', mb: 1.5 }}>
          {service.originalPrice ? (
            <Box>
              <Typography
                variant="body2"
                sx={{ textDecoration: 'line-through', color: '#86715bff' }}
              >
                {service.originalPrice.toLocaleString('vi-VN')} ₫
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: '#7a3623ff',
                  fontWeight: 700,
                }}
              >
                {service.price.toLocaleString('vi-VN')} ₫
              </Typography>
            </Box>
          ) : (
            <Typography
              variant="h6"
              sx={{
                color: '#7a3623ff',
                fontWeight: 700,
              }}
            >
              {service.price.toLocaleString('vi-VN')} ₫
            </Typography>
          )}
        </Box>
      </CardContent>
      <Box sx={{ p: 2, pt: 0, mt: 'auto' }}>
        <Button
          variant="contained"
          fullWidth
          onClick={() => onSelect?.(service)}
          sx={{
            py: 1.2,
            backgroundColor: '#c9a87d',
            color: '#fff',
            fontWeight: 600,
            letterSpacing: '0.5px',
            textTransform: 'none',
            fontSize: '1rem',
            '&:hover': {
              backgroundColor: '#b89968',
            },
            transition: 'all 0.3s ease',
          }}
        >
          Đặt dịch vụ
        </Button>
      </Box>
    </StyledCard>
  );
}
