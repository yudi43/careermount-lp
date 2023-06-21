import React from 'react';
import { Grid, IconButton } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

const Header = () => {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      padding={2}
      style={{ backgroundColor: '#f1f1f1' }}
    >
      <Grid item>
        <IconButton>
          <PhoneIcon />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton>
          <WhatsAppIcon />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton>
          <EmailIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default Header;
