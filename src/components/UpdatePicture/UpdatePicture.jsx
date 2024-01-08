import { TextField } from "@mui/material"

export default function UpdatePicture(dogToUpdate){
   
   
   return( 
   <TextField
    value={dogToUpdate.dog_url || ''}
    type="file"
    name="dog-image"
    // onChange={(event) => handlePicURL(event.target.files)}
  />
  )

}