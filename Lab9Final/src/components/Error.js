import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <p>
        Error: Page does not exist! We apologize for the inconvenience, we are
        working hard to fix the issue.
      </p>
      <Link to="/">
        <button type="button" class="btn btn-dark">
          Return to home page
        </button>
      </Link>
      <br />
      <footer>
        <table style={{ width: "100%" }}>
          <tr>
            <th>Explore</th>
          </tr>
          <tr>
            <Link to="/">
              <td>Home</td>
            </Link>
          </tr>
          <tr>
            <Link to="/adventure">
              <td>Games</td>
            </Link>
          </tr>
          <tr>
            <Link to="/gamers">
              <td>Gamers</td>
            </Link>
          </tr>
          <tr>
            <Link to="/about">
              <td>About</td>
            </Link>
          </tr>
          <tr>
            <Link to="/ratings">
              <td>Ratings</td>
            </Link>
          </tr>
        </table>

        <br />

        <p>Author: Rafi Biouss</p>
      </footer>
    </div>
  );
};

export default Error;
