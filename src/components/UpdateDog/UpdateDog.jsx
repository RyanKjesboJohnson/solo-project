import {
  Button,
  Grid,
  Typography,
  Box,
  Card,
  FormControl,
  TextField,
  CardMedia,
  CardActions,
  IconButton,
  CardContent,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import Swal from "sweetalert2";

//This function is opened from the admin page to add a new dog.
//The function starts with local state creation.
//Then the function creates a new FormData called dogForm, and appends the local state.
//The layout of the page is created with MUI.
//It is a combination of the card and grid elements.
export default function UpdateDog() {
  //These make constants of various methods
  const params = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const dogToUpdate = useSelector((store) => store.editDogReducer);

  useEffect(() => {
    dispatch({
      type: "FETCH_DOG",
      payload: params,
    });
  }, [params]);

  const handleNameChange = (newDogName) => {
    dispatch({
      type: "UPDATE_DOG_NAME",
      payload: newDogName,
    });
  };

  const handleShDescrChange = (newShDescr) => {
    dispatch({
      type: "UPDATE_DOG_SH_DESC",
      payload: newShDescr,
    });
  };

  const handleLgDescrChange = (newLgDescr) => {
    dispatch({
      type: "UPDATE_DOG_LG_DESC",
      payload: newLgDescr,
    });
  };

  const handlePicURLEditClick = (event) => {
    Swal.fire({
      title: "Do you want to save this form before editing the photo?",
      showCancelButton: true,
      confirmButtonText: "Save & Edit Photo",
    }).then((result) => {
      if (result.isConfirmed) {
        updateDog(event);
        history.push(`/editDogPic/${dogToUpdate.id}`);
      }
    });
  };

  //This is the event that triggers creating a new dog.
  //First, it appends each local state to the dogForm.
  //Second, it sends dogForm to the saga function.
  //Third, it routes the user back to the admin page.
  const updateDog = (event) => {
    event.preventDefault();
    console.log("this is the dog when we click update:", dogToUpdate);
    dispatch({
      type: "UPDATE_DOG",
      payload: dogToUpdate,
    });
    // console.log('this is the new dog that was created:', dogForm.get("dogNameInput"));
    history.push("/admin");
  };

  return (
    <form onSubmit={() => updateDog(event)}>
      <Box sx={{ m: 5, alignContent: "center" }}>
        <Typography variant="h3">Update Dog</Typography>
      </Box>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        width="175ch"
        spacing={0}
        margin={10}
        sx={{ border: 1, borderColor: "grey.500" }}
      >
        {/* This is the first row of items
            It contains the dog's name and short description fields */}
        <Grid container spacing={1} margin={5}>
          <Grid item xs={12} sm={5}>
            <FormControl>
              <TextField
                id="outlined"
                label="Dog's Name"
                value={dogToUpdate.dog_name || ""}
                onChange={(event) => handleNameChange(event.target.value)}
                style={{ width: 500 }}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={7}>
            <FormControl>
              <TextField
                id="outlined"
                label="Dog's Short Description"
                value={dogToUpdate.dog_sh_descr || ""}
                placeholder="Enter Dog's Short Description"
                onChange={(event) => handleShDescrChange(event.target.value)}
                style={{ width: 800 }}
              />
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={1} margin={5}>
          {/* This is the second row of items.
                It contains the long dog description and picture upload. */}
          <Grid item xs={12} sm={7}>
            <FormControl>
              <TextField
                id="outlined"
                label="Dog's Long Description"
                multiline
                value={dogToUpdate.dog_lg_descr || ""}
                placeholder="Enter Dog's Long Description"
                onChange={(event) => handleLgDescrChange(event.target.value)}
                style={{ width: 800 }}
                rows={6}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={5} justifyContent="center">
            <Card sx={{ width: 200, borderRadius: 2 }}>
              <CardContent>
                <CardMedia component="img" src={dogToUpdate.pic_url} />
              </CardContent>
              <CardActions>
                <IconButton
                  aria-label="Edit Photo"
                  onClick={() => handlePicURLEditClick(event)}
                >
                  <EditIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        {/* This is the third row of items and it contains the submit and cancel buttons. */}
        <Grid container margin={5}>
          <Grid item xs={12} sm={2}>
            <Button variant="contained" type="submit">
              Update Dog
            </Button>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Button
              color="error"
              variant="contained"
              onClick={() => history.push("/admin")}
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
}
