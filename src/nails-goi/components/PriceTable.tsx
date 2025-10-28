import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const PriceContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#2a2520' : '#faf7f2',
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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  borderColor: theme.palette.mode === 'dark' ? '#4a4035' : '#e8dfd5',
  padding: '16px',
}));

const HeaderCell = styled(StyledTableCell)(({ theme }) => ({
  backgroundColor: '#c9a87d',
  color: '#fff',
  fontWeight: 700,
  textAlign: 'center',
  fontSize: '1rem',
  letterSpacing: '0.5px',
}));

const CategoryHeader = styled(StyledTableCell)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#3a3230' : '#f0ebe5',
  color: '#4a3e35',
  fontWeight: 700,
  fontSize: '1rem',
  paddingTop: '20px',
  paddingBottom: '12px',
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:hover': {
    backgroundColor: theme.palette.mode === 'dark' ? '#3a3230' : '#f9f5f0',
  },
  transition: 'background-color 0.3s ease',
}));

const pricingData = [
  {
    category: 'LÀM MÓNG TAY / CHÂN',
    items: [
      { service: 'Tẩy sơn gel', price: '60k' },
      { service: 'Tháo móng cơ bản', price: '50k' },
      { service: 'Dũa và định hình móng tay', price: '40k' },
      { service: 'Làm móng tay / móng chân', price: '60k' },
      { service: 'Làm móng tay kiểu Nga', price: '80k' },
    ],
  },
  {
    category: 'THIẾT KẾ MÓNG TAY',
    items: [
      { service: 'Ombre (ngắn / dài)', price: '20 / 25k' },
      { service: 'French (ngắn / dài)', price: '20 / 30k' },
      { service: 'Thiết kế vẽ tay', price: '20 / 40k' },
      { service: 'Sơn móng tay 4 màu', price: '+10 / color' },
      { service: 'Nhãn dán & Decal', price: '5 - 20k' },
    ],
  },
  {
    category: 'CHĂM SÓC MÓNG TAY / CHÂN',
    items: [
      { service: 'Định hình lại', price: '20k' },
      { service: 'Chăm sóc móng bằng Keratin với CND', price: '50k' },
      { service: 'Chăm sóc biểu bì', price: '30k' },
      { service: 'Gói chăm sóc chân/tay đơn lẻ', price: '100 / 150k' },
    ],
  },
  {
    category: 'DỊCH VỤ GỘI TÓC SPA',
    items: [
      { service: 'Gội đầu cơ bản', price: '120k' },
      { service: 'Gội đầu & Dưỡng tóc', price: '200k' },
      { service: 'Chăm sóc tóc tại spa', price: '280k' },
      { service: 'Massage da đầu', price: '80k' },
    ],
  },
  {
    category: 'GÓI COMBO TIẾT KIỆM',
    items: [
      { service: 'Combo cơ bản (Móng + Tóc)', price: '240k' },
      { service: 'Combo cao cấp (Thiết kế + Spa)', price: '480k' },
      { service: 'Combo Deluxe (Sang trọng + Spa)', price: '580k' },
    ],
  },
];

export default function PriceTable() {
  return (
    <PriceContainer sx={{pt: 6, pb: 4}}>
      <Container maxWidth="xl">
        <SectionTitle>Bảng giá của chúng tôi</SectionTitle>
        <Subtitle>Giá cả minh bạch cho tất cả các dịch vụ cao cấp của chúng tôi</Subtitle>

        <TableContainer component={Paper} sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
          <Table>
            <TableHead>
              <TableRow>
                <HeaderCell style={{ width: '70%' }}>Dịch vụ</HeaderCell>
                <HeaderCell align="right" style={{ width: '30%' }}>Giá</HeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {pricingData.map((section, sectionIndex) => (
                <React.Fragment key={sectionIndex}>
                  <TableRow>
                    <CategoryHeader colSpan={2}>{section.category}</CategoryHeader>
                  </TableRow>
                  {section.items.map((item, itemIndex) => (
                    <StyledTableRow key={itemIndex}>
                      <StyledTableCell sx={{ color: '#6b5d54' }}>{item.service}</StyledTableCell>
                      <StyledTableCell align="right" sx={{ color: '#c9a87d', fontWeight: 600 }}>
                        {item.price}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography
            sx={{
              color: '#8b7b71',
              fontSize: '0.95rem',
              fontStyle: 'italic',
            }}
          >
            * Giá có thể thay đổi tùy theo độ phức tạp và các dịch vụ bổ sung
          </Typography>
        </Box>
      </Container>
    </PriceContainer>
  );
}
