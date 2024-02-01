import React from "react";
import ReactDOM from "react-dom/client";
import FoodFireLogo from "../Images/FoodFireLogo.png";
import "../index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

//  const heading = React.createElement("h1", { id: "title", key:"1"}, "SalamReact");

//  //React.CreateElement is creating an object, which then conv into html code, then put upon the DOM
//  console.log(heading)

//     const heading2 = React.createElement("h1", { id: "title", key:"2"}, "SalamReact2");

//     const container = React.createElement(
//     "div",
//     {
//         id: "container",
//     },
//     [heading, heading2]
//     );

//     const Heading1 = () =>(
//         <div>
//             <h1>Hello, I'm in Functional component</h1>
//         </div>
//     );

//DAY5
/* My Food App structure will look like this, 
            1) Header
                - Logo
                - Nav Items(right side)
                - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating
            3) Footer
                - Links
                - Copyrights
       
*/

//Creating restaruent card
//creating a obj for res
// const mehfil = {
//   name: "Mehfil",
//   image: "https://lh5.googleusercontent.com/p/AF1QipMmm4Mtb5UVGCvRjAd2UupwB46M9KIigpO0OoW0=w260-h175-n-k-no",
//   cusines: ["Biryani", "Chineese"],
//   rating: "4.1"
// }

// const restaruentList = [
//   {
//     name: "Mehfil",
//     image: "https://lh5.googleusercontent.com/p/AF1QipMmm4Mtb5UVGCvRjAd2UupwB46M9KIigpO0OoW0=w260-h175-n-k-no",
//     cusines: ["Biryani", "Chineese"],
//     rating: "4.1"
//   },
//   {
//     name: "Mehfil",
//     image: "https://lh5.googleusercontent.com/p/AF1QipMmm4Mtb5UVGCvRjAd2UupwB46M9KIigpO0OoW0=w260-h175-n-k-no",
//     cusines: ["Biryani", "Chineese"],
//     rating: "4.1"
//   },
//   {
//     name: "Mehfil",
//     image: "https://lh5.googleusercontent.com/p/AF1QipMmm4Mtb5UVGCvRjAd2UupwB46M9KIigpO0OoW0=w260-h175-n-k-no",
//     cusines: ["Biryani", "Chineese"],
//     rating: "4.1"
//   }

// ]
