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
import PlantsDetails from "../Pages/PlantsDetails";
import UpdatePlants from "../Pages/UpdatePlants";
import AllItems from "../Pages/Dashboard/AllItems";
import AddItems from "../Pages/Dashboard/AddItems";
import MyItems from "../Pages/Dashboard/MyItems";
import DashboardLayout from "../Root/DashboardLayout";
import OverView from "../Pages/Dashboard/OverView";











export const router = createBrowserRouter([
  {
    path: "/",
    errorElement:<Error></Error>,
    Component:Root,
    children:[
      {
        path:"/",
        Component:Home,
         loader:()=>fetch("http://localhost:3000/plants/latest"),
        hydrateFallbackElement:<Loading></Loading>,
        
      },
      {
        path:"/all-plants",
        element:<AllPlants></AllPlants>,
        loader:()=>fetch("http://localhost:3000/plants"),
         hydrateFallbackElement:<Loading></Loading>

      },
       {
        path:"/plants/:id",
        element:<Privetroute>
          <PlantsDetails></PlantsDetails>
        </Privetroute>,
        loader:({params})=>fetch(`http://localhost:3000/plants/${params.id}`),
         hydrateFallbackElement:<Loading></Loading>

      },
       {
        path:"/update/:id",
        element:<Privetroute>
          <UpdatePlants></UpdatePlants>
        </Privetroute>,
        loader:({params})=>fetch(`http://localhost:3000/plants/${params.id}`),
         hydrateFallbackElement:<Loading></Loading>

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
  {
    path: "/dashboard",
    element: (
     
        <Privetroute>
          <DashboardLayout></DashboardLayout>
        </Privetroute>
      
    ),
    children: [
       { index: true, Component: OverView },
      {
        path:'allItems',
        Component:AllItems
      },
      {
        path:"addItems",
        Component:AddItems

      },
        {
        path:"MyItem",
        Component:MyItems

      }
    ],
  },
]);
