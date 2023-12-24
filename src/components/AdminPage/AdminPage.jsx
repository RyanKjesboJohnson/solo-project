import React from 'react';
import { Button, Typography } from "@mui/material";
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function AdminPage () {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: 'FETCH_ALL_DOGS' });
      }, []);

    const dogs = useSelector(store => (store.dogsReducer))

    return(
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
                        <Button variant="contained" color="success">Edit Dog</Button>
                    </TableCell>
                    <TableCell align="right">
                        <Button variant="outlined" color="error">Delete Dog</Button>
                    </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          );
}