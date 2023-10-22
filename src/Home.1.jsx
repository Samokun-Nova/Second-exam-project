import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="home">
      <h1>Homepage</h1>
      <nav>
        <ul>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to="/404">404 Page</Link>
          </li>
          <li>
            <Link to="/test">Error Boundary Test</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
