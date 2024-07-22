import React from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';  
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const FooterComponent = () => {
  return <Grid container spacing={2} p={3} sx={{bgcolor: '#333333'}} mt={2}>
    <Grid container item xs={8}>
      <Grid xs={3} mx={5}>
          <Typography variant="h5" gutterBottom mb={2} sx={{color: "#fff"}}>
            About
          </Typography>
          <Typography gutterBottom sx={{color: "#fff"}}>
            Home
          </Typography>
          <Typography gutterBottom sx={{color: "#fff"}}>
            Shop
          </Typography>
          <Typography gutterBottom sx={{color: "#fff"}}>
            Our story
          </Typography>
          <Typography gutterBottom sx={{color: "#fff"}}>
            Blogs
          </Typography>
      </Grid>
      <Grid xs={3}>
          <Typography variant="h5" gutterBottom mb={2} sx={{color: "#fff"}}>
            Help
          </Typography>
          <Typography gutterBottom sx={{color: "#fff"}}>
          Shipping & Returns
          </Typography>
          <Typography gutterBottom sx={{color: "#fff"}}>
          Track Order
          </Typography>
          <Typography gutterBottom sx={{color: "#fff"}}>
          FAQs
          </Typography>
      </Grid>
      <Grid xs={3}>
          <Typography variant="h5" gutterBottom mb={2} sx={{color: "#fff"}}>
            Contact
          </Typography>
          <Typography gutterBottom sx={{color: "#fff"}}>
          Phone:
          </Typography>
          <Typography gutterBottom sx={{color: "#fff", fontWeight:'bold'}}>
          (+1) 123 456 7893
          </Typography>
          <Typography gutterBottom sx={{color: "#fff"}}>
          Email:
          </Typography>
          <Typography gutterBottom sx={{color: "#fff", fontWeight:'bold'}}>
          haihailua123456@gmail.com
          </Typography>
      </Grid>
    </Grid>
    <Grid item xs={4}>
      <Typography gutterBottom variant="h6" sx={{fontWeight: 'bold', color: "#fff"}}>Receive new promotions</Typography>
      <Typography gutterBottom sx={{ color: "#fff", fontWeight: 100 }}>Duis ea tempor commodo amet reprehend</Typography>
      <Box>
      <TextField label="Outlined" variant="outlined" 
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#fff',
            },
            '&:hover fieldset': {
              borderColor: '#fff',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#fff',
            },
            '& .MuiInputBase-input': {
              color: '#fff',
            }
          },
          '& .MuiInputLabel-root': {
            color: '#fff',
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: '#fff',
          }
        }}
      />
      <Button variant="contained"  sx={{color: "#fff", padding: '14px', marginLeft: "10px"}}>Subribe</Button>
      <Box mt={2}>
        <FacebookIcon sx={{padding: '5px',color: '#fff'}}/>
        <GitHubIcon sx={{padding: '5px',color: '#fff'}}/>
        <EmailIcon sx={{padding: '5px',color: '#fff'}}/>
        <LinkedInIcon sx={{padding: '5px',color: '#fff'}}/>
      </Box>
      </Box>
    </Grid>
  </Grid>;
};


export default FooterComponent;
