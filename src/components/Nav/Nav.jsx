import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      <Link to="/home">
      <img src="data:image/jpeg;base64,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" />
      </Link>

      <div>
      <Link className="navLink" to="/about">
          About Us
        </Link>

        <Link className="navLink" to="/dogprofiles">
          Meet our Dogs
      </Link>

        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            <Link className="navLink" to="/user">
              Home
            </Link>

            <Link className="navLink" to="/info">
              Info Page
            </Link>

            <LogOutButton className="navLink" />
          </>
        )}

      </div>
    </div>
  );
}

export default Nav;
