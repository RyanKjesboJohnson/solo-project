import { Grid } from "@mui/material";
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import DogCard from "../DogCard/DogCard";

export default function DogProfiles () {
    console.log("inside the DogsProfiles component");
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: 'FETCH_ALL_DOGS' });
      }, []);

    const dogsArray = useSelector(store => (store.dogsReducer))


    return(
        <Grid container spacing={5}>
        {dogsArray.map(dog => 
            <DogCard dogObject={dog} />
            )}
        </Grid>
    )
}