import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import ProductCard from './ProductCard';
import { services, Service } from '../data/services';

type FilterCategory = 'all' | 'nail' | 'hair' | 'combo';

const FilterContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(2),
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  },
}));

const FilterLabel = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: '1rem',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    textAlign: 'center',
  },
}));

const FilterButtonGroup = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  flexWrap: 'wrap',
  justifyContent: 'center',
}));

const ProductsGridContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(2),
  mt: 4,
}));

const CenteredGrid = styled(Grid)(({ theme }) => ({
  maxWidth: '1200px',
  margin: '0 auto',
  width: '100%',
}));

const LoadMoreButtonContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  mt: 4,
  mb: 2,
}));

interface ServiceFiltersProps {
  selectedCategory?: FilterCategory;
  onCategoryChange?: (category: FilterCategory) => void;
  onServiceSelect?: (service: Service) => void;
}

export default function ServiceFilters({
  selectedCategory: externalSelectedCategory,
  onCategoryChange: externalOnCategoryChange,
  onServiceSelect,
}: ServiceFiltersProps) {
  const [selectedCategory, setSelectedCategory] = React.useState<FilterCategory>('all');
  const [displayedCount, setDisplayedCount] = React.useState(9);

  const handleCategoryChange = (category: FilterCategory) => {
    setSelectedCategory(category);
    setDisplayedCount(3);
    externalOnCategoryChange?.(category);
  };

  const categories: { id: FilterCategory; label: string; description: string }[] = [
    {
      id: 'all',
      label: 'Tất Cả',
      description: 'Hiển thị tất cả dịch vụ',
    },
    {
      id: 'nail',
      label: 'Làm Móng',
      description: 'Các dịch vụ làm móng',
    },
    {
      id: 'hair',
      label: 'Gội Đầu',
      description: 'Các dịch vụ gội đầu',
    },
    {
      id: 'combo',
      label: 'Gói Combo',
      description: 'Gói combo tiết kiệm',
    },
  ];

  const filteredServices: Service[] = React.useMemo(() => {
    return selectedCategory === 'all'
      ? services
      : services.filter((service) => service.category === selectedCategory);
  }, [selectedCategory]);

  const displayedServices = filteredServices.slice(0, displayedCount);
  const hasMore = displayedCount < filteredServices.length;

  const handleLoadMore = () => {
    setDisplayedCount((prev) => prev + 9);
  };

  const handleServiceSelect = (service: Service) => {
    onServiceSelect?.(service);
  };

  return (
    <Container sx={{
      py: { xs: 4, sm: 6 },
      backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#1a1714' : '#fff',
      borderRadius: 2,
      mb: 2,
    }}>
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontWeight: 800,
            textAlign: 'center',
            mb: 2,
            color: '#4a3e35',
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(1.5rem, 5vw, 2.2rem)',
            letterSpacing: '-0.5px',
          }}
        >
          Chọn Dịch Vụ Của Bạn
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: 'center',
            color: '#8b7b71',
            mb: 4,
            maxWidth: '700px',
            mx: 'auto',
            lineHeight: 1.7,
          }}
        >
          Khám phá danh mục dịch vụ được tuyển chọn kỹ lưỡng của chúng tôi. Lựa chọn từ các thiết kế móng chuyên biệt,
các liệu trình chăm sóc tóc cao cấp, hoặc các gói combo độc quyền của chúng tôi để nâng cao giá trị.
        </Typography>
      </Box>

      <FilterContainer>
        <FilterLabel sx={{ color: '#4a3e35', fontFamily: 'Georgia, serif' }}>
          Lọc Danh Mục:
        </FilterLabel>
        <FilterButtonGroup>
          {categories.map((category) => {
            const isSelected = selectedCategory === category.id;
            return (
              <Chip
                key={category.id}
                label={category.label}
                onClick={() => handleCategoryChange(category.id)}
                className="filter-chip"
                sx={{
                  fontSize: '1rem',
                  fontWeight: isSelected ? 700 : 500,
                  padding: '8px 4px',
                  height: 'auto',
                  '& .MuiChip-label': {
                    color: '#4a3e35',
                    padding: '10px 22px', 
                    fontFamily: 'Georgia, serif',
                    letterSpacing: '0.3px',
                  },
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  borderRadius: '9999px',
                  backgroundColor: isSelected ? '#b99167' : '#f0e8de',
                  borderColor: isSelected ? '#b18b60' : '#d8cfc6',
                  color: '#000',
                  boxShadow: isSelected
                    ? '0 3px 8px rgba(201,168,125,0.4)'
                    : '0 2px 6px rgba(0,0,0,0.06)',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    backgroundColor: '#b99167',
                    borderColor: '#b18b60',
                    color: '#000',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.12)',
                  },
                  '&:active': {
                    transform: 'translateY(0px)',
                    boxShadow: '0 1px 4px rgba(0,0,0,0.15)',
                  },
                }}
                title={category.description}
              />
            );
          })}
      </FilterButtonGroup>

      </FilterContainer>

     <ProductsGridContainer
        sx={{
          py: 6,
          borderRadius: 3,
        }}
      >
        <CenteredGrid
          container
          spacing={4}
          justifyContent="center"
          alignItems="flex-start"
          sx={{
            maxWidth: '1100px',
            margin: '0 auto',
          }}
        >
          {displayedServices.map((service) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={service.id}
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  maxWidth: 300,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  transition: 'transform 0.3s ease',
                  '&:hover': { transform: 'translateY(-4px)' },
                }}
              >
                <ProductCard service={service} onSelect={handleServiceSelect} />
              </Box>
            </Grid>
          ))}
        </CenteredGrid>

        {hasMore && (
          <LoadMoreButtonContainer>
            <Button
              onClick={handleLoadMore}
              variant="outlined"
              sx={{
                px: 4,
                py: 1.2,
                borderColor: '#c9a87d',
                color: '#c9a87d',
                fontWeight: 600,
                letterSpacing: '0.5px',
                textTransform: 'none',
                fontSize: '1rem',
                borderRadius: 9999,
                backgroundColor: '#f4eee6',
                '&:hover': {
                  borderColor: '#b89968',
                  backgroundColor: '#eae2d7',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Xem thêm
            </Button>
          </LoadMoreButtonContainer>
        )}

        {displayedServices.length === 0 && (
          <Typography
            sx={{
              textAlign: 'center',
              color: '#8b7b71',
              py: 4,
              fontSize: '1.1rem',
            }}
          >
            Không tìm thấy dịch vụ nào trong danh mục này.
          </Typography>
        )}
      </ProductsGridContainer>


    </Container>
  );
}
