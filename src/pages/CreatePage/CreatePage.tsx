import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInsertUser } from '../../apis/insert-user';

const CreatePage = () => {
    const [firstName,setFirstName] = useState<string>("");
    const [lastName,setLastName] = useState<string>("");
    const [street,setStreet] = useState<string>("");
    const [district,setDistrict] = useState<string>("");
    const [city,setCity] = useState<string>("");
    const [phone,setPhone] = useState<string>("");
    const [role,setRole] = useState<string>("");
    const [password,setPassword] = useState<string>("");
    const {mutate} = useInsertUser();

    const navigate = useNavigate();

    const handleCreateUser = () => {
        mutate({
            data: {
                name: { firstName: firstName, lastName: lastName },
                address: { street: street, district: district, city: city },
                phone: phone,
                role: role,
                password: password
            }
        }, {
            onSuccess: () => {
                navigate("/product");
            }
        });
    };
    return (
        <div>
           <Typography p={3} variant='h5'>** INSERT USER</Typography>
            <Grid container m={3} p={3} sx={{border: '1px solid #cdcdcd'}}>
                <Grid item xs={6} p={1}>
                    <TextField onChange={e => setFirstName(e.target.value)} id="outlined-basic" label="Firstname" variant="outlined" sx={{width: "100%"}} />
                </Grid>
                <Grid item xs={6} p={1}>
                    <TextField onChange={e => setLastName(e.target.value)} id="outlined-basic" label="Lastname" variant="outlined" sx={{width: "100%"}} />
                </Grid>
                <Grid item xs={4} p={1}>
                    <TextField onChange={e => setStreet(e.target.value)} id="outlined-basic" label="Street" variant="outlined" sx={{width: "100%"}} />
                </Grid>
                <Grid item xs={4} p={1}>
                    <TextField onChange={e => setDistrict(e.target.value)} id="outlined-basic" label="District" variant="outlined" sx={{width: "100%"}} />
                </Grid>
                <Grid item xs={4} p={1}>
                    <TextField onChange={e => setCity(e.target.value)} id="outlined-basic" label="City" variant="outlined" sx={{width: "100%"}} />
                </Grid>
                <Grid item xs={4} p={1}>
                    <TextField onChange={e => setPhone(e.target.value)} id="outlined-basic" label="Phone" variant="outlined" sx={{width: "100%"}} />
                </Grid>
                <Grid item xs={4} p={1}>
                    <TextField onChange={e => setRole(e.target.value)} id="outlined-basic" label="Role" variant="outlined" sx={{width: "100%"}} />
                </Grid>
                <Grid item xs={4} p={1}>
                    <TextField onChange={e => setPassword(e.target.value)} id="outlined-basic" label="Password" type='password' variant="outlined" sx={{width: "100%"}} />
                </Grid>
                <Box m={1}>
                    <Button onClick={handleCreateUser} variant='contained' >Save</Button>
                </Box>
            </Grid>
        </div>
    );
}

export default CreatePage;
