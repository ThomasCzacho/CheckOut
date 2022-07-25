import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { Avatar } from '@mui/material';
import ListItemAvatar from '@mui/material/ListItemAvatar';



const products = [
  {
    name: 'Lions Knight Castle',
    desc: 'Lions Knight Castle',
    price: '$399.99',
    src: '//www.lego.com/cdn/cs/set/assets/blt0254ea3dce736ea0/10305.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1.5',

    
  },
  {
    name: 'adidas Original Superstar',
    desc: 'adidas Original Superstar',
    price: '$89.99',
    src: 'https://www.lego.com/cdn/cs/set/assets/blt87b29cdc866d4a4c/10282.jpg?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1.5'
  },
  {
    name: 'Atari® 2600',
    desc: 'Atari® 2600',
    price: '$239.99',
    src: 'https://www.lego.com/cdn/cs/set/assets/blt10c72e2ab2785ea4/10306.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1.5'
  },
  {
    name: 'Chevrolet Camaro Z28',
    desc: 'Chevrolet Camaro Z28',
    price: '$169.99',
    src: 'https://www.lego.com/cdn/cs/set/assets/blt729f7a96490ebf6f/10304.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1.5'
    
  },
  { name: 'Shipping', desc: '', price: 'Free', src: 'https://www.colorhexa.com/ffffff.png',},
];

const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Mr John Smith' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' },
];

export default function Review() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List padding='30px'>
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2" sx={{ py: 1, px: 2 }}>{product.price}</Typography>
            <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={product.src} variant='square' sx={{ width: 56, height: 56 }} />
        </ListItemAvatar>
            
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            $899.96
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>John Smith</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}