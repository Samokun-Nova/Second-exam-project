import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Home = () => {
  return (
    <div className="home">
      <h1 className="welcome">ALSCHOOL SECOND SEMESTER EXAMINATION</h1>
      {/* <h1 className="homePage">Homepage</h1> */}
      <nav>
        <ul>
          <li>
            <Link className="toCounter" to="/counter">
              COUNTER APP
            </Link>
          </li>
          <li>
            <Link className="toPage" to="/404">
              404 ERROR PAGE
            </Link>
          </li>
          <li>
            <Link className="toError" to="/test">
              ERROR BOUNDARY
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
