import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Link as RouterLink } from 'react-router-dom';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: (theme.vars || theme).palette.divider,
  backgroundColor: theme.vars
    ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
    : alpha(theme.palette.background.default, 0.4),
  boxShadow: (theme.vars || theme).shadows[1],
  padding: '8px 12px',
}));

const Logo = styled(Box)({
  fontWeight: 700,
  fontSize: '1.3rem',
  color: '#4a3e35',
  cursor: 'pointer',
  textDecoration: 'none',
  fontFamily: 'Georgia, serif',
  letterSpacing: '-0.5px',
});

interface AppAppBarProps {
  onNavigate?: (page: string) => void;
}

export default function AppAppBar({ onNavigate }: AppAppBarProps) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const navItems = [
    { label: 'Trang Chủ', path: '/', id: 'home' },
    { label: 'Dịch Vụ', path: '/services', id: 'services' },
    { label: 'Liên Hệ', path: '/contact', id: 'contact' },
  ];

  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
        mt: 'calc(var(--template-frame-height, 0px) + 28px)',
      }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <Box
            sx={{ flexGrow: 2, display: 'flex', alignItems: 'center', px: 0, whiteSpace: 'nowrap', }}
          >
            <RouterLink to="/" style={{ textDecoration: 'none' }}>
              <Logo
                sx={{
                color: '#c9a87d',
              }}
              >✨ Nails & Gội
              </Logo>
            </RouterLink>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'space-between', alignItems: 'center', width: '100%', px: 4}}>
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant="text"
                  size="small"
                  component={RouterLink}
                  to={item.path}
                  sx={{
                    color: '#6b5d54',
                    fontSize: '0.95rem',
                    fontWeight: 500,
                    textTransform: 'none',
                    letterSpacing: '0.3px',
                    '&:hover': {
                      color: '#c9a87d',
                      backgroundColor: 'transparent',
                    },
                    transition: 'color 0.3s ease',
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="top"
              open={open}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: {
                  top: 'var(--template-frame-height, 0px)',
                },
              }}
            >
              <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}
                >
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>

                {navItems.map((item) => (
                  <Button
                    key={item.id}
                    fullWidth
                    component={RouterLink}
                    to={item.path}
                    onClick={() => setOpen(false)}
                    sx={{ mb: 1, justifyContent: 'flex-start' }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}
