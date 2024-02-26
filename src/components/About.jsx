import React from "react";
import Footer from "./Footer";
import Shaibaz from "../../Images/Shaibaz.jpg";
import Rakesh from "../../Images/Rakesh.jpeg";
import { Outlet } from "react-router-dom";
import Profile from "./Profile";

// const About = () => {
//   return (
//     //returning a jsx element.
//     <>
//       <div className="about-page">
//         <h1 className="title">Welcome to FoodFire</h1>
//         <p className="subtitle">Where Spicy Delights Await!</p>

//         <section className="mission-section">
//           <h2>Our Mission</h2>
//           <h4>
//             At FoodFire, our mission is simple yet bold: to satisfy our
//             customers at any cost. We believe in delivering quality and
//             delicious spicy food that leaves our customers craving for more.
//           </h4>
//         </section>

//         <section className="team-section">
//           <h2>Meet Our Team</h2>
//           <div className="team-cards">
//             <div className="team-card">
//               <img
//                 src={Shaibaz}
//                 alt="Mohammad Shaibaz Qaisar"
//                 className="founder-image"
//               />
//               <h3>Mohammad Shaibaz Qaisar</h3>
//               <p>Founder</p>
//               <p>Passionate about bringing fiery flavors to your plate!</p>
//             </div>

//             <div className="team-card">
//               <img src={Rakesh} alt="Banda Rakesh" className="founder-image" />
//               <h3>Banda Rakesh</h3>
//               <p>Co-Founder</p>
//               <p>Spice enthusiast with a knack for perfecting recipes!</p>
//             </div>
//           </div>
//         </section>

//         <section className="values-section">
//           <h2>Our Values</h2>
//           <p>
//             We are committed to providing an exceptional customer experience and
//             unwavering support. Your satisfaction is our top priority, and we
//             strive to exceed your expectations with every bite.
//           </p>
//         </section>

//         <section className="why-choose-us-section">
//           <h2>Why Choose Us?</h2>
//           <p>
//             At FoodFire, we understand the effort you put into choosing the
//             perfect meal. That's why we go above and beyond to ensure our
//             service is fulfilling and memorable, leaving you craving for more.
//           </p>
//         </section>
//         {/* <Profile name="Food Fire" /> */}
//         <Outlet />
//       </div>
//     </>
//   );
// };

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("In Parent Constructor");
  }

  componentDidMount() {
    console.log("In Parent mount");
  }

  render() {
    console.log("In parent Render");
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">About Page</h1>
        <h2 className="text-xl text-gray-600">Hello! kuch nahe hai yaha!</h2>
        <Outlet />
        {/* <Outlet /> */}
      </div>
    );
  }
}
export default About;
