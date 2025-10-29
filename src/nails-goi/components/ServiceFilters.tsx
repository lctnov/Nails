import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

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

interface ServiceFiltersProps {
  selectedCategory: FilterCategory;
  onCategoryChange: (category: FilterCategory) => void;
}

export default function ServiceFilters({
  selectedCategory,
  onCategoryChange,
}: ServiceFiltersProps) {
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

  return (
    <Container sx={{ py: { xs: 4, sm: 6 }, backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#1a1714' : '#fff', borderRadius: 2, mb: 2 }}>
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
          Lọc theo danh mục
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
        <FilterLabel sx={{ color: '#4a3e35', fontFamily: 'Georgia, serif' }}>Select Category:</FilterLabel>
        <FilterButtonGroup>
          {categories.map((category) => (
            <Chip
              key={category.id}
              label={category.label}
              onClick={() => onCategoryChange(category.id)}
              variant={selectedCategory === category.id ? 'filled' : 'outlined'}
              sx={{
                fontSize: '0.95rem',
                fontWeight: selectedCategory === category.id ? 700 : 500,
                padding: '8px 4px',
                height: 'auto',
                '& .MuiChip-label': {
                  padding: '8px 16px',
                },
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                backgroundColor: selectedCategory === category.id ? '#c9a87d' : 'transparent',
                borderColor: selectedCategory === category.id ? '#c9a87d' : '#e8dfd5',
                color: selectedCategory === category.id ? '#fff' : '#6b5d54',
                '&:hover': {
                  transform: 'scale(1.05)',
                  borderColor: '#c9a87d',
                },
              }}
              title={category.description}
            />
          ))}
        </FilterButtonGroup>
      </FilterContainer>
    </Container>
  );
}
