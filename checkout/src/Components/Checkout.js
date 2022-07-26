import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import { Avatar } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


function Copyright() {
  return (
    <AppBar
        position="absolute"
        color="secondary"
        elevation={0}
        sx={{
          position: 'relative',
          borderTop: (t) => `1px solid ${t.palette.divider}`,
        }}

      >
    
    <Toolbar align="center">
      <Typography variant="body2" color="text.secondary" align="center" padding='10px'>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
    <Avatar
        alt="Remy Sharp"
        src="https://brandpalettes.com/wp-content/uploads/2018/08/LEGO-Logo-300x300.png?ezimgfmt=ng:webp/ngcb1"
        sx={{ width: 28, height: 28 }}
        variant="square"
/>
    </Toolbar>
    </AppBar>
  );
}

const steps = ['Shipping address', 'Payment details', 'Review your order'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
}

const theme = createTheme({
    status: {
      danger: '#e53e3e',
    },
    palette: {
      primary: {
        main: '#E3000B',
        darker: '#053e85',
      },
      neutral: {
        main: '#64748B',
        contrastText: '#fff',
      },
      secondary: {
        main: '#ffed00',
        darker: '#ffed00',
      },
      paypal: {
        main: '#00457C',
        darker: '#ffed00',
      },
      
    },
    typography: {
        fontFamily: [
          'Exo 2.0',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
      },
  });

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="secondary"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}

      >
        
        <Toolbar>
            
        <Avatar
        alt="Remy Sharp"
        src="https://brandpalettes.com/wp-content/uploads/2018/08/LEGO-Logo-300x300.png?ezimgfmt=ng:webp/ngcb1"
        sx={{ width: 56, height: 56 }}
        variant="square"
/>
          <Typography variant="h6" color="inherit" noWrap padding="10px">
            Check Out
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 }}}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order
                  confirmation, and will send you an update when your order has
                  shipped.
                </Typography>
                <Avatar
        alt="Remy Sharp"
        src="https://snipstock.com/assets/cdn/png/0484cedc7bfa64d6520be74affa76126.png"
        sx={{ width: 64, height:88
         }}
        variant="square"
        
/>
<FormControlLabel
            control={<Checkbox color="primary" name="Promo" value="yes" />}
            label="I wish to Recieve LEGO® Promotions and Updates by Email"
          />
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}

                  <Button
                    variant="contained"
                    
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        
      </Container>
      <Copyright />
    </ThemeProvider>
  );
}