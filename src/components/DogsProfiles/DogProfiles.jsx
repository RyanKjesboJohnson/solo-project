import { Grid } from "@mui/material";
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import DogCard from "../DogCard/DogCard";

//This function makes up the Meet our Dogs profile screen.
//It uses useEffect to trigger the FETCH_ALL_DOGS saga.
//Then it uses useSelector to get the dogsReducer.
//It creates the larger grid container that the DogCards will sit in.
//Then it maps through and runs the DogCard function for each dog in array.
export default function DogProfiles () {
    console.log("inside the DogsProfiles component");
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: 'FETCH_ALL_DOGS' });
      }, []);

    const dogsArray = useSelector(store => (store.dogsReducer))


    return(
        <Grid container spacing={5} sx={{ flexGrow: 1 }}>
        {dogsArray.map(dog => 
            <DogCard dogObject={dog} />
            )}
        </Grid>
    )
}