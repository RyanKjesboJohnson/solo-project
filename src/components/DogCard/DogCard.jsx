import * as React from 'react';
import { Box, Button, Popover, Card, CardMedia, CardContent, Grid, Typography, CardActionArea } from '@mui/material';

//This function is the display for the individual dog on the meet our dogs page
//The function is triggered via the DogProfiles function.
//The function defines each dogObject passed to it as 'dog'.
//Each card uses the grid and card element from MUI.
//The MUI popover component is also used to popout a description of the dog.
export default function DogCard(dogObject) {
    const dog = dogObject.dogObject
    console.log("Inside the DogCard function for:", dog.dog_name);
    
    // These constants support the use of the popover action for the dog card.
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
    <Grid item>
        <Card sx={{ minWidth:350, maxWidth: 350 }} key={dog.id}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={dog.pic_url}
                    alt={dog.dog_name}
                />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {dog.dog_name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {dog.dog_sh_descr}
            </Typography>
            </CardContent>
            </CardActionArea>
            <Button sx={{bgcolor: '#0097b2',}} aria-describedby={id} variant="contained" onClick={handleClick}>
                Meet Me
            </Button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'center',
                    horizontal: 'center',
                  }}
                  transformOrigin={{
                    vertical: 'center',
                    horizontal: 'center',
                  }}
            >
            
                <Box sx={{height: 400, minWidth: 400}}>
                    <Typography sx={{ p: 2 }}>{dog.dog_lg_descr}</Typography>
                </Box>
            </Popover>
        </Card>
    </Grid>
    )
}