import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import FoodFireLogo from "../Images/FoodFireLogo.png";
import "../index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantDetails from "./components/RestaurantDetails";
import Profile from "./components/Profile";

const Instamart = lazy(() => import("./components/Instamart"));

const AppLayout = () => {
  // const searchText = "kfc"; this is nrml variable
  //now will create react var using the hook called useState which return array

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

//creating a route function
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/About",
        element: <About />,
        children: [
          {
            path: "Profile", // dont write /profile
            element: <Profile name="FoodFire" />,
          },
        ],
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "restaurant/:id",
        element: <RestaurantDetails />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);

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
