import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const FromContactContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#2a2520' : '#faf7f2',
  py: theme.spacing(8),
}));

export default function FromContact() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

const inputStyle = {
  width: '150%', // 👈 tăng chiều dài toàn bộ input
  mx: 'auto',    // căn giữa trong Stack
  '& .MuiOutlinedInput-root': {
    height: 54, // cao hơn 1 chút
    backgroundColor: '#a79987ff',
    borderRadius: 1,
    '& fieldset': {
      borderColor: '#a79987ff',
    },
    '&:hover fieldset': {
      borderColor: '#a79987ff',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#1d1c1cff',
      borderWidth: 2,
    },
    '& input, & textarea': {
      color: '#1d1c1cff',
      fontWeight: 500,
    },
  },
  '& .MuiInputLabel-root': {
    color: '#5e3e2fff',
    fontWeight: 500,
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: '#1d1c1cff',
  },
};

  return (
    <FromContactContainer sx={{ pt: 4 }}>
      <Container
        sx={{
          py: { xs: 4, sm: 6 },
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1a1714' : '#fff',
          borderRadius: 2,
        }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontWeight: 800,
                mb: 3,
                color: '#4a3e35',
                fontFamily: 'Georgia, serif',
                fontSize: 'clamp(1.5rem, 5vw, 2rem)',
                letterSpacing: '-0.5px',
              }}
            >
              Gửi tin nhắn
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: '#4a3e35',
                mb: 3,
                lineHeight: 1.7,
              }}
            >
              Hãy điền vào mẫu và chúng tôi sẽ trả lời bạn sớm nhất có thể nếu
              bạn có bất kỳ câu hỏi hoặc thắc mắc nào.
            </Typography>
            <Stack spacing={2}>
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    mb: 2,
                    color: '#4a3e35',
                    fontFamily: 'Georgia, serif',
                  }}
                >
                  Tại sao chọn chúng tôi
                </Typography>
                <Typography variant="body2" sx={{ color: '#4a3e35', mb: 2 }}>
                  • Đội ngũ được đào tạo chuyên nghiệp và giàu kinh nghiệm
                </Typography>
                <Typography variant="body2" sx={{ color: '#4a3e35', mb: 2 }}>
                  • Sản phẩm được chứng nhận cao cấp về độ an toàn
                </Typography>
                <Typography variant="body2" sx={{ color: '#4a3e35', mb: 2 }}>
                  • Giá cả cạnh tranh với các gói độc quyền
                </Typography>
                <Typography variant="body2" sx={{ color: '#4a3e35' }}>
                  • Dịch vụ hiệu quả mà không ảnh hưởng đến chất lượng
                </Typography>
              </Box>
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <form onSubmit={handleSubmit}>
              <Stack spacing={2}>
                <TextField
                  label="Họ và Tên"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  fullWidth
                  required
                  variant="outlined"
                  sx={inputStyle}
                />
                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  fullWidth
                  required
                  variant="outlined"
                  sx={inputStyle}
                />
                <TextField
                  label="Số Điện Thoại"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  fullWidth
                  variant="outlined"
                  sx={inputStyle}
                />
                <TextField
                  label="Chủ Đề"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  fullWidth
                  variant="outlined"
                  sx={inputStyle}
                />
                <TextField
                  label="Nội Dung"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  fullWidth
                  multiline
                  rows={5}
                  required
                  variant="outlined"
                  sx={{
                    ...inputStyle,
                    '& .MuiOutlinedInput-root': {
                      ...inputStyle['& .MuiOutlinedInput-root'],
                      height: 'auto',
                      alignItems: 'flex-start',
                    },
                  }}
                />
				<Box sx={{ display: 'flex', justifyContent: 'center', width: '150%' }}>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{
                    mt: 2,
                    backgroundColor: '#b99167',
                    color: '#fff',
                    fontWeight: 600,
                    letterSpacing: '0.5px',
                    textTransform: 'none',
                    borderRadius: 2,
                    '&:hover': {
                      backgroundColor: '#a57e50',
                    },
                  }}
                >
                  Gửi Tin Nhắn
                </Button>
				</Box>
              </Stack>
            </form>
          </Grid>
        </Grid>
      </Container>
    </FromContactContainer>
  );
}
