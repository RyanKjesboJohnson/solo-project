import { Container, Grid, TextField, Typography, Box, FormControl, OutlinedInput } from "@mui/material";
import React, { useState } from "react";

export default function AddDog() {
    const [dogNameInput, setDogNameInput] = useState('');
    const [dogShDescInput, setDogShDescInput] = useState('');
    const [dogLgDescInput, setDogLgDescInput] = useState('');



    return(
        <Box type="form" autoComplete="off">
            <Box sx={{m:5, alignContent:"center"}}>
            <Typography variant="h3">Add New Dog</Typography>
            </Box>
        <Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={1}>
            <Grid container xs="12" spacing="1">
                <Grid item xs={12} sm={6}>
                    <FormControl>
                        <OutlinedInput
                        id="dogName"
                        label="Dog's Name"
                        value={dogNameInput}
                        placeholder="Enter Dog's Name"
                        onChange={(event) => setDogNameInput(event.target.value)}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                        <OutlinedInput
                        id="dogShDesc"
                        label="Dog's Short Description"
                        value={dogShDescInput}
                        placeholder="Enter Dog's Short Description"
                        onChange={(event) => setDogShDescInput(event.target.value)}
                        />
                    </FormControl>
                </Grid>
            </Grid>
        </Grid>
        </Box>
    )
}