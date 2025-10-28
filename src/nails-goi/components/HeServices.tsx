import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';

const HeServicesContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#2a2520' : '#faf7f2',
  py: theme.spacing(8),
}));

export default function HeServices() {
  return (
	<HeServicesContainer >	
		<Container maxWidth="xl">
			<Box sx={{
				height: '96px', // tương đương mt: 12
				maxWidth: '800px',
				mx: 'auto',
				textAlign: 'center',
			}}>
			
			</Box>
		</Container>
	</HeServicesContainer>
		
  );
}
