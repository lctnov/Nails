import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import AppTheme from '../../shared-theme/AppTheme';
import AppAppBar from '../components/AppAppBar';
import ServiceFilters from '../components/ServiceFilters';
import Footer from '../components/Footer';
import FloatingContactButtons from '../components/FloatingContactButtons';
import { services, Service } from '../data/services';
import HeaderServices from '../components/HeaderServices';

type FilterCategory = 'all' | 'nail' | 'hair' | 'combo';

interface SelectedItem {
  service: Service;
  quantity: number;
}

export default function Services(props: { disableCustomTheme?: boolean }) {
  const [selectedCategory, setSelectedCategory] = React.useState<FilterCategory>('all');
  const [selectedItems, setSelectedItems] = React.useState<SelectedItem[]>([]);
  const [openDialog, setOpenDialog] = React.useState(false);
  const [dialogService, setDialogService] = React.useState<Service | null>(null);

  const handleSelectService = (service: Service) => {
    setDialogService(service);
    setOpenDialog(true);
  };

  const handleAddToCart = () => {
    if (!dialogService) return;

    const existingIndex = selectedItems.findIndex(
      (item) => item.service.id === dialogService.id
    );

    if (existingIndex > -1) {
      const newItems = [...selectedItems];
      newItems[existingIndex].quantity += 1;
      setSelectedItems(newItems);
    } else {
      setSelectedItems([...selectedItems, { service: dialogService, quantity: 1 }]);
    }

    setOpenDialog(false);
    setDialogService(null);
  };

  const calculateTotal = React.useMemo(() => {
    return selectedItems.reduce((total, item) => total + item.service.price * item.quantity, 0);
  }, [selectedItems]);

  const removeItem = (serviceId: string) => {
    setSelectedItems(selectedItems.filter((item) => item.service.id !== serviceId));
  };

  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <AppAppBar />
      <Box sx={{ backgroundColor: '#faf7f2', }}>
        {/* <HeServices> */}
        <HeaderServices />

        {/* Filters */}
        <ServiceFilters
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          onServiceSelect={handleSelectService}
        />

        {/* Service Details Dialog */}
        <Dialog
          open={openDialog}
          onClose={() => setOpenDialog(false)}
          maxWidth="sm"
          fullWidth
        >
          {dialogService && (
            <>
              <DialogTitle>
                <Typography variant="h6">{dialogService.name}</Typography>
              </DialogTitle>
              <DialogContent sx={{ py: 3 }}>
                <Box
                  component="img"
                  src={dialogService.image}
                  alt={dialogService.name}
                  sx={{
                    width: '100%',
                    height: '300px',
                    objectFit: 'cover',
                    borderRadius: 1,
                    mb: 2,
                  }}
                />
                <Typography variant="body1" sx={{ mb: 2 }}>
                  {dialogService.description}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: 'text.secondary',
                    mb: 3,
                    fontStyle: 'italic',
                  }}
                >
                  {dialogService.seoDescription}
                </Typography>
                <Box sx={{ mb: 2 }}>
                  {dialogService.originalPrice ? (
                    <>
                      <Typography
                        variant="body2"
                        sx={{ textDecoration: 'line-through', color: 'text.secondary' }}
                      >
                        {dialogService.originalPrice.toLocaleString('vi-VN')} ��
                      </Typography>
                      <Typography
                        variant="h5"
                        sx={{
                          color: 'primary.main',
                          fontWeight: 'bold',
                        }}
                      >
                        {dialogService.price.toLocaleString('vi-VN')} ₫
                      </Typography>
                      <Chip
                        label={`Tiết kiệm ${dialogService.discount}%`}
                        color="error"
                        size="small"
                        sx={{ mt: 1 }}
                      />
                    </>
                  ) : (
                    <Typography
                      variant="h5"
                      sx={{
                        color: 'primary.main',
                        fontWeight: 'bold',
                      }}
                    >
                      {dialogService.price.toLocaleString('vi-VN')} ₫
                    </Typography>
                  )}
                </Box>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setOpenDialog(false)}>Hủy</Button>
                <Button
                  onClick={handleAddToCart}
                  variant="contained"
                  color="primary"
                >
                  Thêm Vào Giỏ
                </Button>
              </DialogActions>
            </>
          )}
        </Dialog>

        {/* Shopping Cart */}
        {selectedItems.length > 0 && (
          <Container
            sx={{
              py: { xs: 4, sm: 6 },
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark'
                  ? '#2a2520'
                  : '#faf7f2',
              backgroundImage: 'none',
              borderRadius: 2,
              border: (theme) => `1px solid ${theme.palette.mode === 'dark' ? '#4a4035' : '#e8dfd5'}`,
            }}
          >
            <Box sx={{ mb: 4 }}>
              <Typography
                variant="h4"
                component="h2"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                }}
              >
                🛒 Dịch V��� Đã Chọn
              </Typography>
              <Stack spacing={2}>
                {selectedItems.map((item) => (
                  <Card key={item.service.id}>
                    <CardContent
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="h6">{item.service.name}</Typography>
                        <Typography variant="body2" color="text.secondary">
                          Số lượng: {item.quantity}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{ color: 'primary.main', fontWeight: 'bold', mt: 1 }}
                        >
                          {(item.service.price * item.quantity).toLocaleString('vi-VN')} ₫
                        </Typography>
                      </Box>
                      <Button
                        size="small"
                        variant="outlined"
                        color="error"
                        onClick={() => removeItem(item.service.id)}
                      >
                        Xóa
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </Stack>

              {/* Summary */}
              <Card sx={{ mt: 3, backgroundColor: '#c9a87d' }}>
                <CardContent>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      color: '#fff',
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}
                  >
                    <span>Total:</span>
                    <span>{calculateTotal.toLocaleString('vi-VN')} ₫</span>
                  </Typography>
                </CardContent>
              </Card>

              <Box sx={{ mt: 3, textAlign: 'center' }}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    px: 4,
                    py: 1.5,
                    backgroundColor: '#c9a87d',
                    color: '#fff',
                    fontWeight: 600,
                    letterSpacing: '0.5px',
                    textTransform: 'none',
                    fontSize: '1.05rem',
                    '&:hover': {
                      backgroundColor: '#b89968',
                    },
                  }}
                >
                  Book Appointment
                </Button>
              </Box>
            </Box>
          </Container>
        )}

        <Footer />
      </Box>
      <FloatingContactButtons />
    </AppTheme>
  );
}
