import restaurantChefs from "../assets/Mario and Adrian b.jpg";
import restaurant from "../assets/restaurant.jpg";
import React from "react";

export default function About () {
  return (
    <>
      <div className="about">
        <div className="about-content">
          <h4>Little Lemon</h4>
          <h5>Chicago</h5>
          <p>
          LIttle Lemon opened in 1995 by two Itallan brothers, Adrian and Mario. Despite the city s diversity, the two brothers recognized the lack of Mediterranean cuisine in onicago, and were inspired to bring the flavors of their hometown in talv to
the people of Chicago. The two brothers continue to oversee the Little Lemon restaurant, nearly thirty years later.
          </p>
        </div>

        <div className="owners">
          <img id="chefs" src={restaurantChefs} alt="male owner" />
          <img id="restaurant" src={restaurant} alt="female owner" />
        </div>
      </div>
    </>
  );
};

