import { Container, Grid, TextField, Typography, Box, FormControl, OutlinedInput, colors } from "@mui/material";
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
        <Grid container direction="row" justify="flex-start" alignItems="flex-start" width='175ch' spacing={0} margin={10} sx={{border: 1, borderColor: 'grey.500'}}>
            <Grid container xs="12" spacing="1" margin={10}>
                <Grid item xs={12} sm={6}>
                    <FormControl>
                        <OutlinedInput
                        id="dogName"
                        label="Dog's Name"
                        value={dogNameInput}
                        placeholder="Enter Dog's Name"
                        onChange={(event) => setDogNameInput(event.target.value)}
                        style={{width:500}}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl>
                        <OutlinedInput
                        id="dogShDesc"
                        label="Dog's Short Description"
                        value={dogShDescInput}
                        placeholder="Enter Dog's Short Description"
                        onChange={(event) => setDogShDescInput(event.target.value)}
                        style={{width:700}}
                        />
                    </FormControl>
                </Grid>
            </Grid>
            <Grid container xs="12" spacing="1" margin={10}>
                <Grid item xs={12} sm={9}>
                    <FormControl>
                        <OutlinedInput
                        id="dogLgDesc"
                        label="Dog's Long Description"
                        multiline
                        value={dogLgDescInput}
                        placeholder="Enter Dog's Long Description"
                        onChange={(event) => setDogLgDescInput(event.target.value)}
                        style={{width:800}}
                        rows={6}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <FormControl>
                        <OutlinedInput
                        id="dogShDesc"
                        label="Dog's Short Description"
                        value={dogShDescInput}
                        placeholder="Enter Dog's Short Description"
                        onChange={(event) => setDogShDescInput(event.target.value)}
                        style={{width:300}}
                        />
                    </FormControl>
                </Grid>
            </Grid>
        </Grid>
        </Box>
    )
}