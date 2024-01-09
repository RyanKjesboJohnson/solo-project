import { TextField, Button, Card, CardContent, CardMedia, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function UpdatePicture(){
    const dispatch = useDispatch();
    const params = useParams();
    const history = useHistory();
    const [newDogPic, setNewDogPic] = useState([]);
    const dogForm = new FormData();

    const dogToUpdate = useSelector((store) => store.editDogReducer);
    
    useEffect(() => {
      dispatch({
        type: "FETCH_DOG",
        payload: params,
      });
    }, [params]);
   
    const updateDogPic = (event) => {
        event.preventDefault();
        dogForm.append("image", newDogPic);
        dogForm.append("dogName", dogToUpdate.dog_name);
        dogForm.append("dogShDescr", dogToUpdate.dog_sh_descr);
        dogForm.append("dogLgDescr", dogToUpdate.dog_lg_descr);
        dogForm.append("dogId", dogToUpdate.id);
        console.log("This is the dogform item:", dogForm.values());
        dispatch({
          type: "UPDATE_DOG",
          payload: dogForm
        });
        history.push("/admin");
    }

   return( 
    <Box sx={{m: 5}}>
    <Typography sx={{alignContent: "center"}} variant="h4">Update Current Picture</Typography>
    <Box sx={{display: "flex"}}>
        <Card sx={{width: 400, borderRadius: 2}}>
                <CardContent>
                    <CardMedia 
                    component="img"
                    src={dogToUpdate.pic_url}/>
                </CardContent>
        </Card>
        <form onSubmit={() => updateDogPic(event)}>
            <TextField
            type="file"
            name="dog-image"
            onChange={(event) => setNewDogPic(event.target.files[0])}
            />
            <Button type="submit">Update Picture</Button>
        </form>
    </Box>
  </Box>
  )

}