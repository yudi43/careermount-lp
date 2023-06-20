import React from 'react';
import { Grid } from '@mui/material';

const Banner = () => {
  return (
    <div style={bannerStyle}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={8}>
          <A />
        </Grid>
        <Grid item xs={12} sm={4}>
          <B />
        </Grid>
      </Grid>
    </div>
  );
};

const A = () => {
  return (
    <div style={sectionStyle}>
      <div style={contentStyle}>
        <h2>Component A</h2>
        <p>This is component A contentt.</p>
      </div>
    </div>
  );
};

const B = () => {
  return (
    <div style={sectionStyle}>
      <div style={contentStyle}>
        <h2>Component B</h2>
        <p>This is component B content.</p>
      </div>
    </div>
  );
};

const bannerStyle = {
  padding: '20px',
};

const sectionStyle = {
  backgroundColor: '#f1f1f1',
  padding: '1rem',
  minHeight: '200px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const contentStyle = {
  textAlign: 'center',
};

export default Banner;
