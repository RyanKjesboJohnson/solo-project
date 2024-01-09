import { Button, Grid, Typography, Box, FormControl, OutlinedInput, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

//This function is opened from the admin page to add a new dog.
//The function starts with local state creation.
//Then the function creates a new FormData called dogForm, and appends the local state.
//The layout of the page is created with MUI.  
//It is a combination of the card and grid elements.
export default function AddDog() {
    //This is the local state
    const [dogNameInput, setDogNameInput] = useState('');
    const [dogShDescInput, setDogShDescInput] = useState('');
    const [dogLgDescInput, setDogLgDescInput] = useState('');
    const [dogPhotoInput, setDogPhotoInput] = useState([]);
    
    //These make constants of various methods
    const dogForm = new FormData();
    const dispatch = useDispatch();
    const history = useHistory();

    //This is the event that triggers creating a new dog.
    //First, it appends each local state to the dogForm.
    //Second, it sends dogForm to the saga function.
    //Third, it routes the user back to the admin page.
    const addDog = (event) => {
        event.preventDefault();
        dogForm.append("image", dogPhotoInput[0]);
        dogForm.append("dogNameInput", dogNameInput);
        dogForm.append("dogShDescInput", dogShDescInput);
        dogForm.append("dogLgDescInput", dogLgDescInput);
        console.log("this is the dogform for adding dog:", dogForm.values());
        dispatch({
            type: 'ADD_DOG',
            payload: dogForm
        })
        // console.log('this is the new dog that was created:', dogForm.get("dogNameInput"));
        history.push('/admin')
    }

    return(
        <form onSubmit={addDog}>
            <Box sx={{m:5, alignContent:"center"}}>
            <Typography variant="h3">Add New Dog</Typography>
            </Box>
        <Grid container direction="row" justify="flex-start" alignItems="flex-start" width='175ch' spacing={0} margin={10} sx={{border: 1, borderColor: 'grey.500'}}>
            {/* This is the first row of items
            It contains the dog's name and short description fields */}
            <Grid container spacing={1} margin={5}>
                <Grid item xs={12} sm={5}>
                    <FormControl>
                        <TextField
                        id="outlined"
                        label="Dog's Name"
                        value={dogNameInput}
                        onChange={(event) => setDogNameInput(event.target.value)}
                        style={{width:500}}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={7}>
                    <FormControl>
                        <TextField
                        id="outlined"
                        label="Dog's Short Description"
                        value={dogShDescInput}
                        onChange={(event) => setDogShDescInput(event.target.value)}
                        style={{width:800}}
                        />
                    </FormControl>
                </Grid>
            </Grid>
            <Grid container spacing={1} margin={5}>
                {/* This is the second row of items.
                It contains the long dog description and picture upload. */}
                <Grid item xs={12} sm={9}>
                    <FormControl>
                        <TextField
                        id="outlined"
                        label="Dog's Long Description"
                        multiline
                        value={dogLgDescInput}
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
                        onChange={(event) => setDogPhotoInput(event.target.files)} />
                </Grid>
            </Grid>
            {/* This is the third row of items and it contains the submit and cancel buttons. */}
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