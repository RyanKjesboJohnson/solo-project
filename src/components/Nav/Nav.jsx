import React from "react";
import { Link } from "react-router-dom";
import LogOutButton from "../LogOutButton/LogOutButton";
import "./Nav.css";
import { useSelector } from "react-redux";
import { Grid, Typography } from "@mui/material";

//The nav component is the top menu bar for the application
//This component appears throughout the application on every page
function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <Grid container className="nav">
      <Grid item lg={7}>
        <Link to="/home">
          <img
            id="logo"
            src="/images/ADR_logo.png"
            height={150}
            alt="All dog rescue logo"
          />
        </Link>
      </Grid>
      <Grid item lg={1}>
        <Link className="navLink" to="/about">
          <Typography variant="h5">About Us</Typography>
        </Link>
      </Grid>
      <Grid item lg={1}>
        <Link className="navLink" to="/dogprofiles">
        <Typography variant="h5">Meet our Dogs</Typography>
        </Link>
      </Grid>

      <Grid item lg={1}>
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            <Typography variant="h5">Admin Login</Typography>

            
          </Link>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            <Link className="navLink" to="/admin">
              <Typography variant="h5">Admin Page</Typography>
            </Link>

            <LogOutButton className="navLink" />
          </>
        )}
      </Grid>
    </Grid>
  );
}

export default Nav;
