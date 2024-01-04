import { Button, Grid, Typography, Box, FormControl, OutlinedInput, TextField } from "@mui/material";
import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import { CloudUpload } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export default function AddDog() {
    const [dogNameInput, setDogNameInput] = useState('');
    const [dogShDescInput, setDogShDescInput] = useState('');
    const [dogLgDescInput, setDogLgDescInput] = useState('');
    const [dogPhotoInput, setDogPhotoInput] = useState('');
    const dogForm = new FormData();
    const dispatch = useDispatch();
    const history = useHistory();

    const addDog = (event) => {
        event.preventDefault();
        dogForm.set("image", dogPhotoInput);
        dogForm.set("dogNameInput", dogNameInput);
        dogForm.set("dogShDescInput", dogShDescInput);
        dogForm.set("dogLgDescInput", dogLgDescInput);
        dispatch({
            type: 'ADD_DOG',
            payload: dogForm
        })
        console.log('this is the new dog that was created:', dogForm.get("dogNameInput"));
        // history.push('/admin')
    }

    return(
        <form onSubmit={addDog}>
            <Box sx={{m:5, alignContent:"center"}}>
            <Typography variant="h3">Add New Dog</Typography>
            </Box>
        <Grid container direction="row" justify="flex-start" alignItems="flex-start" width='175ch' spacing={0} margin={10} sx={{border: 1, borderColor: 'grey.500'}}>
            <Grid container spacing={1} margin={5}>
                <Grid item xs={12} sm={5}>
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
                <Grid item xs={12} sm={7}>
                    <FormControl>
                        <OutlinedInput
                        id="dogShDesc"
                        label="Dog's Short Description"
                        value={dogShDescInput}
                        placeholder="Enter Dog's Short Description"
                        onChange={(event) => setDogShDescInput(event.target.value)}
                        style={{width:800}}
                        />
                    </FormControl>
                </Grid>
            </Grid>
            <Grid container spacing={1} margin={5}>
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
                <Grid item xs={12} sm={3} justifyContent="center">
                    <TextField 
                        type="file"
                        name="dog-image"
                        onChange={(event) => setDogPhotoInput(event.target.value)} />
                </Grid>
            </Grid>
            <Grid container margin={5}>
                <Grid item xs={12} sm={2}>
                <Button variant="contained" type="submit">Submit Dog</Button>
                </Grid>
                <Grid item xs={12} sm={2}>
                <Button color="error" variant="contained" onClick={() => (history.push('/admin'))} >Cancel</Button>
                </Grid>
            </Grid>
        </Grid>
        </form>
    )
}