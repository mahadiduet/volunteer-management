import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../page/home/Home";
import Mainlayout from "../layout/Mainlayout";
import Registration from "../page/registration/Registration";
import Login from "../page/login/Login";
import AddVolunteerPost from "../page/addvolunteerpost/AddVolunteerPost";
import VolunteersPost from "../page/volunteersPost/VolunteersPost";
import VolunteerDetails from "../page/volunteerDetails/VolunteerDetails";
import MyVolunteerPost from "../page/myvolunteerPost/MyVolunteerPost";
import UpdatePost from "../page/updatepost/UpdatePost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children:[
        {
            path:'/',
            element: <Home />,
            loader: ()=>fetch('http://localhost:5000/volunteersPostHome')
        },
        {
          path:'/registration',
          element: <Registration />
        },
        {
          path:'/login',
          element:<Login />
        },
        {
          path:'/addvolunteerpost',
          element: <AddVolunteerPost />
        },
        {
          path: '/volunteerPostDetails/:id',
          element: <VolunteerDetails />,
          loader: ({ params }) => fetch(`http://localhost:5000/volunteersDetails/${params.id}`)
        },
        {
          path:'/volunteersPost',
          element: <VolunteersPost />
        },
        {
          path:'myvolunteerpost',
          element: <MyVolunteerPost />
        },
        {
          path: 'updatepost/:id',
          element: <UpdatePost />,
          loader: ({ params }) => fetch(`http://localhost:5000/volunteersDetails/${params.id}`)
        }
    ]
  },
]);

export default router;