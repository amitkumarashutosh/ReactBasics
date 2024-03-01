import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="home-award">
          <img src="asserts/1.png" />
        </div>
        <div className="home-section">
          <h3>
            C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
            the 4th time.
          </h3>
          <ul>
            <li>
              {" "}
              C.R.I.'s energy efficient products are well recognized by various
              Government Institutions, as trustworthy products for various
              projects across the globe to save energy.
            </li>
            <li>
              C.R.I. is the highest contributor in the country for the projects
              of EESL (Energy Efficiency Services Limited) to replace the old
              inefficient pumps with 5 Star rated energy efficient smart pumps
              with IoT enabled control panel.{" "}
            </li>
          </ul>
          <div className="home-section-award">
            <img src="asserts/2.png" />
          </div>
          <p>
            Government of India has awarded the{" "}
            <span className="bold">
              "National Energy Conservation Award 2018"
            </span>
            . Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received
            the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri.
            Raj Kumar Singh, Honorable Minister of State.
          </p>
        </div>
      </div>
      <Products />
    </>
  );
};

export default Home;
