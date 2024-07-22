import React, { useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import MediaCard from '../../components/custom/MediaCard/MediaCard';

const HomePage = () => {


  return (
    <div>
      {/* <Button variant='outlined' onClick={handleClick}>Open Snackbar</Button>
      <AlertMessage isOpen={open} handleClose={handleClose} text='Đăng ký thành công' type="success" /> */}
      <Grid container m={2}>
      <Grid item xs={3}>
          <MediaCard />
        </Grid>
        <Grid item xs={3}>
          <MediaCard />
        </Grid>
        <Grid item xs={3}>
          <MediaCard />
        </Grid>
        <Grid item xs={3}>
          <MediaCard />
        </Grid>
      </Grid>
      <Box sx={{textAlign: "center"}}>
        <Typography variant='h4'>Trang chủ</Typography>
      </Box>
    </div>
  );
};

export default HomePage;
