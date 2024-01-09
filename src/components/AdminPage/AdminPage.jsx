import React from 'react';
import { Box, Button, Typography } from "@mui/material";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useHistory } from 'react-router-dom';

//The AdminPage function is a page only available to logged in users.
//
export default function AdminPage () {
    const history = useHistory();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: 'FETCH_ALL_DOGS' });
      }, []);

    const dogs = useSelector(store => (store.dogsReducer))
    const handleDelete = (id) => {
        dispatch({ type: 'DELETE_DOG',
                   payload: id })
        dispatch({ type: 'FETCH_ALL_DOGS' })
    };

    return(
        <>
            <Box>
                <Button 
                variant="contained" 
                size="large"
                sx={{marginLeft: 10}}
                onClick={() => {history.push('/addDog')}}>
                    Add New Dog
                </Button>
            </Box>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell align="right">Dog Name</TableCell>
                    <TableCell align="center">Short Dog Description</TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {dogs.map((dog) => (
                    <TableRow
                      key={dog.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {dog.id}
                    </TableCell>
                    <TableCell align="right">{dog.dog_name}</TableCell>
                    <TableCell align="right">{dog.dog_sh_descr}</TableCell>
                    <TableCell align="right">
                        <Button onClick={() => history.push(`/editDog/${dog.id}`)} variant="contained" color="success">Edit Dog</Button>
                    </TableCell>
                    <TableCell align="right">
                        <Button onClick={() => handleDelete(dog.id)} variant="contained" color="error">Delete Dog</Button>
                    </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
        </>
          );
}