import * as React from 'react';
import { Box, Button, Popover, Card, CardMedia, CardContent, Grid, Typography, CardActionArea } from '@mui/material';
import { green } from '@mui/material/colors';

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
    <Grid key={dog.id} item xs={12} sm={6} md={6} lg={3}>
        <Card className='card-background' sx={{ backgroundColor: 'white', minWidth:350, maxWidth: 500 }}>
            <CardActionArea className='card-transbox'>
                <CardMedia
                    component="img"
                    height="400"
                    image={dog.pic_url}
                    alt={dog.dog_name}
                />
            <Box sx={{backgroundColor: green[100]}} >
            <CardContent >
                
            <Typography  gutterBottom variant="h5" component="div">
                {dog.dog_name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {dog.dog_sh_descr}
            </Typography>
            </CardContent>
            </Box>
            
            <Box sx={{backgroundColor: green[100]}}>
            <Button sx={{bgcolor: '#0097b2'}} aria-describedby={id} variant="contained" onClick={handleClick}>
                Meet Me
            </Button>
            </Box>
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
            </CardActionArea>
        </Card>
    </Grid>
    )
}