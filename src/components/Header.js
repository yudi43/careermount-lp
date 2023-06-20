import React from 'react';
import { Grid, IconButton } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import logo from '../assets/cmountlogo.png';

const Header = () => {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="space-between"
      padding={2}
    >
      <Grid item>
        {/* Logo */}
        <img src={logo} alt="Logo" style={{ width: '220px' }} />
      </Grid>
      <Grid item>
        {/* Contact Section */}
        <Grid container justifyContent="space-between" spacing={2}>
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
      </Grid>
    </Grid>
  );
};

export default Header;
