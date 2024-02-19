// import React from "react";

// function Shimmer() {
//   return <h1> Shimmer is Loading...</h1>;
// }

// export default Shimmer;

import React from "react";
import "../../index.css"; // Import the Shimmer CSS file

function Shimmer() {
  return (
    <div className="shimmer-container">
      {[1, 2, 3].map((index) => (
        <div
          key={index}
          className="shimmer-card"
          style={{ border: "2px solid gray ", fontWeight: "bold" }}
        ></div>
      ))}
    </div>
  );
}

export default Shimmer;
