import { createBrowserRouter } from "react-router";
import Error from "../components/Error";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import Loading from "../components/Loading";
import AllPlants from "../Pages/AllPlants";
import MyPlants from "../Pages/MyPlants";
import AuthLayout from "../Root/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddPlant from "../Pages/AddPlant";
import Privetroute from "../Provider/PrivetRoute";











export const router = createBrowserRouter([
  {
    path: "/",
    errorElement:<Error></Error>,
    Component:Root,
    children:[
      {
        path:"/",
        Component:Home,
        hydrateFallbackElement:<Loading></Loading>
      },
      {
        path:"/all-plants",
        element:<AllPlants></AllPlants>
      },
       {
        path:"/Add-Plant",
        element:<Privetroute>
          <AddPlant></AddPlant>
        </Privetroute>
      },
       {
        path:"/my-plants",
        element:<Privetroute>
          <MyPlants></MyPlants>
        </Privetroute>
      },
      {
        path:"/auth",
        element:<AuthLayout></AuthLayout>,
        children:[
          {
             path: "/auth/login",
            element: <Login></Login>
          },
          {
            path: "/auth/register",
            element: <Register></Register>,
          },
        ]
      }

    ]
  },
]);
