import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useUserId } from "../../apis/get-users";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useUpdateUser } from "../../apis/update-user";

const EditPage = () => {
  const { id } = useParams();
  const { isLoading, isError, error, data } = useUserId(id);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const {mutate, isSuccess} = useUpdateUser(id,data);


  useEffect(() => {
    if (data) {
      setFirstName(data[0].name.firstName);
      setLastName(data[0].name.lastName);
    }
  }, [data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error}</div>;
  }

  

  const handleSave = () => {
    if (id) {
        const nameUpdate = {
            name: {
                firstName: firstName,
                lastName: lastName
            }
        };
        mutate({ id: Number(id), data: nameUpdate }); 
    }
};

  return (
    <div>
      {data && (
        <Box p={3}>
          <Typography variant="h5">Edit Profile</Typography>
          <Grid container p={3} m={2} sx={{ border: "1px solid #cdcdcd" }}>
            <Grid item xs={6}>
              <TextField
                onChange={(e) => setFirstName(e.target.value)}
                id="outlined-basic"
                label="First name"
                variant="outlined"
                value={firstName} // Use local state for value
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                onChange={(e) => setLastName(e.target.value)}
                id="outlined-basic"
                label="Last name"
                variant="outlined"
                value={lastName} // Use local state for value
              />
            </Grid>
          </Grid>
          <Button onClick={handleSave} variant="contained" color="success">
            Save
          </Button>
        </Box>
      )}
    </div>
  );
};

export default EditPage;
